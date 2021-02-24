import Icon2 from './../../../assets/logo2.png'
import firebase,{googleAuthProvider} from '../../../data/firebase-config'

import React,{useState,useEffect} from 'react';
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
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import PicturesIcon from '@material-ui/icons/Collections';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import UserIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/ListAlt';
import { red } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'
import Popper from '@material-ui/core/Popper';
import './head.styles.css'

const drawerWidth = 240; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    color:'green'
  },
  appBar: {
    position:'rellative',
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
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
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
  insideStyles: {
    color: 'white',
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: 8,
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: 'center'
  },
  rootGrid: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  rootCard: {
    width: '100%',
  },
  media: {
    height: 140,
  },
  rootC: {
    width: '100%',
  },
  mediaC: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  textoInicio: {
    textAlign: 'center',
    marginBottom: 20,
  },
}));

const Header =()=>{
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] =useState(false);
    const [anchorEl, setAnchorEl] = useState(null)
    const [foto,setFoto]=useState(null)
    const [nick, setNick]= useState('')
    const [isLogin, setIslogin]=useState(false)
    const [email, setEmail]= useState('')

    const handlelogout = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const abierto = Boolean(anchorEl);
    const id = abierto ? 'simple-popper' : undefined;

    const abierto2 = Boolean(anchorEl);
    const id2 = abierto ? 'simple-popper' : undefined;

    const logOut =()=>{
      firebase.auth().signOut().then(() => {
          console.log('salio')
           setIslogin(false)
         
        }).catch((error) => {
          console.log(error)
        });
  }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log('iniciado', user)
              console.log(user.displayName + '\n' + user.email+ '\n' + user.photoURL)
              setFoto(user.photoURL)
              setNick(user.displayName)
              setIslogin(true)
              setEmail(user.email)
                
            } else {
                console.log('no iniciado')
            }
          })
    },[])
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
    };

    const [expanded2, setExpanded2] = React.useState(false);

  

    
    return(
        <>
        <div className={classes.root}>
            <CssBaseline />
                <AppBar  style={{maxHeight:'66px',background: 'linear-gradient(rgba(30, 125, 235, 0.993),rgba(30, 126, 235, 0.15))'}}
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open,
                })}>
               <Toolbar >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon style={{color:'white'}}/>
                  <Typography> Menu</Typography>
                </IconButton>
              
                <IconButton className={classes.title}>
                  <img src={Icon2} style={{width:'95px',color:'white'}}/>
                </IconButton>
                <div style={{display:'flex'}}>
                  {isLogin===true?<>
                    {email=='hola@gmail.com'?<>
                      <button id='foto' aria-describedby={id2} type="button" onClick={handlelogout}>{email}</button>
                      <Popper id={id} open={abierto2} anchorEl={anchorEl}>
                        <Link to='/loginGoogle'>
                          <button className={classes.paper2} onClick={logOut}>Cerrar sesion</button>
                        </Link>
                      </Popper>
                      </>
                    :
                    <>
                      <h4>{nick}</h4>
                      <img src={foto} id='foto' aria-describedby={id} type="button" onClick={handlelogout} style={{borderRadius:'50%', width:'50px', border: '3px solid white'}}/>
                      <Popper id={id} open={abierto} anchorEl={anchorEl}>
                        <Link to='/loginGoogle'>
                          <button className={classes.paper2} onClick={logOut}>Cerrar sesion</button>
                        </Link>
                      </Popper>
                    </>
                    }
                  </>
                  :
                   <Link to ='/loginGoogle' style={{textDecoration:'none', color:'white',fontSize: '20px'}}>
                    Inicia sesion
                   </Link>}
                </div>
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
                  <ListItem button>
                  
                      <ListItemIcon><HomeIcon/></ListItemIcon>
                      <Link to='/' style={{textDecoration: 'none'}}>
                      <ListItemText primary={'Inicio'} />
                      </Link>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    
                    <ListItemIcon><PicturesIcon/></ListItemIcon>
                    <Link to='/galeria' style={{textDecoration: 'none'}}>
                    <ListItemText primary={'Galería'} />
                    </Link>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    
                    <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                    <Link to='/actividades' style={{textDecoration: 'none'}}>
                    <ListItemText primary={'Actividades'} />
                    </Link>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><PollIcon/></ListItemIcon>
                    <Link to='/datos' style={{textDecoration: 'none'}}>
                      <ListItemText primary={'Estadísticas'} />
                    </Link>
                  </ListItem>
                  <Divider />
                  {isLogin===true?<>
                    {email=='admin@gmail.com'?<>
                       <ListItem button>
                       <ListItemIcon><ListIcon/></ListItemIcon>
                       <Link to='/form' style={{textDecoration: 'none'}}>
                         <ListItemText primary={'Formulario'} />
                       </Link>
                     </ListItem></>
                    :null}</>
                  :null}
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><UserIcon/></ListItemIcon>
                    <Link to='/loginGoogle' style={{textDecoration: 'none'}}>
                      <ListItemText primary={'Cliente'} />
                    </Link>
                  </ListItem>
                  <Divider />
              </List>
            </Drawer>
        </div>
        </>
    )
}
export default Header