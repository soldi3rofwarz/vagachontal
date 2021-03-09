import React from 'react'
import './contacto.css'
import ft from './../../assets/dos.jpg'

const Contacto =()=>{
    return(
        <div className='body1'>
        <div className='container1'>
            <div className='card1'>
                <div className='imgBx1'>
                    <img src={ft} className='img1'/>
                    <h3 className='h3'>Esther</h3>
                </div>
                <div className='content1'>
                    <h4 className='h4'>Esther Duarte</h4>
                    <h4 className='h4'>Administradora</h4>
                    <h4 className='h4'>Esther.Guapisima@gmail.com</h4>
                    <h4 className='h4'>83234344</h4>
                </div>
            </div>

            <div className='card1'>
                <div className='imgBx1'>
                    <img src={ft} className='img1'/>
                    <h3 className='h3' >Jose</h3>
                </div>
                <div className='content1'>
                    <h4 className='h4'>Jose Castro</h4>
                    <h4 className='h4'>Administrador</h4>
                    <h4 className='h4'>Jose jehovani Castro Perez</h4>
                    <h4 className='h4'>82213400</h4>
                </div>
            </div>

            <div className='card1'>
                <div className='imgBx1'>
                    <img src={ft} className='img1'/>
                    <h3 className='h3'>Selena</h3>
                </div>
                <div className='content1'>
                    <h4 className='h4'>Selena Obando</h4>
                    <h4 className='h4'>Administradora</h4>
                    <h4 className='h4'>Selenaobando@gmail.com</h4>
                    <h4 className='h4'>83234344</h4>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contacto