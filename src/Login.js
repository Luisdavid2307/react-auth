import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Iniciar Sesión</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Correo electronico</label>
                        <input type='email' placeholder='Escribe tu correo electronico' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Escribe tu contraseña' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2'>
                            Recuerdame
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Iniciar Sesión</button>
                    </div>
                    <p className='text-end'>
                        ¿Olvidaste tu <a href=''>contraseña?</a><Link to="/signup" className='ms-2'>Registrarse</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
