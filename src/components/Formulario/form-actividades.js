import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './../gallery/ProgressBar'
import Paper from '@material-ui/core/Paper';
import './card.css';
import 
    {db}
 from '../../data/firebase-config';
 import {Edit} from '../../data/actividades'
import {Link} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import { Input, InputLabel, MenuItem, Select,TextareaAutosize,Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AgregarActividades=(props) =>{
  const classes = useStyles();

  let actividadId = '';

    if(props.match) actividadId = props.match.params.actividadId;

    const [actividad, setActividad] = useState('');
    const handleActividadChange = (e) => setActividad(e.target.value);

    const [fecha, setFecha]  = useState('');
    const handleFechaChange = (e) => setFecha(e.target.value);

    const [organizacion, setOrganizacion] = useState('');
    const handleOrganizacionChange = (e) => setOrganizacion(e.target.value);

    const [precio, setPrecio] = useState('');
    const handlePrecioChange = (e) => setPrecio(parseInt(e.target.value));

    const [salida, setSalida] = useState('');
    const handleSalidaChange = (e) => setSalida(e.target.value);

    const [hora, setHora] = useState('');
    const handleHoraChange = (e) => setHora(e.target.value);

    const [cupos, setCupos] = useState('');
    const handleCuposChange = (e) => setCupos(parseInt(e.target.value));

    const [contacto, setContacto] = useState('');
    const handleContactoChange = (e) => setContacto(parseInt(e.target.value));

    const [latitud1, setLatitud1] = useState('');
    const handlelatitudChange = (e) => setLatitud1(e.target.value);

    const [longitud1, setLongitud1] = useState('');
    const handlelongitudChange = (e) => setLongitud1(e.target.value);

    const [latitud2, setLatitud2] = useState('');
    const handlelatitudChange2 = (e) => setLatitud2(e.target.value);

    const [longitud2, setLongitud2] = useState('');
    const handlelongitudChange2 = (e) => setLongitud2(e.target.value);

    const [latitud3, setLatitud3] = useState('');
    const handlelatitudChange3 = (e) => setLatitud3(e.target.value);

    const [longitud3, setLongitud3] = useState('');
    const handlelongitudChange3 = (e) => setLongitud3(e.target.value);

    const [descripcion, setDescripcion] = useState('');
    const handleDescripcionChange = (e) => setDescripcion(e.target.value);

    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const [fileUrl, setFileUrl] = useState(null);

    const types = ['image/png', 'image/jpeg'];




    const handleChange = (e) => {

        let selected = e.target.files[0];
        console.log(selected.type);
        if (selected && types.includes(selected.type)) {
            console.log(e.target.files[0]);
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const Validar=e=>{
        e.preventDefault();

        if (isNaN(precio,cupos)){
            setError("debe ser un numero")
        }
        
        }
    

    const handleAgregarClick = (e) => {
        e.preventDefault();
        //aquí irían las validaciones
        if(!actividadId) {
            db.collection('actividades').add({
                actividad,
                fecha,
                organizacion,
                precio,
                salida,
                contacto,
                hora,
                cupos,
                latitud1,
                longitud1,
                longitud2,
                latitud2,
                longitud3,
                latitud3,
                
                descripcion,
                fileUrl,
            }).then(() => {
                console.log("Guardado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
        else {
            db.collection('actividades').doc(actividadId).update({
                actividad,
                fecha,
                organizacion,
                precio,
                salida,
                hora,
                cupos,
                contacto,
                latitud1,
                longitud1,
                longitud2,
                latitud2,
                longitud3,
                latitud3,
                descripcion,
                fileUrl,
            }).then(() => {
                console.log("Editado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
    }
  return (
      <>
      <div style={{height: '70px'}}></div>
    <form className={classes.root} noValidate autoComplete="off" 
        onSubmit={Validar} 
        style={{width: '600px', borderRadius:'15px',height:'auto',background: 'white',  }}
    >
        
        {error? alert("debe ser numero"): null}
        <FormControl style={{marginLeft:'200px'}}>
            <Input id="my-input" aria-describedby="my-helper-text" 
                type="text" value= {actividad} placeholder="Actividad" onChange={handleActividadChange}
                
            />
         </FormControl>

         <FormControl>
            <Input id="my-input" aria-describedby="my-helper-text" 
                type="text" value= {salida} placeholder="lugar de salida" onChange={handleSalidaChange}
            />
         </FormControl>

         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
                type="date" value= {fecha} placeholder="Fecha" onChange={handleFechaChange}
            />
         </FormControl>

         <FormControl>
         <InputLabel id="demo-simple-select-helper-label">Organizacion</InputLabel>
        <Select
          labelId="organizacion-label"
          id="organizacion"
          value={organizacion}
          onChange={handleOrganizacionChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'INTUR'}>INTUR</MenuItem>
          <MenuItem value={'PatePerro'}>Pate perro</MenuItem>
          <MenuItem value={'Alcaldia'}>Alcaldia</MenuItem>
        </Select>
            
            
         </FormControl>

         <FormControl>
           
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="number" value = {precio} placeholder="Precio" onChange={handlePrecioChange}
            />
         </FormControl>

         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
             type="time" value = {hora} placeholder="Hora de salida" onChange={handleHoraChange}
            />
         </FormControl>

         <FormControl>
           
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="number" value = {cupos} placeholder="Cupos" onChange={handleCuposChange}
            />
         </FormControl>

         <FormControl>
           
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="number" value = {contacto} placeholder="numero de telefono" onChange={handleContactoChange}
            />
         </FormControl>
         {/**---------------------------- */}
         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {latitud1} placeholder="Latitud1" onChange={handlelatitudChange}
            />
         </FormControl>
         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {longitud1} placeholder="Longitud1" onChange={handlelongitudChange}
            />
         </FormControl>

         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {latitud2} placeholder="Latitud2" onChange={handlelatitudChange2}
            />
         </FormControl>
         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {longitud2} placeholder="Longitud2" onChange={handlelongitudChange2}
            />
         </FormControl>

         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {latitud3} placeholder="Latitud3" onChange={handlelatitudChange3}
            />
         </FormControl>
         <FormControl>
            
            <Input id="my-input" aria-describedby="my-helper-text" 
            type="text" value= {longitud3} placeholder="Longitud3" onChange={handlelongitudChange3}
            />
         </FormControl>

         <div>

            <FormControl>
                
                <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Descripcion" 
                value = {descripcion} onChange={handleDescripcionChange} style={{width:'400px', marginLeft:'100px'}}
                />
            </FormControl>
         </div>

         <FormControl>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleChange}
                style={{display:'none'}}
            />
             <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Cargar
        </Button>
      </label>
             { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }    
                { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> }

            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" onClick={handleAgregarClick}>
                <Link to ='/actividades' style={{textDecoration: 'none', color:'white'}}>
                    Agregar
                </Link>
                </Button>
            </label>
         </FormControl>
       
    </form>
    </>
  );
}
export default AgregarActividades



/* import React, {useState} from 'react';
import Form from 'material-ui'

import ProgressBar from './../gallery/ProgressBar'
import './card.css';
import 
    {db}
 from '../../data/firebase-config';
 import {Edit} from '../../data/actividades'
import {Link} from 'react-router-dom'

const AgregarActividades = (props) => {

    let actividadId = '';

    if(props.match) actividadId = props.match.params.actividadId;

    const [actividad, setActividad] = useState('');
    const handleActividadChange = (e) => setActividad(e.target.value);

    const [fecha, setFecha]  = useState('');
    const handleFechaChange = (e) => setFecha(e.target.value);

    const [organizacion, setOrganizacion] = useState('');
    const handleOrganizacionChange = (e) => setOrganizacion(e.target.value);

    const [precio, setPrecio] = useState('');
    const handlePrecioChange = (e) => setPrecio(parseInt(e.target.value));

    const [salida, setSalida] = useState('');
    const handleSalidaChange = (e) => setSalida(e.target.value);

    const [hora, setHora] = useState('');
    const handleHoraChange = (e) => setHora(e.target.value);

    const [cupos, setCupos] = useState('');
    const handleCuposChange = (e) => setCupos(parseInt(e.target.value));

    const [latitud, setLatitud] = useState('');
    const handlelatitudChange = (e) => setLatitud(e.target.value);

    const [longitud, setLongitud] = useState('');
    const handlelongitudChange = (e) => setLongitud(e.target.value);

    const [descripcion, setDescripcion] = useState('');
    const handleDescripcionChange = (e) => setDescripcion(e.target.value);

    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const [fileUrl, setFileUrl] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {

        let selected = e.target.files[0];
        console.log(selected.type);
        if (selected && types.includes(selected.type)) {
            console.log(e.target.files[0]);
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const Validar=e=>{
        e.preventDefault();

        if (isNaN(precio,cupos,latitud,longitud)){
            setError("debe ser un numero")
        }
        
        }
    

    const handleAgregarClick = (e) => {
        e.preventDefault();
        //aquí irían las validaciones
        if(!actividadId) {
            db.collection('actividades').add({
                actividad,
                fecha,
                organizacion,
                precio,
                salida,
                hora,
                cupos,
                latitud,
                longitud,
                descripcion,
                fileUrl,
            }).then(() => {
                console.log("Guardado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
        else {
            db.collection('actividades').doc(actividadId).update({
                actividad,
                fecha,
                organizacion,
                precio,
                salida,
                hora,
                cupos,
                latitud,
                longitud,
                descripcion,
                fileUrl,
            }).then(() => {
                console.log("Editado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
    }

    return ( 
        
    <>
        <div style={{height: '70px'}}></div>
    
        <Form className="g"
            onSubmit={Validar} style={{width: '500px' }}
        >
            {error? alert("debe ser numero"): null}
            
            <Form.Group controlId="formActividad">
                <Form.Label>Actividad</Form.Label>
                <Form.Control type="text" value= {actividad} placeholder="Actividad" onChange={handleActividadChange} />
            </Form.Group>

            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" value= {fecha} placeholder="Fecha" onChange={handleFechaChange} />
            </Form.Group>

            <Form.Group controlId="formOrganizacion">
                <Form.Label>Organización</Form.Label>
                <Form.Control type="text" value = {organizacion} placeholder="Organizacion" onChange={handleOrganizacionChange}/>
            </Form.Group>
            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value = {precio} placeholder="Precio" onChange={handlePrecioChange}/>
            </Form.Group>
            <Form.Group controlId="formSalida">
                <Form.Label>Lugar de salida</Form.Label>
                <Form.Control type="text" value ={salida} placeholder="Lugar de salida" onChange={handleSalidaChange}/>
            </Form.Group>
            <Form.Group controlId="formHora">
                <Form.Label>Hora de salida</Form.Label>
                <Form.Control type="time" value = {hora} placeholder="Hora de salida" onChange={handleHoraChange}/>
            </Form.Group>

            <Form.Group controlId="formCupos">
                <Form.Label>Cupos</Form.Label>
                <Form.Control type="number" value = {cupos} placeholder="Cupos" onChange={handleCuposChange}/>
            </Form.Group>

            <Form.Group controlId="formlatitud">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="text" value= {latitud} placeholder="Latitud" onChange={handlelatitudChange} />
            </Form.Group>

            <Form.Group controlId="formLongitud">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="text" value= {longitud} placeholder="Longitud" onChange={handlelongitudChange} />
            </Form.Group>
            

            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value = {descripcion} rows={3} onChange={handleDescripcionChange}/>
            </Form.Group>

            <Form.Group>
                
                <Form.File
                    id="buttonGuardar"
                    label="Fotografía"
                    onChange={handleChange}
                />
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }    
                { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> }
                
            </Form.Group>

            <button
                onClick={handleAgregarClick}
            >
                <Link to ='/' style={{textDecoration: 'none'}}>
                    Agregar actividad
                </Link>
            </button>
        </Form>
    </>
     );
    }

export default AgregarActividades; */