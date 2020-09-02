import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// below are imported for additional FV icons
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import Fields from "../pages/Fields";
import Report from "../pages/Report";
import Reportv2 from "../pages/Reportv2";
import Setting from "../pages/Setting";
import Help from "../pages/Help";
import Cam from "../pages/Cam";
import Stepperform from "../pages/Stepperform";
import Frames from "../pages/Frames";
// import ChartGallery from "../pages/ChartGallery"
import FavoriteIcon from '@material-ui/icons/Favorite';

// from auth0, path modified 
import NavBar from "./NavBar";
import { useAuth0 } from "../react-auth0-spa";
import Profile from "../components/Profile";
import Sandboxofsandbox from "../pages/Sandboxofsandbox";
// import history from "./utils/history";



const drawerWidth = 240;
const history = createBrowserHistory(); //added

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));




export default function FVApp() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = useState(false); //added
  const [title, setTitle] = useState("Home"); //added
  // auth0
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //End of auth0

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onItemClick = title => () => {
    setTitle(title);
    // setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      
      <CssBaseline />
        

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FriendView 10
          </Typography>
           {/*navbar  */}
           {/* temporarily remove auth0 2020/6/24 */} 
            <NavBar />
        </Toolbar>
      </AppBar>
      <Router history={history}>
      {/* <NavBar />  */}
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          {/* <ListItem
            button
            component={Link}
            to="/report"
            onClick={onItemClick("Reports")}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText>Report V2</ListItemText>
          </ListItem> */}
          <ListItem
            button
            component={Link}
            to="/report2"
            onClick={onItemClick("Reports 2")}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText>Metrics</ListItemText>
          </ListItem>
          <ListItem 
            button
            component={Link}
            to="/fields"
            onClick={onItemClick("My Fields")}
          >
            <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
            <ListItemText>My areas</ListItemText>
          </ListItem>
          <ListItem
              button
              component={Link}
              to="/stepper"
              onClick={onItemClick("Form")}
            >
            <ListItemIcon>
                  <DoubleArrowIcon />
                </ListItemIcon>
              <ListItemText>Workflow</ListItemText>
            </ListItem>
          </List>

          <ListItem
              button
              component={Link}
              to="/cam"
              onClick={onItemClick("Cam")}
            >
            <ListItemIcon>
                  <PhotoCameraIcon />
                </ListItemIcon>
              <ListItemText>Cam</ListItemText>
            </ListItem>
            
          <Divider />
          <List>
          
          <ListItem
            button
            component={Link}
            to="/frames"
            onClick={onItemClick("Programs")}
          >
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText>iFrames</ListItemText>
          </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              component={Link}
              to="/setting"
              onClick={onItemClick("Setting")}
            >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
              <ListItemText>Setting</ListItemText>
            </ListItem>
            
            <ListItem
              button
              component={Link}
              to="/help"
              onClick={onItemClick("Help")}
            >
            <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
              <ListItemText>Help</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/sandboxofsandbox"
              onClick={onItemClick("Sandboxes")}
            >
            <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
              <ListItemText>Sandbox</ListItemText>
            </ListItem>
            
            
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            
            <Route path="/fields" component={Fields} />
            <Route path="/report" component={Report} />
            <Route path="/report2" component={Reportv2} />
            <Route path="/frames" component={Frames} />
            <Route path="/cam" component={Cam} />
            <Route path="/setting" component={Setting} />
            <Route path="/help" component={Help} />
            <Route path="/sandboxofsandbox" component={Sandboxofsandbox} />
            
            <Route path="/profile" component={Profile} />
            <Route path="/stepper" component={Stepperform} />
            <Route exact path="/" component={Home} />
        </main>
      </Router>
      
    </div>
  );
}
