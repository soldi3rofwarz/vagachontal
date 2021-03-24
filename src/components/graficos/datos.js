import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {GetData} from './../../data/actividades'
import firebase,{googleAuthProvider} from './../../data/firebase-config'

const Datos=()=>{
  const [estadisticas, setEstadisticas]= useState([])
  const [foto,setFoto]=useState(null)
  const [nick, setNick]= useState('')
  const [isLogin, setIslogin]=useState(false)
  const [email, setEmail]= useState('')
  
   

  useEffect(() => {
    GetData()
        .then(estadisticas => setEstadisticas(estadisticas) )
       
        .catch(error => console.log("Error:", error))

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log('iniciado', user)
              console.log(user.displayName + '\n' + user.email+ '\n' + user.photoURL)
              setFoto(user.photoURL)
              setNick(user.displayName)
              setIslogin(true)
              setEmail(user.email)

             
                
            } else {
                console.log('no iniciado')
            }
          })
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

    const Data3={
        labels:['Managua','Leon','Granada','Carazo','Matagalpa', 'Rio San Juan'],
          datasets:[{
              label: 'Datos no oficiales de turistas de los diferentes departamentos por mes',
              backgroundColor: 'rgba(30, 125, 235)',
              borderColor: 'black',
              borderWidth: 1,
              heverBackgroundColor: 'rgba(0,255,0,0.2)',
              hoverBorderColor: '#ff0c00',
              data:[200,40,95,40,159,300, 0]
          }]
      }

      const Data4={
        labels:['Hato Grande','Amerrique','El salto','El nancital'],
          datasets:[{
              label: 'Porcentaje de personas que participan en distitas actividades',
              backgroundColor: 'rgba(30, 125, 235)',
              borderColor: 'black',
              borderWidth: 1,
              heverBackgroundColor: 'rgba(0,255,0,0.2)',
              hoverBorderColor: '#ff0c00',
              data:[35,25,30,10, 0]
          }]
      }

    const Opciones={
        maintainAspectRatio: false,
        responsive: true
    }
    console.log("sad",estadisticas)
    return(
        <>
        
        <section style={{height:'100px'}}></section>
        
        <div className='datos' style={{width: '100%', height:'auto'}}>
            
            <h1 style={{marginLeft:'45%'}}>Gráficos</h1>
            
            <section style={{boxShadow: '5px 5px 5px'}}> 
            {repetidos&&repetidos.map((suma)=>
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
           <section style={{boxShadow: '5px 5px 5px', marginTop:'50px', minHeight:'300px'}}> <Bar style={{minHeight:'300px'}} data={Data} options={Opciones}/></section>
           <section style={{boxShadow: '5px 5px 5px', marginTop:'50px', minHeight:'300px'}}> <Bar style={{minHeight:'300px'}} data={Data1} options={Opciones}/></section>
           <section style={{boxShadow: '5px 5px 5px', marginTop:'50px', minHeight:'300px'}}> <Bar style={{minHeight:'300px'}} data={Data3} options={Opciones}/></section>
           {email=='pateperro@gmail.com'?
            <section style={{boxShadow: '5px 5px 5px', marginTop:'50px', minHeight:'300px'}}> <Bar style={{minHeight:'300px'}} data={Data4} options={Opciones}/></section>
           :null}
           
        </div>
    
        </>
    )
}

export default Datos