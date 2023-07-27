import { Stack, Skeleton } from '@mui/material'

//styles
import styles from './CurrentWeatherSkeleton.module.scss'


const CurrentWeatherSkeleton: React.FC = () => {
    return (
        <div className={styles.skeleton}>
            <Stack direction='column' spacing='32px'>
                <Stack direction='column' spacing='8px'>
                    <Skeleton width={250} height={40} />
                    <Skeleton width={270} height={30} />
                </Stack>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    spacing='32px'
                >
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        <Skeleton variant='rounded' width={64} height={64} />
                        <Skeleton variant='rounded' width={180} height={48} />
                    </Stack>
                    <Stack direction='column' spacing='8px' width='100%'>
                        <Skeleton width={200} height={40} />
                        <Skeleton width={150} height={30} />
                    </Stack>
                </Stack>
                <div className={styles.skeleton__footer}>
                    {[...Array(5)].map((_, index) => (
                        <Stack direction='column' spacing='8px' width='100%' key={index}>
                            <Skeleton width={'100%'} height={40} />
                            <Skeleton width={'50%'} height={30} />
                        </Stack>
                    ))}
                </div>
            </Stack>
        </div>
    )
}

export default CurrentWeatherSkeleton