import { useContext } from 'react';
import { UIContext } from '../../context/ui';

import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

    return (
        <Drawer
            anchor='left'
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }} >
                <Box sx={{ padding: '5px 10px' }} >
                    <Typography variant='h4' >Menú</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItemButton key={text} >
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItemButton key={text} >
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
