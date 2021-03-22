import React from 'react'
import './contacto.css'
import ft from './../../assets/dos.jpg'
import selena from './../../assets/selena.jpg'
import yo from './../../assets/yo.jpg'
import esther from './../../assets/esther.jpg'
import fb from './../../assets/fb.png'

const Contacto =()=>{
    return(
        <div className='body1'>
        <div className='container1'>
            <div className='card1'>
                <div className='imgBx1'>
                    <img src={esther} className='img1' style={{marginLeft:'42px'}}/>
                </div>
                <div className='content1'>
                    <h4 className='h4'>Esther Duarte</h4>
                    <h4 className='h4'>Administrador</h4>
                    <h4 className='h4'>sestherduarte@gmail.com</h4>
                    
                </div>
            </div>

            <div className='card1'>
                <div className='imgBx1'>
                    <img src={yo} className='img1' style={{marginLeft:'42px'}}/>
                    
                </div>
                <div className='content1'>
                    <h4 className='h4'>Jose Castro</h4>
                    <h4 className='h4'>Administrador</h4>
                    <h4 className='h4'>Josejehovanicastroperez@gmail.com</h4>
                    
                    <img src={fb} style={{width:'40px'}}/>

                </div>
            </div>

            <div className='card1'>
                <div className='imgBx1'>
                    <img src={selena} className='img1' style={{marginLeft:'42px'}}/>
                    
                </div>
                <div className='content1'>
                    <h4 className='h4'>Selena Obando</h4>
                    <h4 className='h4'>Administrador</h4>
                    <h4 className='h4'>26Selenaobando@gmail.com</h4>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contacto