import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Badge, Stack, Button } from "@mui/material";
import { NavLink } from "react-router";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
  const links = [
    { title: "Home", to: "/" },
    { title: "Catalog", to: "/catalog" },
    { title: "About", to: "about" },
    { title: "Contact", to: "/contact" },
  ];
  const navStyles = {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "text-primary",
    },
    "&.active": {
      color: "warning.main",
    },
  };

  return (
    <div>
      <AppBar sx={{ mb: 4 }} position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">E-commerce</Typography>
            <Stack direction="row">
              {links.map((link) => (
                <Button key={link.title} component={NavLink} sx={navStyles} to={link.to}>
                  {link.title}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" edge="start" color="inherit">
              <Badge badgeContent="2" color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
