import { Box, Stack, Skeleton } from "@mui/material"

const DaySkeleton: React.FC = () => {
    return (
        <Box
            padding='32px'
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', userSelect: 'none' }}
            borderRadius='8px'
        >
            <Stack direction='column' spacing='24px'>
                <Skeleton width={'50%'} height={32} />
                <Stack direction='row' alignItems='center' spacing='32px'>
                    <Stack direction='row' alignItems='center' spacing='16px'>
                        <Skeleton variant='rounded' width={64} height={64} />
                        <Stack direction='column'>
                            <Skeleton width={80} height={32} />
                            <Skeleton width={64} height={24} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default DaySkeleton