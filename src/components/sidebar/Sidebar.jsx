import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Box } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Icon } from '@iconify/react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sitemap = [
    { id: 'dashboard', subheader: 'Dashboard', icon: 'solar:widget-bold' },
    { id: 'analytics', subheader: 'Analytics', icon: 'solar:chart-square-bold' },
    { id: 'schedule', subheader: 'Schedule', icon: 'solar:document-text-bold' },
    { id: 'messages', subheader: 'Messages', icon: 'mage:dashboard-chart-fill' },
    { id: 'settings', subheader: 'Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box className="flex justify-between p-4 bg-blue-600 text-white">
        <h2>College Dashboard</h2>
        <IconButton onClick={toggleSidebar}>
          {/*<Close />*/}
        </IconButton>
      </Box>
      
      <List>
        {sitemap.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.subheader} />
              <Icon icon={item.icon} width={24} height={24} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
