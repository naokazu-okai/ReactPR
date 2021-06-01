import React from 'react';
import { Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '../views/Home';
import Goal from '../views/Goal';
import Career from '../views/Career';
import Character from '../views/Character';
import Address from '../views/Address';

import HomeIcon from '@material-ui/icons/Home';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import ExploreIcon from '@material-ui/icons/Explore';
import ExtensionIcon from '@material-ui/icons/Extension';
import CallEndIcon from '@material-ui/icons/CallEnd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            岡井 直胤の自己PR
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/home" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamiry:'Montserrat, sans-serif'}}>
            <ListItem button>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="ホーム" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/goal" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamiry:'Montserrat, sans-serif'}}>
            <ListItem button>
                <ListItemIcon><AssistantPhotoIcon /></ListItemIcon>
                <ListItemText primary="目標" />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/career" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamiry:'Montserrat, sans-serif'}}>
            <ListItem button>
                <ListItemIcon><ExploreIcon /></ListItemIcon>
                <ListItemText primary="経歴" />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/character" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamiry:'Montserrat, sans-serif'}}>
            <ListItem button>
                <ListItemIcon><ExtensionIcon /></ListItemIcon>
                <ListItemText primary="長所・短所" />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/address" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamiry:'Montserrat, sans-serif'}}>
            <ListItem button>
                <ListItemIcon><CallEndIcon /></ListItemIcon>
                <ListItemText primary="お問い合わせ" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Route path="/goal" component={Goal} />
        <Route path="/home" component={Home} />
        <Route path="/career" component={Career} />
        <Route path="/character" component={Character} />
        <Route path="/address" component={Address} />
      </main>
    </div>
  );
}
