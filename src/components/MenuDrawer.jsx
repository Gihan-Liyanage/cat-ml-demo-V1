import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';


import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import Filter1Icon from '@mui/icons-material/Filter1';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';

import LineItemTable from './lineItemTable';
import Form from './Form';

const drawerWidth = 240;

export default function MenuDrawer() {

  const [showForm, setshowForm] = React.useState(false)

  const onClick = () => setshowForm(!showForm)

  const menuList = [
    {
      name: 'Sender',
      icon: <LocalShippingIcon />
    },
    {
      name: 'Reciepient',
      icon: <MoveToInboxIcon />
    },
    {
      name: 'Unit',
      icon: <FormatShapesIcon/>
    },
    {
      name: 'Product No.',
      icon: <Filter1Icon />
    }
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Invoice Rows
          </Typography>
          <Button id='new-item-button' variant="contained" onClick={onClick}>
            Categorize new Line Item
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <Typography variant="h6" noWrap component="div" align='center'>
            Apply Filters
          </Typography>
        {/* <Divider /> */}
        <List>
          {menuList.map((menuItem, index) => (
            <ListItem key={menuItem} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

        { showForm ? <Form /> : null }

        < LineItemTable />
      </Box>
    </Box>
  );
}
