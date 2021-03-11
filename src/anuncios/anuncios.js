import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import anuncio1 from './../assets/pub1.jpg'
import anuncio2 from './../assets/pub2.jpg'
import anuncio3 from './../assets/zoo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1),
      height: theme.spacing(16),
    },
  },
}));

const Anuncios =()=>{
    const classes = useStyles();

    return (
        <>
            <div style={{maxWidth:'29vw',minWidth:'20vw', border: '2px solid #ABD6E1',
                          marginLeft:'20px', boxShadow:'5px 5px 5px #161F1E',maxHeight:'800px'}}>
                <CssBaseline />
                <Container maxWidth="sm" >
                <div className={classes.root} style={{}}>
                    <Paper elevation={0} >
                      <img src={anuncio1} style={{width:'200px'}}/>
                      <hr/>
                      <img src={anuncio2} style={{width:'200px'}}/>
                      <hr/>
                      <img src={anuncio3} style={{width:'200px'}}/>
                    </Paper>
                   
                </div>
                </Container>
            </div>
        </>
    )
}
export default Anuncios 