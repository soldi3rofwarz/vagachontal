import firebase,{googleAuthProvider} from '../../../data/firebase-config'
import React,{useState,useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EyeIcon from '@material-ui/icons/Visibility';
import './list.styles.css';
import {Link}from 'react-router-dom';
import SwipeableTextMobileStepper from '../../../steeper/stepper'
//import Detalle from './../../Detalles/componentes/detalles'
import Anuncios from './../../../anuncios/anuncios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    rootGrid: {
      minWidth:'70vw',
      display:'flex',
      flexGrow: 1,
      margin: theme.spacing(12),
    },
    paper: {
      padding: theme.spacing(12),
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
      height: 200,
    },
    textoInicio: {
      textAlign: 'center',
      marginBottom: 20,
    },
  }));
  

export const List = (props) => {

  const [isLogin, setIslogin]=useState(false)
  const [email, setEmail]= useState('')
  const [isopen, setisOpen] = useState(false);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('iniciado', user)
          console.log(user.email)
          setIslogin(true)
          setEmail(user.email)
            
        } else {
            console.log('no iniciado')
        }
      })
},[])
    const {
        listActividades,
        onDelete,
        onEdit
    } = props;
    console.log(listActividades)
    const classes = useStyles();

    const handleClickOpen = () => {
      setisOpen(true);
    };
  
    const handleClose = () => {
      setisOpen(false);
    };

    return (
        <>
          <div style={{height:'17px'}}></div>
            <SwipeableTextMobileStepper/>
            <Typography variant="h3" color="textSecondary" component="h3" style={{textAlign:'center'}}>
                  Actividades
                </Typography>
            {listActividades ?

             
            <div className={classes.rootGrid}>
              
                <Paper className={classes.paper} style={{ width:'70vw',display: 'flex'}}>
                   
                    <Grid   spacing={2} className={classes.rootC} display={{display:'flex'}}  >
                        {listActividades.map ((item) =>
                            <p key={item.id}>
                                
                            <Grid item xs={2} style={{marginLeft: '40px', maxWidth:'40vw'}}>
                        <Card className={classes.rootC} style={{maxWidth:'40vw', minWidth:'40vw'}}>
                            <CardHeader                           
                            title={item.actividad}                           
                            />
                            <CardMedia
                            className={classes.mediaC}
                            image={item.fileUrl}                          
                            />
                            <CardContent>
                            <Typography variant="body2" color="textPrimary" component="p">
                                Actividad: {item.actividad}
                                <Typography/>
                                Fecha: {item.fecha}
                                <Typography/>
                                Precio: {item.precio}
                                <Typography/>
                                Organización: {item.organizacion}
                            </Typography>
                            </CardContent>
                           
                              
                                <CardActions disableSpacing>
                                {isLogin===true?
                                    <>
                                  {email=='admin@gmail.com'?<>
                                <Link to={`/form/${item.id}`}>
                                <IconButton aria-label="editar">
                                    <EditIcon  />
                                </IconButton>
                                </Link>
                                <IconButton aria-label="eliminar">

                                    <DeleteIcon onClick = {handleClickOpen}/>
                                    <Dialog
                                      open={isopen}
                                      onClose={handleClose}   
                                      aria-labelledby="alert-dialog-title"
                                      aria-describedby="alert-dialog-description"
                                      >
                                          <DialogTitle id="alert-dialog-title">{"Alerta de confirmacion"}</DialogTitle>
                                          <DialogContent>
                                          <DialogContentText id="alert-dialog-description">
                                              Estas apunto de borrar esta actividad
                                          </DialogContentText>
                                          </DialogContent>
                                          <DialogActions>
                                          <Button onClick={handleClose} color="primary">
                                              Desacuerdo
                                          </Button>
                                          <Button onClick={()=> {onDelete(item.id)}} color="primary" autoFocus>
                                              De acuerdo
                                          </Button>
                                          </DialogActions>
                                      </Dialog>
                                </IconButton></>
                                :null}
                                  </>
                                :null}
                                <Link to={`/detalle/${item.id}`} style={{textDecoration:'none'}}>
                                <IconButton aria-label="ver" >
                                    <EyeIcon />
                                    <Typography >Ver mas</Typography>
                                </IconButton>
                                </Link>
                                </CardActions>
                              
                            
                            </Card>
                        </Grid>
                            </p>
                        )}
                    </Grid>
                </Paper>

                <Anuncios/>
            </div>               
                :
                'No hay datos'                
            }
           
        </>
    );
};