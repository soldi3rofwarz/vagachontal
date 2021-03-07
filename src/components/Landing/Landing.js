//https://www.npmjs.com/package/simple-react-footer
//https://reactjsexample.com/a-react-component-for-parallax-effect/

import BackImg from './../../assets/back.jpg'
import Foto2Img from './../../assets/foto2.jpg'
import Foto1Img from './../../assets/foto1.jpg'
import Foto3Img from './../../assets/foto3.jpg'
import Foto4Img from './../../assets/foto4.jpg'
import Foto5Img from './../../assets/foto5.jpg'
import Foto6Img from './../../assets/foto6.jpg'
import Foto7Img from './../../assets/foto7.jpg'
import FotoVision from './../../assets/vision.png'
import FotoMision from './../../assets/mision2.png'
  



import React from 'react';
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
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Parallax } from 'react-parallax';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import PicturesIcon from '@material-ui/icons/Collections';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import UserIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/ListAlt';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import SimpleReactFooter from "simple-react-footer";

import './landing.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '230px'
  },
  title: {
    flexGrow: 1,
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
    width:'1600px',
    color: 'white',
    background: 'radial-gradient(rgba(0, 0, 0, 0.568), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.00))',
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
    fontSize:'35px',
    fontWeight:'bold',
    textShadow: '5px 5px 5px black'
  },

}));

const Home = () => {

    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
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

    const handleExpandClick2 = () => {
      setExpanded2(!expanded2);
    };

  
    return ( 
        <>
          <div className={classes.root}>
            <CssBaseline />
      
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
                <div>
                  <Parallax
                    bgImage={BackImg}
                    bgImageAlt="the cat"
                    strength={100}
                  >
                    
                    <div style={{ height: 570}}>
                      <div className={classes.insideStyles} >
                        <Typography variant="h5" component="h1" className={classes.textoInicio} >
                          ¡Conoce tu tierra, conoce Chontales!
                        </Typography>
                      </div>
                    </div>
                  </Parallax>
                </div>
                <div className={classes.rootGrid}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Card className={classes.rootCard}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Misión"
                            height="150"
                            image={FotoMision}
                            title="Mision"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Misión
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Dar a conocer el turismo Chontaleño, al exponer al público las diferentes actividades que realizan las distintas organizaciones.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card className={classes.rootCard}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Misión"
                            height="150"
                            image={FotoVision}
                            title="Mision"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Visión
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Llegar ser a reconocidos en nuestra región y a nivel internacional ofreciendo siempre un servicio de calidad y con compromiso.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="h3" color="textSecondary" component="h3">
                          Galería
                        </Typography>
                        <Grid  container spacing={3}>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                 bgImage={Foto1Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={8}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax 
                                  bgImage={Foto2Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                   <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={Foto3Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={Foto4Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                   <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={Foto5Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                   <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={7}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={Foto6Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={5}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={Foto7Img}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="h3" color="textSecondary" component="h3">
                          Información
                        </Typography>
                        <Grid  container spacing={3}>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                               
                                title="Puerto Díaz"
                              
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://assets.cdnelnuevodiario.com/cache/85/41/85415047407c57fdef92a54f9ee9d987.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                              <Typography paragraph>Detalles</Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                  })}
                                  onClick={handleExpandClick}
                                  aria-expanded={expanded}
                                  aria-label="show more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography paragraph></Typography>
                                  <Typography>
                                  <p>
                                  La inmensidad de las aguas del lago Cocibolca o de Nicaragua, contienen muchos tesoros naturales que solo necesitan ser visitados para ser conocidos, uno de estos es Puerto Díaz, ubicado a tan solo 28 kilómetros del municipio de Juigalpa.
                                  </p>
                                  Desde este lugar se puede acceder desde la conocida gasolinera Puma en Juigalpa hacia el sur, hasta llegar a sus cristalinas aguas, que sirven de sustento comercial a las familias lugareñas, que ven en la pesca, su principal actividad económica y ahora apuntan al turismo

                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                               
                                title="Amerrique"
                               
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://www.visitanicaragua.com/wp-content/uploads/2020/09/Pe%C3%B1%C3%B3n-del-Cacique-Amerrique-Juigalpa.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                              <Typography paragraph>Detalles</Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                               
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded1,
                                  })}
                                  onClick={handleExpandClick1}
                                  aria-expanded={expanded1}
                                  aria-label="show more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                           
                                  <Typography>
                                  <p>
                                  "Lugar del viento" o "donde el viento sopla", llamaron los mayas a esta cordillera
                                  </p>
                                  <p>
                                  La Reserva Natural de Amerrique es una extensa sierra que determina las condiciones climáticas del departamento de Chontales. Su formación está relacionada a una milenaria actividad volcánica. Antiguamente fue habitada por un aguerrido pueblo, cuyos vestigios están dispersos todo el quebradizo paisaje. Algunas fuentes históricas han relacionado su nombre con el bautizo del continente americano.
                                  </p>
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                                title="El Nancital"
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://nuevaya.com.ni/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/01/Archipielago-El-Nancital-Nicaragua.jpg.webp"
                                title="Paella dish"
                              />
                              <CardContent>
                              <Typography paragraph>Detalles</Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: setExpanded2,
                                  })}
                                  onClick={handleExpandClick2}
                                  aria-expanded={expanded2}
                                  aria-label="show more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography>
                                  <p>
                                  El Nancital un paraíso natural frente a Acoyapa
                                  </p>
                                  <p>
                                  La mayoría de sus islas son vírgenes y están deshabitadas. Las familias que viven en las más grandes llegaron allí hace muchos años, procedentes de Chontales
                                  </p>
                                  <p>
                                  El Archipiélago el Nancital, es un bello paraíso conformado por 27 islas con una gran diversidad de flora y fauna, que el visitante nacional y extranjero disfruta al recorrer el Lago Cocibolca en lancha.
                                  </p>
                                  <p>
                                  32 kilómetros hay que recorrer en vehículo desde el municipio de Acoyapa Chontales, para disfrutar de esta belleza localizada en el centro de Nicaragua.
                                  </p>
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
            </main>
          </div>
      </>

    );
}
export default Home;