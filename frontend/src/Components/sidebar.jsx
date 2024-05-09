// Sidebar.jsx is a component that will be used in the Navigate.jsx file. It is a drawer component that will be used to navigate through the application, it will contain a logo and a list of items that will be used to navigate through the application. The drawer will be displayed on the left

import youXlogo from '/youx.svg';
import { Divider, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 340,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <img
          src={youXlogo}
          alt='youXlogo'
          style={{ width: '110px', height: 'auto' }}
        />
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          sx={{
            color: '#3ADCBF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItemText
            primary='Library'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontFamily: 'Mazzard',
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: 550,
              lineHeight: '100%',
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary='My Account' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Sign Out' />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
