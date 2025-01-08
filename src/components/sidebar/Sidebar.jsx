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
        transition: 'transform 0.3s ease',
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          background: 'linear-gradient(145deg, #3a3a3a, #1c1c1c)', // Gradient for sidebar background
          transform: isOpen ? 'translateX(0)' : 'translateX(-240px)', // Sidebar transition
          color: '#fff', // White text color for contrast
        },
      }}
    >
      {/* Sidebar Header */}
      <Box className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h2 className="text-lg font-bold">College Dashboard</h2>
        <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>

      {/* Sidebar Links List */}
      <List sx={{ paddingTop: '10px' }}>
        {sitemap.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                padding: '12px 16px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hover effect
                },
              }}
            >
              <Icon icon={item.icon} width={24} height={24} style={{ marginRight: '10px' }} />
              <ListItemText
                primary={item.subheader}
                sx={{
                  fontWeight: 500,
                  color: 'white',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
