import React ,{useEffect,useState}from 'react';
import {Layout} from './../elements/theme/components/layout'
import {Select} from './../data/actividades'
import Detcontent from '../components/Detalles/contenedor/det_content'

const DetallePage = (props) => {
    let {actividadId} = props.match.params;
      //  if(props.match) params.actividadId;

    const [actividad, setActividad] = useState('');
    const [fecha, setFecha]  = useState('');
    const [precio, setPrecio] = useState('');
    const [salida, setSalida] = useState('');
    const [hora, setHora] = useState('');
    const [cupos, setCupos] = useState('');
    const [latitud1, setLatitud1] = useState('');
    const [longitud1, setLongitud1] = useState('');
    const [latitud2, setLatitud2] = useState('');
    const [longitud2, setLongitud2] = useState('');
    const [latitud3, setLatitud3] = useState('');
    const [longitud3, setLongitud3] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fileUrl, setfileUrl] = useState(null)

    useEffect(()=>{
        (async()=>{
        
        console.log(`Producto Id: ${actividadId}`);
        const producto =await Select(actividadId)
    
        const {actividad,
            fecha,
            precio,
            salida,
            hora,
            cupos,
            latitud1,
            longitud1,
            latitud2,
            longitud2,
            latitud3,
            longitud3,
            descripcion,
            fileUrl
        }= producto;
                console.log(producto)

            setActividad(actividad)
            setFecha(fecha)
            setPrecio(precio)
            setSalida(salida)
            setHora(hora)
            setCupos(cupos)
            setLatitud1(latitud1)
            setLongitud1(longitud1)
            setLatitud2(latitud2)
            setLongitud2(longitud2)
            setLatitud3(latitud3)
            setLongitud3(longitud3)
            setDescripcion(descripcion)
            setfileUrl(fileUrl)
        })()
    },[])

    return (  
        <Layout>
            <Detcontent
                actividad={actividad}
                fecha ={fecha}
                precio={precio}
                salida={salida}
                hora={hora}
                cupos={cupos}
                latitud1={latitud1}
                longitud1={longitud1}
                latitud2={latitud2}
                longitud2={longitud2}
                latitud3={latitud3}
                longitud3={longitud3}
                descripcion={descripcion}
                fileUrl={fileUrl}
            /> 
        </Layout>
    );
}
 
export default DetallePage;