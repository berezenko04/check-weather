import { Stack, Skeleton } from '@mui/material'

//styles
import styles from './SummarySkeleton.module.scss'


const SummarySkeleton: React.FC = () => {
    return (
        <div className={styles.skeleton}>
            <Stack direction='column' spacing='32px'>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    spacing='32px'
                >
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        <Skeleton variant='rounded' width={64} height={64} />
                        <Stack direction='column' spacing='8px'>
                            <Skeleton variant='rounded' width={200} height={40} />
                            <Skeleton variant='rounded' width={170} height={24} />
                        </Stack>
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

export default SummarySkeleton