import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Registrarse</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Correo electronico</label>
                        <input type='email' placeholder='Escribe tu correo electronico' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Escribe tu contraseña' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Confirmar contraseña</label>
                        <input type='password' placeholder='Escribe tu contraseña' className='form-control' />
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Registrarse</button>
                    </div>
                    <p className='text-end'>
                        ¿Ya tienes una cuenta? <Link to="/" className='ms-2'>Iniciar sesión</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Signup
