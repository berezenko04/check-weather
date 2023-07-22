import { Skeleton, Box, Stack } from "@mui/material"

const HourSkeleton: React.FC = () => {
    return (
        <Box
            padding='32px'
            sx={{ backgroundColor: `rgba(255, 255, 255, 0.25)` }}
            borderRadius='8px'
        >
            <Stack direction='column' spacing='24px'>
                <Skeleton width={100} height={32} />
                <Stack direction='row' alignItems='center' spacing='24px'>
                    <Skeleton width={64} height={64} variant="rounded" />
                    <Skeleton width={100} height={56} />
                </Stack>
                <Stack direction='column' spacing='8px'>
                    <Skeleton width={150} height={32} />
                    <Skeleton width={110} height={32} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default HourSkeleton