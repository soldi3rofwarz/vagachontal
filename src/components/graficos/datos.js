import React,{useState,useEffect} from 'react'
import {XYPlot,
       XAxis,
       YAxis,
       VerticalGridLines,
       HorizontalGridLines,
       VerticalBarSeries} from 'react-vis'
import {GetData} from './../../data/actividades'


const Datos=()=>{
const [estadisticas, setEstadisticas] =useState([])

useEffect(() => {
    GetData()
        .then(estadisticas => setEstadisticas(estadisticas) )
       
        .catch(error => console.log("Error:", error))
}, []);

   

    return(
        <>
        <div style={{height:'150px'}}></div>
        {estadisticas? estadisticas.map((datos)=>
        <div className='datos' style={{width: '100%'}} key={datos.id}>
          <XYPlot
            xType='ordinal'
            width={600}
            height={200}
          >
              <VerticalGridLines/>
              <HorizontalGridLines/>
              <XAxis/>
              <YAxis/>
              <VerticalBarSeries
                color='blue'
                data={[
                    {
                        x:'dia 1',
                        y: 23,
                    },
                      {
                        x:'dia 2',
                        y: 29,
                    }
                ]}
              />
          </XYPlot>
        </div> ): null
                }
        </>
    )
}

export default Datos