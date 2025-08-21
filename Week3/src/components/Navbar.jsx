import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

// Keep Shop as parent item
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Shop', path: '/shop', subItems: [
      { name: 'Products', path: '/shop/products' },
      { name: 'Cart', path: '/shop/cart' }
    ] 
  },
  { name: 'Contact', path: '/contact' }
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null); // For dropdown
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Drawer for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <img 
          src="/images/logo.png"     
          alt="Logo" 
          style={{ width: "120px", height: "auto", cursor: "pointer" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem disablePadding>
              {item.subItems ? (
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary={item.name} sx={{ textAlign: 'center', fontWeight: 'bold', py: 1 }} />
                  {item.subItems.map((sub) => (
                    <ListItemButton
                      key={sub.name}
                      component={NavLink}
                      to={sub.path}
                      sx={{ pl: 4, textAlign: 'center' }}
                    >
                      <ListItemText primary={sub.name} />
                    </ListItemButton>
                  ))}
                </Box>
              ) : (
                <ListItemButton component={NavLink} to={item.path} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              )}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: '#112335ff' }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <img 
              src="/images/logo.png"     
              alt="Logo" 
              style={{ width: "80px", height: "auto", cursor: "pointer" }}
            />
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap:50 }, alignItems: 'center' }}>
            {navItems.map((item) =>
              item.subItems ? (
                <React.Fragment key={item.name}>
                  <Button
                    color="inherit"
                    onClick={handleMenuOpen}
                    sx={{ fontSize: 18, textTransform: 'none', marginLeft: 2 }}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                  >
                    {item.subItems.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        component={NavLink}
                        to={sub.path}
                        onClick={handleMenuClose}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? '#c29999ff' : '#fff',
                    marginLeft: 20,
                    textDecoration: 'none',
                    fontSize: 18,
                  })}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
