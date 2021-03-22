import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {GetData} from './../../data/actividades'

const Datos=()=>{
  const [estadisticas, setEstadisticas]= useState([])
  
   

  useEffect(() => {
    GetData()
        .then(estadisticas => setEstadisticas(estadisticas) )
       
        .catch(error => console.log("Error:", error))
  }, []);
  
 const org=[]
  estadisticas.forEach(doc=>{
      if(!org.find(d=>d.id==doc.id&&d.organizacion==doc.organizacion)){
        const{id,organizacion}=doc

    
        org.push(organizacion)}
  })
  console.log('xgd',org)
    
  var repetidos =[];

  org.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });
  
  console.log(repetidos);
  
    const Data2={
        
            labels:[
                
            ],
       
   
   
    datasets:[{
        
        label: 'Actividades por organizacion',
        backgroundColor: 'rgba(30, 125, 235)',
        borderColor: 'black',
        borderWidth: 1,
        heverBackgroundColor: 'rgba(0,255,0,0.2)',
        hoverBorderColor: '#ff0c00',

        data:[
           
        ]
    }]}
 




    const Data={
        labels:['2016','2017','2018','2019','2020'],
        datasets:[{
            label: 'actividades en los ultimos 5 años',
            backgroundColor: 'rgba(30, 125, 235)',
            borderColor: 'black',
            borderWidth: 1,
            heverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#ff0c00',
            data:[50,45,60,71,10,0]
        }]
    }



    const Data1={
      labels:['Hato Grande','Peñon del Casique','Piedra de Cuapa','Amerrique','Puerto Diaz'],
        datasets:[{
            label: 'Participantes',
            backgroundColor: 'rgba(30, 125, 235)',
            borderColor: 'black',
            borderWidth: 1,
            heverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#ff0c00',
            data:[30,60,60,46,33,10]
        }]
    }

    const Opciones={
        maintainAspectRatio: false,
        responsive: true
    }
    console.log("sad",estadisticas)
    return(
        <>
        
        <section style={{height:'180px'}}></section>
        
        <div className='datos' style={{width: '100%', height:'auto'}}>
            
            <h1>Gráficos</h1>
            
            <section style={{boxShadow: '5px 5px 5px'}}> 
            {repetidos.map((suma)=>
           <>
           {suma}
           
            <Bar data={
                
                   {
                    labels:[
                        'PatePerro','INTUR','Alcaldia'
                    ],
               
           
           
            datasets:[{
                
                label: 'Actividades por organizacion',
                backgroundColor: 'rgba(0,255,0,1)',
                borderColor: 'black',
                borderWidth: 1,
                heverBackgroundColor: 'rgba(0,255,0,0.2)',
                hoverBorderColor: '#ff0c00',
        
                data:[
                    1,6,7
                ]
            }]
                   }
                }

             options={Opciones} style={{width:'50vw',height:'500px'}}/></>)}</section>
           <section style={{boxShadow: '5px 5px 5px', marginTop:'50px'}}> <Bar data={Data} options={Opciones}/></section>
           <section style={{boxShadow: '5px 5px 5px', marginTop:'50px'}}> <Bar data={Data1} options={Opciones}/></section>
           
        </div>
    
        </>
    )
}

export default Datos