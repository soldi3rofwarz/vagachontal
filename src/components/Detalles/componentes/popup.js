import React,{useState,useEffect} from 'react';
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
    const { onClose, open, users, idActividad} = props;
  
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
       
             

            {users?<>
              <List>
              {console.log(users,'zdgsdzxcxc')}    
                                {users.map((dat)=><>
                                   
                                    {idActividad=== dat.idActividad? <>
                                            {dat.id}
                                            
                                         {dat? <>
                                            
                                        {[dat].map(item =>
                                            <>
                                             
                                             <ListItem  key={item.id}>
                                            <ListItemAvatar>
                                              <Avatar className={classes.avatar}>
                                                <PersonIcon />
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={item.email} />
                                          
                                          </ListItem>
                                            </>
                                           
                                        )}</>:null}
                                        
                                    
                                    </>
                                    :null}
                                </>
                                )} </List>
                                </>:<div>no hay usuarios</div>}
          
       
      </Dialog>
    );
  }

  export default SimpleDialog