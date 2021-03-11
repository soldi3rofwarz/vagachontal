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

    return (
        <>
          <div style={{height:'17px'}}></div>
            <SwipeableTextMobileStepper/>
            <Typography variant="h3" color="textSecondary" component="h3" style={{textAlign:'center'}}>
                  Actividades
                </Typography>
            {listActividades ?

             
            <div className={classes.rootGrid}>
              
                <Paper className={classes.paper} style={{ width:'73vw',display: 'flex'}}>
                   
                    <Grid   spacing={2} className={classes.rootC} display={{display:'flex'}}  >
                        {listActividades.map ((item) =>
                            <p key={item.id}>
                                
                            <Grid item xs={12} style={{marginLeft: '-20px',display:'flex', maxWidth:'23vw'}}>
                        <Card className={classes.rootC} style={{maxWidth:'23vw', minWidth:'23vw'}}>
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

                                    <DeleteIcon onClick = {()=> {onDelete(item.id)}}/>
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