import { useContext } from 'react';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { UIContext } from '../../context/ui';

export const Navbar = () => {


    const { openSideMenu } = useContext(UIContext)


    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    onClick={openSideMenu}
                >
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant='h6' >OpenJira</Typography>
            </Toolbar>
        </AppBar>
    )
}
