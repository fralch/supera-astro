import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Casos_component = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);
  const [casosView, setCasosView] = useState([]);
  const [pagosView, setPagosView] = useState([]);

  const [nuevoCliente, setNuevoCliente] = useState({
    dni: 0,
    nombre: '',
    celular: '',
    correo: '',
    direccion: '',
    estado: 1,
  });

  useEffect(() => {
    axios.get('http://localhost:4000/clientes').then((response) => {
      console.log(response.data);
      setDataTable(response.data);
      setDataTableFilter(response.data);
    });
  }, []);

  const handleCasos = (casos) => {
    // abrir modal
    if (casos.length === 0) {
      return;
    }
    const modalPagosDetalles = document.getElementById('pago_detalles');
    modalPagosDetalles.classList.add('hidden');
    modalPagosDetalles.setAttribute('aria-hidden', 'true');

    const modal = document.getElementById('modal-ver-casos');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    // obtener casos
    setCasosView(casos);
  };
  const handlePagos = (pagos) => {
    // abrir modal
    if (pagos.length > 0) {
      const modal = document.getElementById('pago_detalles');
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      // obtener casos
      setPagosView(pagos);
    }
  };

  const handleEditar = (cliente) => {
    console.log(cliente);
    setNuevoCliente(cliente);
  };

  const handleNuevoCliente = () => {
    console.log(nuevoCliente);

    axios
      .post('http://192.168.1.50:3000/clientes/create', nuevoCliente)
      .then((response) => {
        console.log(response.data);
        setDataTable([...dataTable, response.data]);
        setDataTableFilter([...dataTable, response.data]);
        const modal = document.getElementById('modal-agregar-cliente');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
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
                  CLIENTES
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
                    Condicion
                  </div>
                  <input
                    type='text'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                    placeholder='Ingrese condición'
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
                    Estado
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
                    <option value='1'>Activo</option>
                    <option value='0'>Inactivo</option>
                  </select>
                </div>

                <div className='flex flex-col w-full mb-4 '>
                  <button
                    className='bg-primary-700 text-white p-2 rounded-md'
                    onClick={() => {
                      setNuevoCliente({
                        dni: 0,
                        nombre: '',
                        celular: '',
                        correo: '',
                        direccion: '',
                        estado: 1,
                      });
                      const modal = document.getElementById(
                        'modal-agregar-cliente'
                      );
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
                        Estado
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
                            {data.nombre}
                          </div>
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          <button
                            className='text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                            onClick={() => handleCasos(data.casos)}
                          >
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
                          {data.estado ? (
                            <div className='text-green-500'>Activo</div>
                          ) : (
                            <div className='text-red-500'>Inactivo</div>
                          )}
                        </td>
                        <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                          <button
                            className='text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                            onClick={() => {
                              handleEditar(data);
                              const modal = document.getElementById(
                                'modal-agregar-cliente'
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
        id='modal-agregar-cliente'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
        style={{ zIndex: 9999 }}
      >
        <div className='relative w-full max-w-3xl px-2 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Ingresar nuevo cliente
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-agregar-cliente'
                aria-label='Close'
                onClick={() => {
                  const modal = document.getElementById(
                    'modal-agregar-cliente'
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
                  DNI
                </label>
                <input
                  type='text'
                  className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                  placeholder='Ingrese DNI'
                  value={nuevoCliente.dni}
                  onChange={(e) =>
                    setNuevoCliente({
                      ...nuevoCliente,
                      dni: parseInt(e.target.value),
                    })
                  }
                />
                <label className='block text-sm text-gray-700 dark:text-gray-200'>
                  Cliente
                </label>
                <input
                  type='text'
                  className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                  placeholder='Ingrese nombre del cliente'
                  value={nuevoCliente.nombre}
                  onChange={(e) =>
                    setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })
                  }
                />
              </div>

              <div className='w-full bg-gray-100 dark:bg-secondary-800 mt-3'>
                <div className='flex flex-row '>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Celular
                    </label>
                    <input
                      type='text'
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      placeholder='Ingrese celular'
                      value={nuevoCliente.celular}
                      onChange={(e) =>
                        setNuevoCliente({
                          ...nuevoCliente,
                          celular: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Correo
                    </label>
                    <input
                      type='email'
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      placeholder='Ingrese correo'
                      value={nuevoCliente.correo}
                      onChange={(e) =>
                        setNuevoCliente({
                          ...nuevoCliente,
                          correo: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Direccion
                    </label>
                    <input
                      type='text'
                      className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'
                      placeholder='Ingrese dirección'
                      value={nuevoCliente.direccion}
                      onChange={(e) =>
                        setNuevoCliente({
                          ...nuevoCliente,
                          direccion: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className='hidden w-full bg-gray-100 dark:bg-secondary-800 mt-3'>
                <div className='flex flex-row '>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Condición
                    </label>
                    <select className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'>
                      <option value=''>Seleccionar</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                    </select>
                  </div>
                  <div className='flex flex-col w-full p-4'>
                    <label className='block text-sm text-gray-700 dark:text-gray-200'>
                      Estado
                    </label>
                    <select className='border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm'>
                      <option
                        value=''
                        disabled
                      >
                        Seleccionar
                      </option>
                      <option value='1'>Activo</option>
                      <option value='2'>Inactivo</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex flex-col p4 mt-4'>
                <button
                  className='  bg-primary-700 text-white p-2 rounded-md'
                  onClick={handleNuevoCliente}
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

      <div
        id='modal-ver-casos'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
        style={{ zIndex: 9999 }}
      >
        <div className='relative w-full max-w-3xl px-2 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Casos
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-ver-casos'
                aria-label='Close'
                onClick={() => {
                  const modal = document.getElementById('modal-ver-casos');
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
              <div className='flex flex-col w-full bg-gray-100 dark:bg-secondary-800 rounded-md p-4'>
                <div className='flex flex-row '>
                  <div className='flex flex-col w-full p-4'>
                    <table className='min-w-full divide-y-2 divide-gray-700 bg-primary-980 text-sm dark:divide-gray-700 dark:bg-primary-980'>
                      <thead className='ltr:text-left rtl:text-right'>
                        <tr>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Nombre Caso
                          </th>

                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Estado
                          </th>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Pagado
                          </th>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Pendiente
                          </th>
                          <th className='px-4 py-2'>Pagos</th>
                        </tr>
                      </thead>

                      <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                        {casosView.map((caso, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0
                                ? 'bg-gray-100 dark:bg-secondary-980'
                                : 'bg-white dark:bg-secondary-800'
                            }
                          >
                            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                              {caso.expediente}
                            </td>

                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                              <p
                                className={`${
                                  caso.pagos.length > 0
                                    ? caso.pagos.reduce((prev, current) => {
                                        return prev.saldo_restante <
                                          current.saldo_restante
                                          ? prev
                                          : current;
                                      }).saldo_restante > 0
                                      ? 'bg-red-400'
                                      : 'bg-green-400'
                                    : 'bg-gray-400'
                                }  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400   dark:bg-gray-700 `}
                              >
                                {caso.pagos.length > 0
                                  ? caso.pagos.reduce((prev, current) => {
                                      return prev.saldo_restante <
                                        current.saldo_restante
                                        ? prev
                                        : current;
                                    }).saldo_restante > 0
                                    ? 'Pendiente'
                                    : 'Culminado'
                                  : 'Sin pagos'}
                              </p>
                            </td>
                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                              S/
                              {caso.pagos.length > 0
                                ? caso.pagos.reduce(
                                    (acc, pago) => acc + pago.monto,
                                    0
                                  )
                                : 0}
                            </td>
                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                              S/
                              {caso.pagos.length > 0
                                ? caso.pagos.reduce((prev, current) => {
                                    return prev.saldo_restante <
                                      current.saldo_restante
                                      ? prev
                                      : current;
                                  }).saldo_restante
                                : 0}
                            </td>
                            <td className='whitespace-nowrap px-4 py-2'>
                              <button
                                className='inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500'
                                onClick={() => handlePagos(caso.pagos)}
                              >
                                {caso.pagos.length > 0 ? 'Ver' : 'Sin pagos'}
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
            <div
              className='hidden overflow-x-auto p-5'
              id='pago_detalles'
            >
              <div className='flex flex-col w-full bg-primary-990 rounded-md p-4'>
                {/* boton para cerrar vista detalle pagos */}
                <div className='flex items-start justify-between'>
                  <button
                    type='button'
                    className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-900 dark:hover:text-white'
                    data-modal-toggle='pago_detalles'
                    aria-label='Close'
                    onClick={() => {
                      const modal = document.getElementById('pago_detalles');
                      modal.classList.add('hidden');
                      modal.setAttribute('aria-hidden', 'true');
                    }}
                  >
                    <svg
                      className='w-3 h-3'
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
                <div className='flex flex-row '>
                  <div className='flex flex-col w-full p-4'>
                    <table className='min-w-full divide-y-2 divide-gray-700 bg-primary-990 text-sm dark:divide-gray-700 '>
                      <thead className='ltr:text-left rtl:text-right'>
                        <tr>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Fecha
                          </th>

                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Descripción
                          </th>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Monto
                          </th>
                          <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                            Pendiente
                          </th>
                        </tr>
                      </thead>

                      <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                        {pagosView.map((pago, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0
                                ? 'bg-gray-100 dark:bg-secondary-980'
                                : 'bg-white dark:bg-secondary-800'
                            }
                          >
                            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-center'>
                              {new Date(pago.fecha_pago).toLocaleDateString()}
                            </td>

                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center'>
                              {pago.descripcion}
                            </td>
                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center'>
                              S/{pago.monto}
                            </td>
                            <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center'>
                              S/{pago.saldo_restante}
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
