import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Casos_component = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);
  const [casosView, setCasosView] = useState([]);
  const [pagosView, setPagosView] = useState([]);

  const [nuevoColaborador, setNuevoColaborador] = useState({
    dni: '',
    usuario: '',
    nombre: '',
    celular: '',
    correo: '',
    direccion: '',
    cargo: '',
  });
  useEffect(() => {
    axios.get('http://localhost:3000/usuarios').then((response) => {
      console.log(response.data);
      setDataTable(response.data);
      setDataTableFilter(response.data);
    });
  }, []);

  const handleEditar = (data) => {
    console.log(data);
    setNuevoColaborador(data);
  };

  const hangleCrearColaborador = () => {
    axios.post('http://localhost:3000/usuarios', nuevoColaborador).then(() => {
      axios.get('http://localhost:3000/usuarios').then((response) => {
        console.log(response.data);
        setDataTable(response.data);
        setDataTableFilter(response.data);
      });
    });
  };

  return (
    <section className='w-full py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto'>
      <div className='  bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm'>
        <div className='w-full overflow-hidden h-full flex flex-col'>
          <div className='w-full flex overflow-x-hidden'>
            <div className='xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5'>
              <div className='flex items-center justify-between mb-6'>
                <div className='text-lg text-gray-400 tracking-wider'>
                  COLABORADORES
                </div>
              </div>
              <div className='flex flex-col w-full '>
                <div className='mb-4 p-3 w-full flex flex-col rounded-md bg-gray-800 py-4'>
                  <div className=' w-16 py-1 px-2 leading-none bg-gray-900  text-blue-500 rounded-md text-center mb-1'>
                    Buscar
                  </div>
                  <input
                    type='text'
                    className='border border-gray-800 rounded-md p-2 text-sm bg-gray-100'
                    placeholder='Ingrese colaborador'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.nombre
                          .toLowerCase()
                          .includes(value.toLowerCase());
                      });
                      setDataTableFilter(filter);
                    }}
                  />
                </div>
                <div className='flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md'>
                  <div className='w-20 pw-16 text-center mb-1 py-1 px-2  leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md'>
                    DNI
                  </div>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese dni'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.condicion.includes(value);
                      });
                      setDataTableFilter(filter);
                    }}
                  />
                </div>
                <div className='flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md'>
                  <div className='w-16 pw-16 text-center mb-1 py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md'>
                    Mesa
                  </div>
                  <select
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.estado === parseInt(value);
                      });
                      setDataTableFilter(filter);
                    }}
                  >
                    <option
                      value=''
                      disabled
                    >
                      Seleccionar
                    </option>
                    <option value='civil'>Civil</option>
                    <option value='laboral'>Laboral</option>
                    <option value='penal'>Penal</option>
                    <option value='corporativo'>Corporativo</option>
                  </select>
                </div>

                <div className='flex flex-col w-full mb-4 '>
                  <button
                    className='bg-primary-700 text-white p-2 rounded-md'
                    onClick={() => {
                      setNuevoColaborador({
                        dni: '',
                        usuario: '',
                        nombre: '',
                        celular: '',
                        correo: '',
                        direccion: '',
                        cargo: '',
                      });
                      const modal = document.getElementById(
                        'modal-agregar-colaborador'
                      );
                      modal.classList.remove('hidden');
                      modal.setAttribute('aria-hidden', 'false');
                    }}
                  >
                    Agregar Colaborador
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full bg-white dark:bg-secondary-800 overflow-y-auto'>
              <div className='sm:p-7 p-4 '>
                <table className='text-left w-full'>
                  <thead>
                    <tr className='text-gray-400 bg-primary-700 '>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        DNI
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Usuario
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Nombres
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell'>
                        Celular
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Correo
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Dirección
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Mesa
                      </th>

                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Editar
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 dark:text-gray-100'>
                    {dataTableFilter.map((data, index) => (
                      <tr
                        key={index}
                        className={
                          data.id % 2 === 0
                            ? 'bg-gray-100 dark:bg-secondary-980'
                            : 'bg-white dark:bg-secondary-800'
                        }
                      >
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800'>
                          <div className='flex items-center'>{data.dni}</div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 '>
                          <div className='flex items-center font-bold'>
                            {data.usuario}
                          </div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.nombre}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.celular}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.correo}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.direccion}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.cargo.toUpperCase()}
                        </td>

                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          <button
                            className='text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                            onClick={() => {
                              handleEditar(data);
                              const modal = document.getElementById(
                                'modal-agregar-colaborador'
                              );
                              modal.classList.remove('hidden');
                              modal.setAttribute('aria-hidden', 'false');
                            }}
                          >
                            <div className='flex items-center'>Editar</div>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='modal-agregar-colaborador'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
        style={{ zIndex: 9999 }}
      >
        <div className='relative w-full max-w-3xl px-2 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Ingresar nuevo colaborador
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-agregar-colaborador'
                aria-label='Close'
                onClick={() => {
                  const modal = document.getElementById(
                    'modal-agregar-colaborador'
                  );
                  modal.classList.add('hidden');
                  modal.setAttribute('aria-hidden', 'true');
                }}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='overflow-x-auto p-5'>
              <div className=' flex flex-row w-full bg-gray-100 dark:bg-secondary-800 rounded-md p-4'>
                <div className='flex flex-col w-1/2'>
                  <label className='block text-sm text-gray-700 dark:text-gray-200'>
                    DNI
                  </label>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese DNI'
                    value={nuevoColaborador.dni}
                    onChange={(e) => {
                      setNuevoColaborador({
                        ...nuevoColaborador,
                        dni: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='flex flex-col w-1/2'>
                  <label className='block text-sm text-gray-700 dark:text-gray-200'>
                    Usuario
                  </label>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese usuario'
                    value={nuevoColaborador.usuario}
                    onChange={(e) => {
                      setNuevoColaborador({
                        ...nuevoColaborador,
                        usuario: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className=' flex flex-row w-full bg-gray-100 dark:bg-secondary-800 rounded-md p-4'>
                <div className='flex flex-col w-full'>
                  <label className='block text-sm text-gray-700 dark:text-gray-200'>
                    Nombre completo
                  </label>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese nombre completo'
                    value={nuevoColaborador.nombre}
                    onChange={(e) => {
                      setNuevoColaborador({
                        ...nuevoColaborador,
                        nombre: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className=' flex flex-row w-full bg-gray-100 dark:bg-secondary-800 rounded-md p-4'>
                <div className='flex flex-col w-1/2'>
                  <label className='block text-sm text-gray-700 dark:text-gray-200'>
                    Celular
                  </label>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese celular'
                    value={nuevoColaborador.celular}
                    onChange={(e) => {
                      setNuevoColaborador({
                        ...nuevoColaborador,
                        celular: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='flex flex-col w-1/2'>
                  {/* Mesa  */}
                  <label className='block text-sm text-gray-700 dark:text-gray-200'>
                    Mesa
                  </label>
                  <select
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    value={nuevoColaborador.cargo}
                    onChange={(e) => {
                      setNuevoColaborador({
                        ...nuevoColaborador,
                        cargo: e.target.value,
                      });
                    }}
                  >
                    <option value='civil'>Civil</option>
                    <option value='laboral'>Laboral</option>
                    <option value='penal'>Penal</option>
                    <option value='corporativo'>Corporativo</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col p4 mt-4'>
                <button className='  bg-primary-700 text-white p-2 rounded-md'>
                  Guardar
                </button>

                <button className=' bg-secondary-800 text-white p-2 rounded-md mt-3'>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          input {
            background-color: #13151A !important;
          }
          select{
            background-color: #13151A !important;
          }
         
          `}
      </style>
    </section>
  );
};
export default Casos_component;
