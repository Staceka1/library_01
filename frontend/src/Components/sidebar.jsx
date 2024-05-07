// Sidebar.jsx is a component that will be used in the Navigate.jsx file. It is a drawer component that will be used to navigate through the application, it will contain a logo and a list of items that will be used to navigate through the application. The drawer will be displayed on the left

import youXlogo from '/youx.svg';
import { Divider, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 340,
          boxSizing: 'border-box',
        }}}>
          <Box sx={{ p: 4, display: 'flex', justifyContent: 'center'}}>
              <img src={youXlogo} alt="youXlogo" style={{ width: '110px', height: 'auto'}} />
          </Box>
          <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="My Account" />
        </ListItem>
          <ListItem button>
          <ListItemText primary="My " />
        </ListItem>
        {/* Add more items as needed */}
      </List>


    </Drawer>
  );
};

export default Sidebar;
