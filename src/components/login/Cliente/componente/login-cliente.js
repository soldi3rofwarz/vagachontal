import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import quebrada from './../../../../assets/quebrada.jpg'

import './cliente.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VagaChontal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:  `url(${quebrada})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login=(props)=> {
  const {
  email,
  setemail,
  pass,
  setpass,
  handleLogin,
  handleSignup,
  cuenta,
  setcuenta,
  emailerror,
  passerror}= props 
  
  const classes = useStyles();
  
  const Validar=e=>{
    e.preventDefault();
    
    }



  return (
    <>
      <div style={{height:'75px'}}></div>
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} id='image' >
        <Typography id='texto'>
          Santa Cruz
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="content">
 
          <div className="text">Inicia Sesion</div>
            <form onSubmit={Validar}>
              <div className="field">
                <span className="fas fa-user"></span>
                <input type="text" placeholder="Correo" required value ={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
                </div>
              <div className="field">
                <span className="fas fa-lock"></span>
                <input type="password" placeholder="Contraseña" value ={pass}
                  onChange={(e)=>setpass(e.target.value)}
                />
              
              </div>
              
              <button className='ss' onClick={handleLogin}>Sign in</button>
              <div className="signup">No sos miembro todavia?
                <Link href="/contacto">Contactanos</Link>
              </div>
            </form>
        </div>
        
      </Grid>
    </Grid>
    
    </>
  );
}
export default Login

