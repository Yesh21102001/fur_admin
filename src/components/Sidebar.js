import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { BiCategory } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import List from '@mui/material/List';
import { BiSolidCoupon } from "react-icons/bi";
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { Button, Collapse, Divider, Typography, Avatar } from '@mui/material';
import { FiEdit } from "react-icons/fi";
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import profilePic from "../../src/assets/icons/man.png";

const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  borderColor: "#ede7f6",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 0px)`,
  borderColor: "#ede7f6",
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 0px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderColor: 'none',
  backgroundColor: '#493628',
  boxShadow: 'none',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(8)} + 1px)`,
  marginLeft: open ? `${drawerWidth}px` : 0,
  background: 'transparent',
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    color: "white",
    boxShadow: 'none',
    backgroundColor: '#493628',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: '#493628',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: '#493628',
      },
    }),
  })
);


const drawerWidth1 = 380;
const RightDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth1,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  borderColor: '#fff',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer - 1,
  '& .MuiDrawer-paper': {
    width: drawerWidth1,
    boxSizing: 'border-box',
    borderColor: '#fff',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false); 
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleProfileToggle = () => {
    setProfileOpen(!profileOpen); 
    setNotificationsOpen(false); 
  };

  const handleNotificationsToggle = () => {
    setNotificationsOpen(!notificationsOpen);
    setProfileOpen(false); 
  };

  const SidebarTab = ({ icon, primary, route, subMenuItems, initiallyOpen }) => {
    const [openSubMenu, setOpenSubMenu] = React.useState(initiallyOpen || false);

    const isActive = window.location.pathname === route;

    const handleSubMenuToggle = () => {
      setOpenSubMenu(!openSubMenu);
      setOpen(!open);
    };
    const handleCloseSubMenu = () => {
      setOpenSubMenu(false);
    };
    return (
      <div>
        <ListItem
          disablePadding
          sx={{
            padding: "10px",
            display: "block",
            backgroundColor: isActive ? "#D6C0B3" : "inherit",
            marginLeft: isActive ? "0px" : "0px",
            borderRadius: isActive ? '8px  0 0 8px' : '0',
            color: "white",
            "&:hover": {
              backgroundColor: "#D6C0B3",
              color: "#493628",
              borderRadius: '8px 0 0 8px',
              "& .MuiListItemIcon-root": {
                color: "#493628",
              },
              "& .MuiListItemText-primary": {
                color: "#493628",
              },
            },
          }}
          onClick={() => {
            if (subMenuItems) {
              handleSubMenuToggle();
            } else {
              navigate(route);
            }
          }}
        >
          <ListItem
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              cursor: subMenuItems ? "pointer" : "pointer",
              fontFamily: "Lexend, serif"
            }}
          >
            <ListItemIcon
              primary={primary}
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                fontSize: isActive ? "1.5rem" : "1.2rem",
                color: isActive ? "#493628" : "#fff",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={primary}
              sx={{
                opacity: open ? 1 : 0,
                fontSize: isActive ? "1.5rem" : "1.2rem",
                color: isActive ? "#493628" : "#fff",
                fontWeight: isActive ? "bold" : "bold",
              }}
            />
            {subMenuItems && (openSubMenu ? <MdExpandLess /> : <MdExpandMore />)}
          </ListItem>
        </ListItem>

        {subMenuItems && (
          <Collapse in={openSubMenu} timeout="500" unmountOnExit style={{ marginLeft: "20px" }} onExited={handleCloseSubMenu}>
            <List component="div" disablePadding>
              {subMenuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  sx={{
                    paddingLeft: 0,
                    paddingBottom: "3px",
                    backgroundColor:
                      window.location.pathname === item.route
                        ? "#d1f1f4"
                        : "inherit",
                    borderRadius:
                      window.location.pathname === item.route
                        ? '8px  0 0 8px'
                        : "0",
                    fontSize:
                      window.location.pathname === item.route
                        ? '1.2rem'
                        : "1.0rem",
                  }}
                  onClick={() => navigate(item.route)}
                >
                  <ListItemIcon style={{ marginLeft: "10px", marginRight: "-30px", color: window.location.pathname === item.route ? "#189ab4" : "#05445E", }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.primary} sx={{ color: "#05445E", fontSize: "0.8rem", fontFamily: "Lexend, serif" }} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: '#493628',
          borderRadius: '0 0px 0px 0',
          height: "11%"
        }}
      >
        <Toolbar>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton sx={{ color: "#fff" }} onClick={handleProfileToggle}>
              <AccountCircleIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} style={{ backgroundColor: "#1A4D2E" }}>
        <DrawerHeader position="fixed">
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
          >
            {open ? <MenuIcon style={{ color: "#fff" }} /> : <MenuIcon style={{ color: "#fff" }} />}
          </IconButton>
        </DrawerHeader>
        <List>
          <SidebarTab
            icon={<MdSpaceDashboard />}
            primary="Dashboard"
            route="/dashboard"
          />
          <SidebarTab
            icon={<BiCategory />}
            primary="Categories"
            route="/category"
          />
          <SidebarTab
            icon={<LiaShoppingCartSolid />}
            primary="Products"
            route="/product"
          />
          <SidebarTab
            icon={<FaCartArrowDown />}
            primary="Orders"
            route="/orders"
          />
          <SidebarTab
            icon={<IoPersonSharp />}
            primary="Customers"
            route="/customers"
          />
          <SidebarTab
            icon={<BiSolidCoupon />}
            primary="Coupons"
            route="/coupons"
          />
          <SidebarTab
            icon={<FaSignOutAlt />}
            primary="SignOut"
            route="/"
          />
        </List>
      </Drawer>

      {/* Right Drawer */}
      <RightDrawer anchor="right" open={profileOpen || notificationsOpen}>
        <DrawerHeader sx={{ marginTop: "55px" }}>
          <Typography variant="h5" sx={{ fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#fff" }}>
            {profileOpen ? "Profile" : "Notifications"}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="toggle right drawer"
            onClick={profileOpen ? handleProfileToggle : handleNotificationsToggle}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px"
            }}
          >
            <Avatar
              alt="Profile Picture"
              src={profilePic}
              sx={{
                bgcolor: "#fff",
                color: "#1A4D2E",
                width: 80,
                height: 80,
                cursor: "pointer",
              }}
            />
          </Box>

          <Box sx={{ marginTop: "20px", marginLeft: "10px" }}>
            <FiEdit sx={{ height: "30px", width: "30px", marginLeft: "200px" }} />
            <Typography variant='h6' sx={{ padding: "5px", fontFamily: "Lexend, serif", fontSize: "16px" }}>User Id:</Typography>
            <Typography variant='h6' sx={{ padding: "5px", fontFamily: "Lexend, serif", fontSize: "16px" }}>Name:</Typography>
            <Typography variant='h6' sx={{ padding: "5px", fontFamily: "Lexend, serif", fontSize: "16px" }}>Email:</Typography>
            <Typography variant='h6' sx={{ padding: "5px", fontFamily: "Lexend, serif", fontSize: "16px" }}>Phone Number:</Typography>
            <Typography variant='h6' sx={{ padding: "5px", fontFamily: "Lexend, serif", fontSize: "16px" }}>Address:</Typography>
          </Box>
        </Box>
      </RightDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginTop: '65px',
          backgroundColor: '#f9f9f9',
          borderRadius: '3px 0  0 0 ',
          filter: 'brightness(1.0)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
