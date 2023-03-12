import {colors} from '../../constants/colors'
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

const Navbar = () => {
    return (
        <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={2}
        sx={{position: 'sticky', top: 0, zIndex: 99, background: colors.primary, flexDirection: {xs: 'column', sm: 'row'}, gap: {xs: '10px', sm: 0}}}
        >
            <Link className='link' to={'/'}>
                <Typography
                fontSize={'30px'}
                variant={'h4'}
                >
                    AliMover
                </Typography>
            </Link>
            <SearchBar />
            <Button sx={{background: colors.secondary, ':hover': {
                background: colors.primary,
                color: colors.secondary
            }, color: colors.primary, width: {xl: '150px', md: '100px'}}} variant="contained">About</Button>
        </Stack>
    );
}

export default Navbar;