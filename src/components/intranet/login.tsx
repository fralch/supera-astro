import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login_ = () => {
  const [usuario, setUser] = useState(null);
  const [clave, setClave] = useState(null);
  const [loading, setLoading] = useState(false);
  let timerInterval;

  const handleLogin = () => {
    setLoading(true);
    Swal.fire({
      title: 'Espere por favor',
      html: 'Verificando datos',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    axios
      .post('http://127.0.0.1:3000/usuarios/login', {
        usuario,
        clave,
      })
      .then((res) => {
        console.log();

        if (res.data) {
          localStorage.setItem('token', res.data);
          window.location.href = '/casos';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'Usuario o contraseña incorrectos',
        });
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   if(localStorage.getItem('token')) {
  //     window.location.href = '/casos';
  //   }
  // }, []);

  useEffect(() => {
    // keyDown
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleLogin();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
  }, [usuario, clave]);

  return (
    <div className='py-5'>
      <div className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl text-primary-450 sm:text-3xl font-bold mb-6'>
            Iniciar sesión
          </h2>

          <div className='w-ful'>
            <input
              type='email'
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

            {loading && <div>Cargando...</div>}
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
