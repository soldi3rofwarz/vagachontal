import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  main:{
    background:'rgba(0, 0, 0, 0.52)',
    borderRadius: '10px',
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color: 'white'
      },
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color:'white'
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

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Login
        </Typography>
        <Grid className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value ={email}
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
                 
            onChange={(e)=>setemail(e.target.value)}
          />
          <p>{emailerror}</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value ={pass}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color='white'
            onChange={(e)=>setpass(e.target.value)}
          />
            <p>{passerror}</p>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          ><Link to ='/' style={{textDecoration: 'none', color: 'white'}}>
            Sign In
            </Link>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color:'white'}}>
                Olvido su contraseña?
              </Link>
            </Grid>
           
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default Login