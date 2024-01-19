import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = e => {

    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    const respuesta = clienteAxios.post('/api/login', datos)

    respuesta.then(response => {
      localStorage.setItem('AUTH_TOKEN', response.data.token)
      setErrores([]);
    })
    .catch(error => {
      setErrores(Object.values(error.response.data.errors));
    })
  }

  return (
    <>
      <h1 className='text-4xl font-black'>Iniciar sesión</h1>
      <p>Para crear un pedido inicia sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-5">
        <form 
        onSubmit={handleSubmit}
        noValidate
        >

          {errores ? errores.map((error,i) => <Alerta key={i}>{error}</Alerta>) : null}

          {/* correo */}
          <div className="mb-4">
            <label
              className='text-slate-800'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type="email"
              id='email'
              className='mt-2 w-full p-2 bg-gray-50'
              name='email'
              placeholder='Escribe tu correo electrónico'
              ref={emailRef}
            />
          </div>

          {/* contraseña */}
          <div className="mb-4">
            <label
              className='text-slate-800'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              type="password"
              id='password'
              className='mt-2 w-full p-2 bg-gray-50'
              name='password'
              placeholder='Escribe tu contraseña'
              ref={passwordRef}
            />
          </div>



          <input
            type="submit"
            value="Iniciar sesión"
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer' />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>



    </>
  )
}
