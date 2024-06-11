import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login_ = () => {
  const [usuario, setUser] = useState('');
  const [clave, setClave] = useState('');

  useEffect(() => {
    //comprobar si el usuario ya esta logueado
    const userData = localStorage.getItem('userData');
    if (userData) {
      window.location.href = '/casos';
    }
  }, []);

  const handleLogin = async () => {
    console.log('login', usuario, clave);
    if (usuario !== '' && clave !== '') {
      Swal.fire({
        title: 'Espere por favor',
        html: 'Verificando datos',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // console.log(usuario, clave);
      try {
        //http://162.248.55.24:3000/superabackend
        // http://localhost:3000/
        const res = await axios.post(
          'http://162.248.55.24:3000/superabackend/usuarios/login',
          {
            usuario,
            clave,
          }
        );
        console.log(res.data);
        if (res.data) {
          localStorage.setItem('userData', JSON.stringify(res.data));
          window.location.href = '/casos';
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
        });
      }
    }
  };

  return (
    <div className='py-5'>
      <div className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl text-primary-450 sm:text-3xl font-bold mb-6'>
            Iniciar sesión
          </h2>

          <div className='w-ful'>
            <input
              type='text'
              placeholder='Correo electrónico'
              className=' border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900'
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <input
              type='password'
              placeholder='Contraseña'
              className='border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900'
              onChange={(e) => setClave(e.target.value)}
            />
            <br />
            <button
              className='bg-primary-450 text-white rounded-lg shadow-sm px-4 py-2 mb-4'
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
            .swal2-confirm{
              background-color: #0A6C48 !important;
              color: #fff !important;
              
            }
            .swal2-modal{
              background-color: #23262D !important;
              color: #fff !important;
            }
          `}
      </style>
    </div>
  );
};

export default Login_;
