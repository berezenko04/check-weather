import { useState } from 'react'
import { Typography, Stack, Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

//styles
import styles from './Forecast.module.scss'

//components
import Summary from '../Summary'


const Forecast: React.FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Stack direction='column' spacing='32px'>
            <Typography textTransform='uppercase' variant='h4'>
                10 Days Forecast
            </Typography>
            <Box className={styles.forecast}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.40)' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" textColor='secondary' className={styles.forecast__tablist}>
                            <Tab label="Summary" value="1" />
                            <Tab label="Hourly" value="2" />
                            <Tab label="More details" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" className={styles.forecast__tabpanel}><Summary /></TabPanel>
                    <TabPanel value="2" className={styles.forecast__tabpanel}>Item Two</TabPanel>
                    <TabPanel value="3" className={styles.forecast__tabpanel}>Item Three</TabPanel>
                </TabContext>
            </Box>
        </Stack>
    )
}

export default Forecast