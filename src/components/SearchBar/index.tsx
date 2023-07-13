import * as React from 'react';
import { LocationOn, Search } from '@mui/icons-material';
import { Grid, Typography, TextField, Box, Autocomplete, InputAdornment } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import { useAppDispatch } from '@/redux/store';
import { fetchCurrentWeather } from '@/redux/weather/asyncActions';
import { getCountryCodeAPI } from '@/API/weatherService';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCYYb9ZtSS19QpJ7fvsU-Tm-x_o9rKIkzc';

function loadScript(src: string, position: HTMLElement | null, id: string) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}
interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
    description: string;
    structured_formatting: StructuredFormatting;
    types: string[];
}

interface CityInfo {
    cityname: string;
    countryCode: string;
}

export default function GoogleMaps() {
    const [value, setValue] = React.useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
    const loaded = React.useRef(false);
    const dispatch = useAppDispatch();

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&language=en`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

    const fetch = React.useMemo(
        () =>
            debounce(
                (request: { input: string }, callback: (results?: readonly PlaceType[]) => void) => {
                    (autocompleteService.current as any).getPlacePredictions(request, callback);
                },
                400,
            ),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
            if (active) {
                let newOptions: readonly PlaceType[] = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = results.filter((result) =>
                        result.types.includes('locality')
                    );
                    setOptions(newOptions);
                }
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);


    // const extractCityInfo = async (option: PlaceType): Promise<CityInfo> => {
    //     const cityName = option.structured_formatting.main_text;
    //     const countryCode = await getCountryCode(option.structured_formatting.secondary_text);
    //     return { cityname: cityName, countryCode: countryCode };
    // };

    // const getCountryCode = async (countryName: string) => {
    //     const country = countryName.split(', ').pop();
    //     const data = await getCountryCodeAPI(country);
    //     if (data) {
    //         return data[0].alpha2Code;
    //     }
    // };

    return (
        <Autocomplete
            id="google-map-demo"
            sx={{ width: 600 }}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={async (event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                // const { cityname, countryCode } = await extractCityInfo(newValue);

                try {
                    dispatch(fetchCurrentWeather({ cityname: newValue?.description }));
                } catch (error) {
                    console.error('Ошибка геокодирования:', error);
                }
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params}
                    label="Location"
                    fullWidth
                />
            )}
            renderOption={(props, option) => {
                const matches =
                    option.structured_formatting.main_text_matched_substrings || [];

                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [
                        match.offset,
                        match.offset + match.length,
                    ]),
                );

                return (
                    <li {...props}>
                        <Grid container alignItems="center" color={''}>
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                <LocationOn sx={{ color: 'text.primary' }} />
                            </Grid>
                            <Grid
                                item
                                sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}
                            >
                                {parts.map((part, index) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{
                                            fontWeight: part.highlight ? 'bold' : 'regular',
                                        }}
                                    >
                                        {part.text}
                                    </Box>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}