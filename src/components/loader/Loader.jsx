import { Box, CircularProgress, Stack } from "@mui/material";
import { colors } from "../../constants/colors";

const Loader = () => {
    return (
        <Box minHeight={'90vh'}>
            <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'80vh'}
            >
                <CircularProgress sx={{color: colors.primary}} size={'100px'}/>
            </Stack>
        </Box>
    );
}

export default Loader;