import { Stack, Skeleton, Box } from '@mui/material'


const SummarySkeleton: React.FC = () => {
    return (
        <Box>
            <Stack direction='column' spacing='32px'>
                <Stack direction='row' alignItems='center' spacing='32px'>
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        <Skeleton variant='rounded' width={64} height={64} />
                        <Stack direction='column' spacing='8px'>
                            <Skeleton variant='rounded' width={240} height={40} />
                            <Skeleton variant='rounded' width={240} height={24} />
                        </Stack>
                    </Stack>
                    <Stack direction='column' spacing='8px' width='100%'>
                        <Skeleton width={200} height={40} />
                        <Skeleton width={150} height={30} />
                    </Stack>
                </Stack>
                <Stack direction='row' spacing='32px'>
                    {[...Array(5)].map((_, index) => (
                        <Stack direction='column' spacing='8px' width='100%' key={index}>
                            <Skeleton width={'100%'} height={40} />
                            <Skeleton width={'50%'} height={30} />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}

export default SummarySkeleton