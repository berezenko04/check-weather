import { useState } from 'react'
import { Typography, Stack, Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useSelector } from 'react-redux'

//styles
import styles from './Forecast.module.scss'

//components
import Summary from '../Summary'
import WeatherForecast from '../DaysForecast'
import HourlyForecast from '../HourlyForecast'
import SummarySkeleton from '../Skeletons/SummarySkeleton'

//redux
import { weatherSelector } from '@/redux/weather/selectors'
import MoreDetails from '../MoreDetails'


const Forecast: React.FC = () => {
    const [value, setValue] = useState('1');
    const { status } = useSelector(weatherSelector);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Stack direction='column' spacing='32px'>
            <Typography textTransform='uppercase' variant='h4'>
                7 Days Forecast
            </Typography>
            <WeatherForecast />
            <Box className={styles.forecast}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.40)' }}>
                        <TabList onChange={handleChange} aria-label="Weather Tabs" textColor='secondary' className={styles.forecast__tablist}>
                            <Tab label="Summary" value="1" />
                            <Tab label="Hourly" value="2" />
                            <Tab label="More details" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" className={styles.forecast__tabpanel}>
                        {status === 'success' ?
                            <Summary />
                            :
                            <SummarySkeleton />
                        }
                    </TabPanel>
                    <TabPanel
                        value="2"
                        className={`${styles.forecast__tabpanel} ${styles.forecast__tabpanel__hourly}`}
                    >
                        <HourlyForecast />
                    </TabPanel>
                    <TabPanel value="3" className={styles.forecast__tabpanel}>
                        <MoreDetails />
                    </TabPanel>
                </TabContext>
            </Box>
        </Stack>
    )
}

export default Forecast