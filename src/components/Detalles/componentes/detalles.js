import React, {useState,useEffect} from 'react';
import MapView from '../../mapa/leaflet/mapview'
import firebase from '../../../data/firebase-config'
import {onSubmit} from '../../login/google/container'
import GoogleFontLoader from 'react-google-font-loader';
import './Detalle.css'
import 
    {db}
 from '../../../data/firebase-config';
 import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { blue } from '@material-ui/core/colors';
import SimpleDialog from './popup'
import { ContactPhoneRounded, StayCurrentLandscape } from '@material-ui/icons';


import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      
    },
    avatar: {
     
        color: blue[600],
      },
  }));

  


const Detalles = (props) => {
    
    const {idActividad,users,actividad,fecha,precio, organizacion,salida,hora,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,fileUrl,
        cupos,
        contacto,
        Cancelar,
        Agregado,
        value,  
        band,
        getUser,
        Limite
       }= props

       const classes = useStyles();
        
       const [isLogin, setIslogin]=useState(false)
        const [email, setEmail]= useState('')
        const[stid,setstid] =useState('')
        const [nick, setNick]= useState('')
        const [foto,setFoto]=useState(null)
        const [isopen, setisOpen] = useState(false);
        const [abierto, setAbierto]= useState(false)
        const [cerrar, setcerrar] = useState(false)

  const handleClickOpen = () => {
    setisOpen(true);
  };
  console.log('kkk',stid)

  const handleClose = () => {
    setisOpen(false);
  };
  const handleClickCancelar = () => {
    setcerrar(true);
  };

  const handleCancelar = () => {
    setcerrar(false);
  };
        
  const handleClickAbrir = () => {
    setAbierto(true);
  };

  const handleCerrar = () => {
    setAbierto(false);
    
  };
        
      
        

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log('iniciado', user)
              console.log(user.displayName + '\n' + user.email+ '\n' + user.photoURL)
              setIslogin(true)
              setEmail(user.email)
              setstid(user.uid)
              setNick(user.displayName)
              setFoto(user.photoURL)
                
            } else {
                console.log('no iniciado')
            }
          })
    },[])

    const handleAgregarClick = (e) => {
        e.preventDefault();
        //aquí irían las validaciones
        if(stid) {
            db.collection('users').add({
                nick,
                idActividad,
                foto,
                email
            }).then(() => {
                
                Agregado()
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
      }


    return ( 
        <>
        <GoogleFontLoader
            fonts={[
      {
        font: 'Roboto',
        weights: [400, '400i'],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />

            <div style={{height: '140px'}}></div>
        <section style={{height:'auto'}}>
            <h2 style={{fontSize: '50px',background:'white',color:'#00a295',textAlign:'center',fontFamily: 'Roboto, sans-serif'}}>{actividad}</h2>
            <div className="h" style={{display:'flex', flex:'2', }} >
               
                <div style={{width:'50vw', overflow:'hidden' }} >
                    <img className='pic' src={fileUrl} style={{width:'48vw'}}/>
                </div>

                <div className="det" 
                style={{textAlign:'center', width:'50vw',fontFamily: 'Roboto, sans-serif',
                 background:'#00a295', color:'white',fontSize: '15px' , lineHeight:'5px'}}>
                    
                 
                    <h3>Lugar de salida</h3>
                    <h4>{salida}</h4>
                    <hr/>
                    <h3>Organizacion</h3>
                    <h4>{organizacion}</h4>
                    
                    <hr/>
                    <h3>Fecha</h3>
                    <h4>{fecha}</h4>
                    <hr/>
                    <h3>Hora de salida</h3>
                    <h4>{hora}</h4>
                    <hr/>
                    <h3>Precio</h3>
                    <h4>C${precio}</h4>
                    <hr/>
                    <h3>Cupos</h3>
                    <h4>{cupos}</h4>
                </div>
            </div>
            <div style={{display:'flex', flex:'2' }}>
                <div className="mapa" style={{width:'50vw', height:'100vh'}}> 
                <MapView
                    latitud1={latitud1}
                    longitud1={longitud1}
                    latitud2={latitud2}
                    longitud2={longitud2}
                    latitud3={latitud3}
                    longitud3={longitud3}
                /> 
                </div>
                <div className='inf' style={{fontSize: '16px',textAlign:'center',width:'50vw',
                fontFamily: 'Roboto, sans-serif', background:'#00a295', color:'white', lineHeight:'20px'}}>
                <h2>Descripción</h2>
                <p style={{}}>
                   {descripcion}
                </p>
                <hr/>
                <h3>Qué llevar</h3>
                <h4>Suficiente agua <br/> Almuerzo <br/> Ropa deportiva</h4>
                <hr/>
                <h3>Transporte</h3>
                <h4>Se garantiza el transporte de ida y regreso</h4>
                <hr/>
                <h3>Seguridad</h3>
                <h4>Se exige el uso de mascarilla en todo momento
                    <br/> El equipo se encargara de llevar un botiquin de primeros auxilios
                    <br/>
                </h4>
                <hr/>
                   
               <h2>Contacto</h2>
               <p style={{marginLeft:'43%'}}>{contacto}</p> 
                
                </div>
                
            </div>
            
            <div style={{boxSizing: 'borderBox',display:'flex', flex:'2', height:'30vh', width:'100vw', textAlign:'center', marginTop:'20px'}}>
                
                {isLogin===true?
                    <>
                        {email=='intur.org@gmail.com'||email=='pateperro@gmail.com'?
                            <> 
                             <div style={{width:'50vw'}}>
                                <h3>Cupos restantes <br/></h3>
                                
                                {users?<>
                                
                                    {idActividad=== users.idActividad? <>
                                    {users}
                                    <h2>{cupos-users.length}</h2>
                                    </>:null}
                                
                                </>:null}
                                </div>
                             <div>
                                 <button className='btnver'  onClick={handleClickAbrir}>
                                     Ver lista de participantes
                                 </button>
                                 </div>
                                 <Dialog onClose={handleCerrar} aria-labelledby="simple-dialog-title" open={abierto}>
                                        <DialogTitle id="simple-dialog-title">Participantes</DialogTitle>

                                        {users?
                                            <List>
                                                
                                            {users.map((dat)=><> 
                                            
                                                {idActividad=== dat.idActividad? <>
                                                                            
                                                {dat? <>
                                                                            
                                                    {[dat].map(item =>
                                                    <>                     
                                                    <ListItem  key={item.id}>
                                                        <ListItemAvatar>
                                                            <Avatar className={classes.avatar}>
                                                            <img src={item.foto} style={{width:'34px'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText primary={item.nick} />
                                                            </ListItem>
                                                            </>          
                                                    )}</>
                                                    :null
                                                    }             
                                                    </>
                                                    :null
                                                }
                                                    </>
                                                )
                                            } 
                                            </List>
                                            :
                                            
                                            <div>no jhlllj</div> 
                                            
                                        }
          
       
      </Dialog>
                            
                            </>
                        :
                        <div style={{alignItems:'center', placeItems:'center',display:'flex'}}>
                        {band===true?(<>
                            <div style={{width:'50vw'}}>
                            <h3>Cupos <br/></h3>
                            {value===0?<h3>{'cupos llenos'}</h3>:<h2 style={{color:'#00a295'}}>{'Usted esta participando'}</h2>}
                            </div>
                            <button className="btn-cancelar " id="dda" onClick = {handleClickCancelar}>
                            {users?<>
                        {users.map((dat)=><>
                            {idActividad=== dat.idActividad?<>
                            
                           
                            
                            <Dialog
                            open={cerrar}
                            onClose={handleCancelar}   
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Alerta de cancelacion"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Estas apunto de cancelar su participacion
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCancelar} color="primary">
                                    Desacuerdo
                                </Button>
                                <Button onClick={()=>{Cancelar(dat.id)}} color="primary" autoFocus>
                                    De acuerdo
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </>:null}</>
                        )}</>:null}Cancelar</button>
                        
                           </>)
                        :
                        (<>
                        
                            <div style={{width:'50vw'}}>
                           
                            </div>
                        <button className="btn-participar"  id="dd"  onClick={handleClickOpen}>
                            Participar</button>
                            <Dialog
                            open={isopen}
                            onClose={handleClose}   
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Alerta de confirmacion"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Estas apunto de participar en esta actividad
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Desacuerdo
                                </Button>
                                <Button onClick={handleAgregarClick} color="primary" autoFocus>
                                    De acuerdo
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </>)}
                        </div>
                        }
                        
                    </>
                :
                    <button className="btn-cancelar " onClick={onSubmit}>
                        Inicia sesion para participar
                    </button>
                }
               
             
            </div>
            
        </section>
      
        </>     
     );
}
export default Detalles;