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
    <section className='    py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto'>
      <div
        id='222'
        className=' bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm'
      >
        <div className='flex-grow overflow-hidden h-full flex flex-col'>
          <div className='flex-grow flex overflow-x-hidden'>
            <div className='flex-grow bg-white dark:bg-secondary-800 overflow-y-auto'>
              <div className='sm:p-7 p-4'>
                <table className='text-left'>
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
                          {data.estado}
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
                    .modal-open{
                        filter: blur(5px);
                    }
                `}
      </style>
    </section>
  );
};
export default Casos_component;
