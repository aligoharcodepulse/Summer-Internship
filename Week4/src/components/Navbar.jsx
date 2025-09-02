import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Upcoming Events", path: "/upcoming-events" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer for mobile
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backdropFilter: "blur(12px)",
        background: "rgba(18, 18, 18, 0.9)", // darker so visible
        height: "100%",
        color: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        EventSphere
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              "&:hover": { background: "rgba(255,255,255,0.1)" },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          width: "100%",
          borderRadius: 0,
          mx: 0,
        }}
      >
        <Toolbar>
          {/* Logo / Brand */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              background: "linear-gradient(90deg,#6a11cb,#2575fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            EventSphere
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.15)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: "#000", // 🔥 force dark color so it's visible
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: "rgba(18, 18, 18, 0.9)", // dark background
            backdropFilter: "blur(12px)",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
