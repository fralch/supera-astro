import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Casos_component = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);
  const [modalPago, setModalPago] = useState(false);
  const [clientesView, setClientesView] = useState([]);
  const [casosView, setCasosView] = useState([]);
  const [pagosView, setPagosView] = useState([]);
  const [pagosData, setPagosData] = useState([]);
  const [userData, setUserData] = useState(null);

  const [nuevoPagoData, setNuevoPagoData] = useState({
    cliente: '',
    caso: '',
    descripcion: '',
    monto: '',
    metodo_pago: '',
  });

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      console.log(JSON.parse(localStorage.getItem('userData')));
      setUserData(JSON.parse(localStorage.getItem('userData')));
    } else {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    axios
      .get('https://www.superaabogados.com/superabackend/pagos')
      .then((response) => {
        // console.log(response.data);
        setDataTable(response.data);
        setDataTableFilter(response.data);
      });
  }, []);

  useEffect(() => {
    if (pagosView.length === 0) return;
    console.log(pagosView);

    const monto_pagado = pagosView.reduce((acc, pago) => {
      return acc + parseFloat(pago.monto);
    }, 0);
    let saldo_restante =
      pagosView[pagosView.length - 1].monto_total - monto_pagado;
    const estado = saldo_restante === 0 ? 'pagado' : 'pendiente';

    if (saldo_restante < 0) {
      saldo_restante = 0;
    }
    const data = [
      {
        caso: pagosView[pagosView.length - 1].caso,

        fecha: pagosView[pagosView.length - 1].fecha_pago,
        monto_pagado: monto_pagado,
        saldo_restante: saldo_restante,
        estado: estado,
        monto_total: pagosView[pagosView.length - 1].monto_total,
      },
    ];
    setPagosData(data);
  }, [pagosView]);

  const nuevoPago = async () => {
    const validar = validarPermiso('administrador');
    // if (!validar) {
    //   alert('No tienes permiso para realizar esta accion');
    //   return;
    // }

    const clientes = await axios.get(
      'https://www.superaabogados.com/superabackend/clientes'
    );
    console.log(clientes.data);
    setClientesView(clientes.data);
    const modal = document.getElementById('modal-table-pagos');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    setModalPago(true);
  };

  const validarPermiso = (caso) => {
    let userCaso = userData.cargo;
    let permiso = false;
    if (userCaso.toLowerCase() === caso.toLowerCase()) {
      permiso = true;
    }
    return permiso;
  };

  const guardarNuevoPago = async () => {
    /* 
    {
      "caso_id": 1, 
      "monto": 125.6, 
      "fecha_pago": "2024-06-17T22:03:58.000Z",
      "descripcion": "Descrip", 
      "metodo_pago": "yape", 
      "monto_total":  123.00, 
      "saldo_restante" : 153.00, 
      "estado": "pendiente"
    }
    */

    // const validar = validarPermiso('administrador');
    // if (!validar) {
    //   alert('No tienes permiso para realizar esta accion');
    //   return;
    // }

    const data = {
      caso_id: +nuevoPagoData.caso,
      monto: +nuevoPagoData.monto,
      fecha_pago: new Date(),
      descripcion: nuevoPagoData.descripcion,
      metodo_pago: nuevoPagoData.metodo_pago,
      monto_total: pagosData[0]?.monto_total ? +pagosData[0].monto_total : 0,
      saldo_restante: pagosData[0]?.saldo_restante
        ? pagosData[0].monto_total - +nuevoPagoData.monto
        : 0,
      estado: pagosData[0]?.estado ? pagosData[0].estado : 'pendiente',
    };

    axios
      .post('https://www.superaabogados.com/superabackend/pagos', data)
      .then((response) => {
        // recargar la tabla
        axios
          .get('https://www.superaabogados.com/superabackend/pagos')
          .then((response) => {
            setDataTable(response.data);
            setDataTableFilter(response.data);
          });

        // cerrar modal
        const modal = document.getElementById('modal-table-pagos');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        setModalPago(false);
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
                  PAGOS
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
                  <div className='w-16 pw-16 text-center mb-1 py-1 px-2  leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md'>
                    Fecha
                  </div>
                  <input
                    type='date'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Fecha'
                    onChange={(e) => {
                      const value = e.target.value;
                      const filter = dataTable.filter((data) => {
                        return data.fecha_pago.includes(value);
                      });
                      setDataTableFilter(filter);
                    }}
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
                    <option value=''>Seleccionar</option>
                    <option value='pagado'>Pagado</option>
                    <option value='pendiente'>Pendiente</option>
                  </select>
                </div>

                <div className='flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md'>
                  <div className=' w-24 pw-16 text-center mb-1 py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-red-500 rounded-md'>
                    Monto total
                  </div>
                  <input
                    type='number'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Monto total'
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '') {
                        setDataTableFilter(dataTable);
                        return;
                      }
                      const filter = dataTable.filter((data) => {
                        return parseFloat(data.monto) === parseFloat(value);
                      });
                      setDataTableFilter(filter);
                    }}
                  />
                </div>

                <div className='flex flex-col w-full mb-4 '>
                  <button
                    className='bg-primary-700 text-white p-2 rounded-md'
                    onClick={() => {
                      nuevoPago();
                    }}
                  >
                    Agregar Pago
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
                          {new Date(data.fecha_pago).toLocaleDateString()}
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
                          S/ {data.monto_total ? data.saldo_restante : 0}
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

      <div
        id='modal-table-pagos'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
        style={{ zIndex: 9999 }}
      >
        <div className='relative w-full max-w-3xl px-2 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Ingresar nuevo pago
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-table-pagos'
                onClick={() => {
                  const modal = document.getElementById('modal-table-pagos');
                  modal.classList.add('hidden');
                  modal.setAttribute('aria-hidden', 'true');
                  setModalPago(false);
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
              <div
                className='
                flex flex-col
                w-full
                bg-gray-100
                dark:bg-secondary-800
                rounded-md
                p-4
              '
              >
                <label className='block text-sm text-gray-700 dark:text-gray-200'>
                  Cliente
                </label>
                <select
                  className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm w-full'
                  onChange={(e) => {
                    const value = e.target.value;

                    setNuevoPagoData({
                      ...nuevoPagoData,
                      cliente: value,
                      caso: '',
                    });
                    setPagosData([]);

                    if (value === '') {
                      setCasosView([]);
                      return;
                    }
                    const cliente = clientesView.find((cliente) => {
                      return parseInt(cliente.id) === parseInt(value);
                    });
                    setCasosView(cliente.casos);
                  }}
                  value={nuevoPagoData.cliente}
                >
                  <option value=''>Seleccionar cliente</option>
                  {clientesView.map((cliente, index) => (
                    <option
                      key={index}
                      value={cliente.id}
                    >
                      {cliente.nombre}
                    </option>
                  ))}
                </select>

                <label className='block text-sm text-gray-700 dark:text-gray-200'>
                  Caso
                </label>
                <select
                  className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm w-full'
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                      setPagosView([]);
                      return;
                    }

                    setNuevoPagoData({
                      ...nuevoPagoData,
                      caso: value,
                    });
                    const caso = casosView.find((caso) => {
                      return parseInt(caso.id) === parseInt(value);
                    });

                    // agregar nombre del expediente al array de pagos
                    const pagos = caso.pagos.map((pago) => {
                      return {
                        ...pago,
                        caso: caso.expediente,
                      };
                    });

                    setPagosView(pagos);
                  }}
                  value={nuevoPagoData.caso}
                >
                  <option value=''>Seleccionar caso</option>
                  {casosView.map((caso, index) => (
                    <option
                      key={index}
                      value={caso.id}
                    >
                      {caso.expediente}
                    </option>
                  ))}
                </select>
              </div>
              <table className='min-w-full mt-3 divide-y-2 divide-gray-700 bg-primary-980 text-sm dark:divide-gray-700 dark:bg-primary-980 rounded-md'>
                <thead className='ltr:text-left rtl:text-right'>
                  <tr>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-left'>
                      Caso
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-left'>
                      Fecha
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-center'>
                      Estado
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-right'>
                      Pagado
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-right'>
                      Pendiente
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {pagosData.map((data, index) => (
                    <tr key={index}>
                      <td className='px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-left'>
                        {data.caso}
                      </td>
                      <td className='px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-left'>
                        {new Date(data.fecha).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-center'>
                        {data.estado}
                      </td>
                      <td className='px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-right'>
                        S/ {data.monto_pagado}
                      </td>
                      <td className='px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-right'>
                        S/ {data.saldo_restante}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='w-full bg-gray-100 dark:bg-secondary-800 mt-3'>
                <div className='flex flex-row '>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Descripcion
                    </label>
                    <input
                      type='text'
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      placeholder='Ingrese descripcion'
                      onChange={(e) => {
                        const value = e.target.value;
                        setNuevoPagoData({
                          ...nuevoPagoData,
                          descripcion: value,
                        });
                      }}
                    />
                  </div>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Monto
                    </label>
                    <input
                      type='number'
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      placeholder='Ingrese monto S/'
                      onChange={(e) => {
                        const value = e.target.value;
                        setNuevoPagoData({
                          ...nuevoPagoData,
                          monto: value,
                        });
                      }}
                    />
                  </div>

                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Metodo de pago
                    </label>
                    <select
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      onChange={(e) => {
                        const value = e.target.value;
                        setNuevoPagoData({
                          ...nuevoPagoData,
                          metodo_pago: value,
                        });
                      }}
                    >
                      <option
                        value=''
                        disabled
                      >
                        Seleccionar
                      </option>
                      <option value='Efectivo'>Efectivo</option>
                      <option value='Yape/Plin'>Yape/Plin</option>
                      <option value='Transferencia'>Transferencia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex flex-col p4 mt-4'>
                <button
                  className='  bg-primary-700 text-white p-2 rounded-md'
                  onClick={() => {
                    guardarNuevoPago();
                  }}
                >
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
