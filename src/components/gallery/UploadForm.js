import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import 
    {db}
 from '../../data/firebase-config';

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
    <form>
      <input type='text' value={descripcion} placeholder="datos de la imagen" onChange={handledescripcion} />
      
        <input type="file" onChange={handleChange} accept="image/*" />
        
      
      
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> }
      
      <label>
        <button onClick={handleAgregarClick}>agregar</button>
      </label>
    </form>
  );
}

export default UploadForm;