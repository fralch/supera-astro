import { useState, useEffect } from 'react';
import axios from 'axios';

const Login_ = () => {
  const [usuario, setUser] = useState(null);
  const [clave , setClave] = useState(null);

  const handleLogin = () => {
    axios.post('http://127.0.0.1:3000/usuarios/login', {
      usuario,
      clave
    }).then(res => {
      console.log();

      if(res.data) {
        localStorage.setItem('token', res.data);
        window.location.href = '/casos';
      }
    }).catch(err => {
      console.log(err.response.data);
    });
  }
  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-primary-450 sm:text-3xl font-bold mb-6">
            Iniciar sesión
          </h2>

          <div className='w-ful'>
            <input type="email" placeholder="Correo electrónico" className=" border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900" 
              onChange={e => setUser(e.target.value)}
            />
            <br />
            <input type="password" placeholder="Contraseña" className="border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900" 
              onChange={e => setClave(e.target.value)}
             />
            <br />
            <button className="bg-primary-450 text-white rounded-lg shadow-sm px-4 py-2 mb-4" 
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login_;
