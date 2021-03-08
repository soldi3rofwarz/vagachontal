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
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
      },
  }));

  


const Detalles = (props) => {
    
    const {idActividad,users,actividad,fecha,precio, organizacion,salida,hora,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,fileUrl,
        cupos,
        Cancelar,
        Agregado,
        value,  
        band,
        getUser,
        Limite
       }= props

       const classes = useStyles();
        const [anchorEl, setAnchorEl] = useState(null);

       const [isLogin, setIslogin]=useState(false)
        const [email, setEmail]= useState('')
        const[stid,setstid] =useState('')
        const [nick, setNick]= useState('')
        const [foto,setFoto]=useState(null)
        const [isopen, setisOpen] = useState(false);

  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };
        
        
        const handlepop = (event) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
          };
        
          const open = Boolean(anchorEl);
          const idKey = open ? 'simple-popper' : undefined;
        

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
                foto
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
                 background:'#00a295', color:'white',fontSize: '18px'}}>
                    
                    <br/>

                    <h3>Lugar de salida</h3>
                    <h4>{salida}</h4>
                    
                    <br/>
                    <h3>Organizacion</h3>
                    <h4>{organizacion}</h4>
                    
                    <br/>
                    <h3>Fecha</h3>
                    <h4>{fecha}</h4>
                    <br/>
                    <h3>Hora de salida</h3>
                    <h4>{hora}</h4>
                    <br/>
                    <h3>Precio</h3>
                    <h4>C${precio}</h4>
                    <br/>
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
                <div className='inf' style={{fontSize: '18px',textAlign:'center',width:'50vw',fontFamily: 'Roboto, sans-serif', background:'#00a295', color:'white'}}>
                <h2>Descripción</h2>
                <p style={{}}>
                   {descripcion}
                </p>
                <br/>
                <h2>Qué llevar</h2>
                <h4>Suficiente agua <br/> Almuerzo <br/> Ropa deportiva</h4>
                <br/>
                <h2>Transporte</h2>
                <h4>Se garantiza el transporte de ida y regreso</h4>
                <br/>
                <h2>Seguridad</h2>
                <h4>Se exige el uso de mascarilla en todo momento
                    <br/> El equipo se encargara de llevar un botiquin de primeros auxilios
                    <br/>

                </h4>
                
                </div>
                
            </div>
            
            <div style={{boxSizing: 'borderBox',display:'flex', flex:'2', height:'30vh', width:'100vw', textAlign:'center', marginTop:'20px'}}>
                <div style={{width:'50vw'}}>
                <h3>Cupos restantes <br/></h3>
                {<h3>{value}</h3>}
                </div>
                {isLogin===true?
                    <>
                        {email=='intur.org@gmail.com'?
                            <> 
                             <button aria-describedby={idKey} type="button" onClick={handlepop}>ver participantes</button>
                             {users?<>
                                
                                {users.map((dat)=><>
                                    
                                    {idActividad=== dat.idActividad? <>
                                            {dat.id}
                                           
                                         {dat? <>
                                            
                                        {[dat].map(item =>
                                            <Popper className={classes.paper} id={idKey} open={open} anchorEl={anchorEl} style={{width:'auto', display:'flex'}}>
                                            <h4>{item.nick}</h4>
                                             </Popper>
                                           

                                        
                               
                                        )}</>:null}
                                        
                                    
                                    </>
                                    :null}
                                </>
                                )}
                                </>: <div>no hay usuarios</div>}
                    
                            
                            
                            </>
                        :
                        <div style={{alignItems:'center', placeItems:'center'}}>
                        {band===true?(<>
                        {users.map((dat)=><>
                            {dat.id}
                            <button className="btn-cancelar " id="dd" onClick = {()=>{Cancelar(dat.id)}}>
                            Cancelar</button></>
                        )}
                        
                           </>)
                        :
                        (<><button className="btn-participar"  id="dd"  onClick={handleClickOpen}>
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
                                Would you like to go on an casual date? not only as friends but  either so serious
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
                    <button onClick={onSubmit}>
                        Inicia sesion para participar
                    </button>
                }
               
             
            </div>
            
        </section>
      
        </>     
     );
}
export default Detalles;