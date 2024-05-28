import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { r } from '../../../dist/_astro/index.NEDEFKed';

const Casos_component = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/pagos').then((response) => {
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
                        Caso
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Monto
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell'>
                        Fecha
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Descripcion
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Metodo de pago
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Monto total
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Saldo pendiente
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
                          <div className='flex items-center'>
                            {data.caso.expediente}
                          </div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 '>
                          <div className='flex items-center font-bold'>
                            S/ {data.monto}
                          </div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.fecha_pago}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.descripcion}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          {data.metodo_pago}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          S/ {data.monto_total}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          S/ {data.saldo_restante}
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
