import { useAppDispatch } from "@/redux/store";
import { setUnits } from "@/redux/weather/slice";
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import { useState } from "react"


type TUnits = 'metric' | 'imperial';

const ToggleButtons: React.FC = () => {
    const [unit, setUnit] = useState<TUnits>('metric');
    const dispatch = useAppDispatch();

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        units: TUnits,
    ) => {
        if (units !== null) {
            setUnit(units);
            dispatch(setUnits(units));
        }
    };

    return (
        <ToggleButtonGroup
            onChange={handleChange}
            value={unit}
            aria-label="Units"
            size="small"
            exclusive
        >
            <ToggleButton value={'metric'}>C°</ToggleButton>
            <ToggleButton value={'imperial'}>F°</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtons