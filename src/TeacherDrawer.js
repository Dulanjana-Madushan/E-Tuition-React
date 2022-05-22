import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '@mui/material/styles';
import { makeStyles }from '@mui/styles';
import { useState } from 'react';
import React, { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        "&$selected": {
          backgroundColor: "white",
          width:200,
          color: "blue",
          borderTopLeftRadius:10,
          borderBottomLeftRadius:10,
          "&:hover": {
            backgroundColor: "white"
          }
        },
        "&:hover": {
            backgroundColor: "grey"
          }
    },
    selected: {}
})
export default function TeacherDrawer({open}) {

    const styles = useStyles();
    const theme = useTheme();
    // const history = useHistory();
    const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const drawerWidth = 200;

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        // localStorage.setItem('token', null);
        // history.push('/login');
    };

    return (
        <Drawer
            variant={isMdUp ? "permanent" : "temporary"}
            anchor="left"
            open={open}
            sx={{width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  backgroundColor:'#66bb6a',
                  borderRight:'none',
                  boxSizing: 'border-box',
                },
            }}
        >
        <Toolbar />
            <Box>
                <List 
                    sx={{color:'white'}}
                >
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(0)}
                        classes={{
                            root: styles.root,
                            selected: styles.selected
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>


                

                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(1)}
                        classes={{
                            root: styles.root,
                            selected: styles.selected
                        }}
                    >
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat" />
                    </ListItemButton>




                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(2)}
                        classes={{
                            root: styles.root,
                            selected: styles.selected
                        }}
                    >
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>


                </List>
            </Box>
        </Drawer>
    );
}
