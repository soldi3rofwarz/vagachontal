import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import firebase from '../../../data/firebase-config'

const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  });
  
  function SimpleDialog(props) {

    const [isLogin, setIslogin]=useState(false)
    const [email, setEmail]= useState('')
    const[stid,setstid] =useState('')
    const [nick, setNick]= useState('')
    const [foto,setFoto]=useState(null)
    
    const classes = useStyles();
    const { onClose, selectedValue, open, user, idActividad} = props;
  
    const handleClose = () => {
      onClose();
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
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Participantes</DialogTitle>
        <List>
            {isLogin ===true?<>

            {user?<>
                {console.log(user,'zdgsdzxcxc')}                
                                {user.map((dat)=><>
                                   
                                    {idActividad=== dat.idActividad? <>
                                            {dat.id}
                                            
                                         {dat? <>
                                            
                                        {[dat].map(item =>
                                            <>
                                             
                                                <ListItem button key={item}>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.avatar}>
                                                    {item.photoURL}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={item.email} />
                                                <ListItemText primary={item.nick} />
                                                </ListItem>
                                            </>
                                           
                                        )}</>:null}
                                        
                                    
                                    </>
                                    :null}
                                </>
                                )}
                                </>:<div>no hay usuarios</div>}</>: null}
          
        </List>
      </Dialog>
    );
  }

  export default SimpleDialog