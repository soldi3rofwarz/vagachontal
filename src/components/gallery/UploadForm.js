import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import 
    {db}
 from '../../data/firebase-config';
 import './galeria.css'

const UploadForm = (props) => {
  let imgID
  if(props.match) imgID = props.match.params.imgID;


  const [file, setFile] = useState(null);
  const[descripcion, setDescripcion]= useState('')
  const handledescripcion = (e) => setDescripcion(e.target.value);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {

      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  const handleAgregarClick = (e) => {
    e.preventDefault();
    //aquí irían las validaciones
    if(!imgID) {
        db.collection('images').add({
            descripcion,
            fileUrl,
        }).then(() => {
            console.log("Guardado!!!!", fileUrl);
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }
  }

  return (
    <form style={{width:'100%',alignItems:'center',boxShadow:'5px 5px 5px black', height:'200px'}}>
      <div className="form__group field">
        <input type="input" className="form__field" value={descripcion} 
        placeholder="datos de la imagen" onChange={handledescripcion} name="Descripcion" id='name' required />
        <label for="name" className="form__label">Descripción</label>
      </div>

        <input type="file"  onChange={handleChange} accept="image/*" />

        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> }
      
      <label>
        <button className="btnSelect" onClick={handleAgregarClick}>agregar</button>
      </label>
    </form>
  );
}

export default UploadForm;