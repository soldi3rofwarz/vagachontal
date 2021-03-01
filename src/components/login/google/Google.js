import React,{useState, useEffect} from 'react'
import firebase,{googleAuthProvider} from '../../../data/firebase-config'
import {onSubmit, logOut} from './container'
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
import hato from './../../../assets/hato.jpg'

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
      backgroundImage: `url(${hato})`,
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

const Googled =()=>{

    const classes = useStyles();

    const [foto,setFoto]=useState(null)
    const [nick, setNick]= useState('')
    const [isLogin, setIslogin]=useState(false)

    
   

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log('iniciado', user)
              console.log(user.displayName + '\n' + user.email)
              setFoto(user.photoURL)
              setNick(user.displayName)
              setIslogin(true)
                
            } else {
                console.log('no iniciado')
            }
          })
    },[])
   
   
    
    return(
        <>
        <div style={{height:'75px'}}></div>
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        <Typography id='texto'>
            Hato Grande
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {isLogin=== false?
          <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Inicia sesión con Google
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {'Sos promotor, entra aquí'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
          :<>
          <div style={{}}>
               <img src={foto} style={{width:'150px', borderRadius:'30%', marginLeft:'40%', marginTop:'200px'}}/>
         
               <Typography component="h1" variant="h5" style={{marginLeft:'20%'}}>
                   {nick}
               </Typography>
               <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={logOut}
           >
             Cerrar sesión
           </Button>
          </div>
          
         </>}
        
      </Grid>
    </Grid>
        </>
    )
}
export default Googled;