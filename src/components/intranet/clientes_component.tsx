import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { r } from '../../../dist/_astro/index.NEDEFKed';

const Casos_component = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/clientes').then((response) => {
      console.log(response.data);
      setDataTable(response.data);
      setDataTableFilter(response.data);
    });
  }, []);

  return (
    <section className='w-full py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto'>
      <div className='  bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm'>
        <div className='w-full overflow-hidden h-full flex flex-col'>
          <div className='w-full flex overflow-x-hidden'>
            <div className='xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5'>
              <div className='flex items-center justify-between mb-6'>
                <div className='text-xs text-gray-400 tracking-wider'>
                  FILTROS
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
                    placeholder='Ingrese caso'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.caso.expediente.includes(value);
                      });
                      setDataTableFilter(filter);
                    }}
                  />
                </div>
                <div className='flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md'>
                  <div className='w-20 pw-16 text-center mb-1 py-1 px-2  leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md'>
                    Condicion
                  </div>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese condición'
                  />
                </div>
                <div className='flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md'>
                  <div className='w-16 pw-16 text-center mb-1 py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md'>
                    Estado
                  </div>
                  <select
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.estado.includes(value);
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
                    <option value='activo'>Activo</option>
                    <option value='inactivo'>Inactivo</option>
                  </select>
                </div>

                <div className='flex flex-col w-full mb-4 '>
                  <button className='bg-slate-800 text-white p-2 rounded-md '>
                    Buscar
                  </button>
                </div>

                <div className='flex flex-col w-full mb-4 '>
                  <button
                    className='bg-primary-700 text-white p-2 rounded-md'
                    onClick={() => {
                      const modal =
                        document.getElementById('modal-table-pagos');
                      modal.classList.remove('hidden');
                      modal.setAttribute('aria-hidden', 'false');
                    }}
                  >
                    Agregar Cliente
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
                        Nombre
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Casos
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
                        Condición
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 dark:text-gray-100'>
                    {dataTable.map((data, index) => (
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
                            {data.nombre}
                          </div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          <button className='text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'>
                            <div className='flex items-center'>Ver Casos</div>
                          </button>
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
                          {data.condicion}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.estado ? (
                            <div className='text-green-500'>Activo</div>
                          ) : (
                            <div className='text-red-500'>Inactivo</div>
                          )}
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
