import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { r } from '../../../dist/_astro/index.NEDEFKed';

const Casos_component = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [actoProcesal, setActoProcesal] = useState('');
  const [culminado, setCulminado] = useState(0);
  const [idCasoUpdate, setIdCasoUpdate] = useState(0);
  const [mesaFilter, setmesaFilter] = useState('');
  const [dataTable, setDataTable] = useState([
    {
      id: 885,
      cliente: 'CAJA HUANCAYO',
      condicion: '-',
      celular: '0',
      expediente: '-',
      fiscal: '-',
      materia: 'VARIOS ',
      proceso: 'VARIOS ',
      mesa: 'Empresa y Comunidades',
      contrato: 'Contrato Vigente ',
      acto_procesal: 'En proceso',
      culminado: 0,
      fecha: '2024-05-01T00:00:00.000Z',
    },
  ]);
  const [dataTableFilter, setDataTableFilter] = useState(dataTable);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permisoUsuario, setPermisoUsuario] = useState(false);
  const [userData, setUserData] = useState(null);

  // referenciar un div
  const blurRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      console.log(JSON.parse(localStorage.getItem('userData')));
      setUserData(JSON.parse(localStorage.getItem('userData')));
    } else {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/casos').then((response) => {
      console.log(response.data);
      setDataTable(response.data);
      setDataTableFilter(response.data);
      const pageSize = 10;
      const paginatedData = dividirArray(response.data, pageSize);
      setPaginatedData(paginatedData);
    });
  }, []);

  useEffect(() => {
    let data = dataTable.filter((data) => {
      return data.mesa === mesaFilter;
    });
    setDataTableFilter(data);
    setCurrentPage(0);
    const pageSize = 10;
    const paginatedData = dividirArray(data, pageSize);
    setPaginatedData(paginatedData);
  }, [mesaFilter]);

  useEffect(() => {
    // Cronometro
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const dividirArray = (array, pageSize) => {
    let result = [];
    for (let i = 0; i < Math.ceil(array.length / pageSize); i++) {
      let start = i * pageSize;
      result.push(array.slice(start, start + pageSize));
    }

    return result;
  };

  const abrirModal = (actoProcesal, idCasoUpdate, culminado) => {
    setActoProcesal(actoProcesal);
    setIdCasoUpdate(idCasoUpdate);
    setCulminado(culminado);
    const modal = document.getElementById('default-modal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    setIsModalOpen(true);
    blurRef.current.classList.add('modal-open');
  };
  const cerrarModal = () => {
    setActoProcesal('');
    const modal = document.getElementById('default-modal');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    setIsModalOpen(false);
    blurRef.current.classList.remove('modal-open');
  };

  const abrirModalActoProcesal = (actoProcesal) => {
    setActoProcesal(actoProcesal);
    const modal = document.getElementById('modal-acto-procesal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    setIsModalOpen(true);
    blurRef.current.classList.add('modal-open');
  };
  const cerrarModalActoProcesal = () => {
    setActoProcesal('');
    const modal = document.getElementById('modal-acto-procesal');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    setIsModalOpen(false);
    blurRef.current.classList.remove('modal-open');
  };

  const convertirFecha = (fecha) => {
    let date = new Date(fecha);
    let options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('es-PE', options);
  };

  const updateCaso = () => {
    axios
      .put(`http://127.0.0.1:3000/casos/${idCasoUpdate}`, {
        acto_procesal: actoProcesal,
        culminado: culminado,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  };

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const diferenciaDias = (fecha) => {
    let fecha_actual = new Date();
    let fecha_ingresada = new Date(fecha);
    let diferencia = fecha_actual.getTime() - fecha_ingresada.getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  };

  const validarPermiso = (arrayUsers) => {
    const usuarioLogueado = userData.usuario;
    let rest = false;
    arrayUsers.forEach((element) => {
      if (element === usuarioLogueado) {
        setPermisoUsuario(true);
        rest = true;
      }
    });
    return rest;
  };
  return (
    <section className='    py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto'>
      <div
        id='222'
        className=' bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm'
      >
        <div className='flex-grow overflow-hidden h-full flex flex-col'>
          <div
            className='flex-grow flex overflow-x-hidden'
            ref={blurRef}
          >
            <div className='xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5'>
              <div className='text-xs text-gray-400 tracking-wider'>CASOS</div>

              <div className='space-y-4 mt-3'>
                <button
                  className={
                    mesaFilter === 'Civil'
                      ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none'
                      : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative '
                  }
                  onClick={() => setmesaFilter('Civil')}
                >
                  <div className='flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full'>
                    <img
                      src='https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-5.png'
                      className='w-7 h-7 mr-2 rounded-full'
                      alt='profile'
                    />
                    <div className=' py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md'>
                      Civil
                    </div>
                  </div>
                </button>
                <button
                  className={
                    mesaFilter === 'Penal'
                      ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-primary-450 focus:outline-none'
                      : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative '
                  }
                  onClick={() => setmesaFilter('Penal')}
                >
                  <div className='flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full'>
                    <img
                      src='https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-1.png'
                      className='w-7 h-7 mr-2 rounded-full'
                      alt='profile'
                    />
                    <div className=' py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md'>
                      Penal
                    </div>
                  </div>
                </button>
                <button
                  className={
                    mesaFilter === 'Laboral'
                      ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-yellow-600 focus:outline-none'
                      : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative '
                  }
                  onClick={() => setmesaFilter('Laboral')}
                >
                  <div className='flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full'>
                    <img
                      src='https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-4.png'
                      className='w-7 h-7 mr-2 rounded-full'
                      alt='profile'
                    />
                    <div className='py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md'>
                      Laboral
                    </div>
                  </div>
                </button>
                <button
                  className={
                    mesaFilter === 'Empresa y Comunidades'
                      ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-red-500 focus:outline-none'
                      : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative '
                  }
                  onClick={() => setmesaFilter('Empresa y Comunidades')}
                >
                  <div className='flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full'>
                    <img
                      src='https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-2.png'
                      className='w-7 h-7 mr-2 rounded-full'
                      alt='profile'
                    />
                    <div className='py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-red-500 rounded-md'>
                      Empresas
                    </div>
                  </div>
                </button>

                <div className='flex flex-col items-center'>
                  <input
                    type='text'
                    className='w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100'
                    placeholder='Buscar...'
                    onChange={(e) => {
                      let data = dataTable.filter((data) => {
                        return data.cliente
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase());
                      });
                      setDataTableFilter(data);
                      setCurrentPage(0);
                      const pageSize = 10;
                      const paginatedData = dividirArray(data, pageSize);
                      setPaginatedData(paginatedData);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className='flex-grow bg-white dark:bg-secondary-800 overflow-y-auto'>
              <div className='sm:p-7 p-4'>
                <table className='text-left'>
                  <thead>
                    <tr className='text-gray-400 bg-primary-700 '>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Nombre_del_Cliente{' '}
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Condición
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell'>
                        Celular
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800'>
                        Expediente/Carpeta_F.
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Especialista/Fiscal
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Materia
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Proceso
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Mesa
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Contrato
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Pagos
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Acto Procesal
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Tiempo
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Culminado
                      </th>
                      <th className='font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white'>
                        Ultimo acceso
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 dark:text-gray-100'>
                    {paginatedData[currentPage] &&
                      paginatedData[currentPage].map((data, index) => (
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
                              {data.cliente}
                            </div>
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800'>
                            <div className='flex items-center'>
                              {data.condicion}
                            </div>
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.celular}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.expediente}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.fiscal}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.materia}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.proceso}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            {data.mesa}
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            <button
                              className='text-orange-500 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-orange-400 dark:hover:text-orange-500 dark:focus:ring-orange-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                              onClick={() => {
                                validarPermiso(data.usuarios_dni);

                                const modal =
                                  document.getElementById('modal-upload-file');
                                modal.classList.remove('hidden');
                                modal.setAttribute('aria-hidden', 'false');
                                setIsModalOpen(true);
                                blurRef.current.classList.add('modal-open');
                              }}
                            >
                              {data.contrato}
                            </button>
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            <button
                              className='text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                              onClick={() => {
                                const modal =
                                  document.getElementById('modal-table-pagos');
                                modal.classList.remove('hidden');
                                modal.setAttribute('aria-hidden', 'false');
                                setIsModalOpen(true);
                                blurRef.current.classList.add('modal-open');
                              }}
                            >
                              Ver
                            </button>
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            <button
                              className='text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-blue-400 dark:hover:text-blue-500 dark:focus:ring-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                              onClick={() =>
                                abrirModalActoProcesal(data.acto_procesal)
                              }
                            >
                              Abrir
                            </button>
                          </td>
                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell '>
                            <div className='flex items-center'>
                              <button
                                className='text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400 dark:hover:text-green-500 dark:focus:ring-green-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                                onClick={() => {
                                  setTime(0);
                                  setIsRunning(true);
                                  const modal =
                                    document.getElementById('modal-cronometro');
                                  modal.classList.remove('hidden');
                                  modal.setAttribute('aria-hidden', 'false');
                                  setIsModalOpen(true);
                                  blurRef.current.classList.add('modal-open');
                                }}
                              >
                                Iniciar
                              </button>
                            </div>
                          </td>
                          <td
                            className={
                              data.culminado < 50
                                ? 'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell text-red-500'
                                : 'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell text-green-500'
                            }
                          >
                            {data.culminado} %
                          </td>

                          <td className='sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800'>
                            <div className='flex items-center'>
                              <div className='sm:flex  flex-col'>
                                <div className='text-gray-400 text-xs'>
                                  {convertirFecha(data.fecha)}
                                  <span
                                    className={
                                      diferenciaDias(data.fecha) > 5
                                        ? 'text-red-500'
                                        : 'text-green-500'
                                    }
                                  >
                                    {' '}
                                    ({diferenciaDias(data.fecha)} días)
                                  </span>
                                </div>
                              </div>
                              <button
                                className='w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto'
                                onClick={() =>
                                  abrirModal(
                                    data.acto_procesal,
                                    data.id,
                                    data.culminado
                                  )
                                }
                              >
                                <svg
                                  viewBox='0 0 24 24'
                                  className='w-5'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <circle
                                    cx='12'
                                    cy='12'
                                    r='1'
                                  ></circle>
                                  <circle
                                    cx='19'
                                    cy='12'
                                    r='1'
                                  ></circle>
                                  <circle
                                    cx='5'
                                    cy='12'
                                    r='1'
                                  ></circle>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <button
                  className=' mt-3 text-|-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 0}
                >
                  Anterior
                </button>

                <span className=' mx-3'>
                  {currentPage + 1} de {paginatedData.length}
                </span>
                <button
                  className='text-|-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10'
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === paginatedData.length - 1}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='default-modal'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center mt-5'
      >
        <div className='relative w-full max-w-2xl px-4 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Actualización del caso
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='default-modal'
                onClick={cerrarModal}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6 space-y-6  text-base'>
              <div className='px-6 w-full'>
                <label className='block text-base font-medium text-gray-700 dark:text-gray-200'>
                  Culminado:{' '}
                  <span className='text-gray-400 dark:text-gray-400'>
                    {culminado} %
                  </span>
                </label>

                <input
                  type='range'
                  className='w-full h-5 '
                  min='0'
                  max='100'
                  step='1'
                  value={culminado}
                  onChange={(e) => {
                    setCulminado(parseInt(e.target.value));
                  }}
                />
              </div>
              <div className='px-6 w-full'>
                <label className='block text-base font-medium text-gray-700 dark:text-gray-200 mb-2'>
                  Acto Procesal
                </label>
                <textarea
                  className='w-full h-24 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100'
                  value={actoProcesal}
                  onChange={(e) => {
                    setActoProcesal(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                data-modal-toggle='default-modal'
                type='button'
                className='text-white bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800 mr-2'
                onClick={updateCaso}
              >
                Guardar
              </button>
              <button
                data-modal-toggle='default-modal'
                type='button'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600'
                onClick={cerrarModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id='modal-acto-procesal'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
      >
        <div className='relative w-full max-w-2xl px-4 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Acto Procesal
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-acto-procesal'
                onClick={cerrarModalActoProcesal}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6 space-y-6  text-base'>
              <div className='px-6 pb-3 w-full'>
                <p className='text-gray-600 dark:text-gray-300'>
                  {actoProcesal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='modal-cronometro'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
      >
        <div className='relative w-full max-w-2xl px-4 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Tiempo laborado en caso
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-cronometro'
                onClick={() => {
                  setTime(0);
                  setIsRunning(false);
                  const modal = document.getElementById('modal-cronometro');
                  modal.classList.add('hidden');
                  modal.setAttribute('aria-hidden', 'true');
                  setIsModalOpen(false);
                  blurRef.current.classList.remove('modal-open');
                }}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6  text-base'>
              <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white'>
                {formatTime(time)}
              </h2>

              <p>Descripción</p>
              <textarea
                className='w-full h-24 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100'
                placeholder='Agregar descripción (Opcional)'
              ></textarea>
              <p className='text-gray-400 text-xs'>
                Fecha y hora actual: {dateTime.toLocaleString()}
              </p>
              <div className='flex justify-between mt-5'>
                <div className='space-x-2'>
                  <button
                    className='bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                    onClick={() => setIsRunning(!isRunning)}
                  >
                    {isRunning ? 'Pausar' : 'Reanudar'}
                  </button>
                  <button
                    className='bg-secondary-700 hover:bg-secondary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-secondary-450 dark:hover:bg-secondary-600 dark:focus:ring-blue-800'
                    onClick={() => setTime(0)}
                  >
                    Reiniciar
                  </button>
                </div>

                <div className='space-x-2'>
                  <button className='bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800'>
                    Guardar
                  </button>
                  <button
                    className='bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                    onClick={() => {
                      setTime(0);
                      setIsRunning(false);
                      const modal = document.getElementById('modal-cronometro');
                      modal.classList.add('hidden');
                      modal.setAttribute('aria-hidden', 'true');
                      setIsModalOpen(false);
                      blurRef.current.classList.remove('modal-open');
                    }}
                  >
                    Cancelar
                  </button>
                </div>
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
      >
        <div className='relative w-full max-w-2xl px-4 h-full md:h-auto'>
          <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
            <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white'>
                Pagos
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
                data-modal-toggle='modal-table-pagos'
                onClick={() => {
                  const modal = document.getElementById('modal-table-pagos');
                  modal.classList.add('hidden');
                  modal.setAttribute('aria-hidden', 'true');
                  setIsModalOpen(false);
                  blurRef.current.classList.remove('modal-open');
                }}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='overflow-x-auto p-5'>
              <table className='min-w-full divide-y-2 divide-gray-700 bg-primary-980 text-sm dark:divide-gray-700 dark:bg-primary-980'>
                <thead className='ltr:text-left rtl:text-right'>
                  <tr>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Nombre
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Fecha
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Estado
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Monto
                    </th>
                    <th className='px-4 py-2'>Acciones</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  <tr>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      John Doe
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      24/05/1995
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      <p className='text-yellow-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400   dark:bg-gray-700 '>
                        Pendiente
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      $120,000
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <a
                        href='#'
                        className='inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500'
                      >
                        Ver
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Jane Doe
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      04/11/1980
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      <p className='text-green-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400   dark:bg-gray-700 '>
                        Pagado
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      $100,000
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <a
                        href='#'
                        className='inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500'
                      >
                        Ver
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Gary Barlow
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      24/05/1995
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      <p className='text-red-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-red-400   dark:bg-gray-700 '>
                        Anulado
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      $20,000
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <a
                        href='#'
                        className='inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500'
                      >
                        Ver
                      </a>
                    </td>
                  </tr>
                  {/* total de los pagos */}
                  <tr>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      Total
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      $220,000
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        id='modal-upload-file'
        data-modal-show='true'
        aria-hidden='true'
        className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center'
      >
        <div className='sm:max-w-lg w-full p-10 bg-primary-980 rounded-xl z-10'>
          <div className='flex items-start justify-between'>
            <button
              type='button'
              className='text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white'
              data-modal-toggle='modal-upload-file'
              onClick={() => {
                const modal = document.getElementById('modal-upload-file');
                modal.classList.add('hidden');
                modal.setAttribute('aria-hidden', 'true');
                setIsModalOpen(false);
                blurRef.current.classList.remove('modal-open');
              }}
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div className='text-center'>
            <h2 className='mt-5 text-3xl font-bold text-white'>Contrato</h2>
            <p className='mt-2 text-sm text-gray-400'>
              Lorem ipsum is placeholder text.
            </p>
          </div>
          <form
            className='mt-8 space-y-3'
            action='#'
            method='POST'
          >
            <div className=' text-center'>
              <button className=' w-2/3 py-4 bg-secondary-300 text-white px-4  rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 font-medium text-sm dark:bg-secondary-500 dark:hover:bg-secondary-700  dark:text-white'>
                Descargar
              </button>
            </div>
            <div
              className={
                permisoUsuario ? 'grid grid-cols-1 space-y-2' : 'hidden'
              }
            >
              <label className='text-sm font-bold text-gray-500 tracking-wide'>
                Adjuntar Documento
              </label>
              <div className='flex items-center justify-center w-full'>
                <label className='flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center '>
                  <div className='h-full w-full text-center flex flex-col items-center justify-center   '>
                    <div className='flex flex-auto max-h-48 w-2/5 mx-auto -mt-10'>
                      <img
                        className='has-mask h-36 object-center mt-6'
                        src='./upload.png'
                        alt='freepik image'
                      />
                    </div>
                    <p className='pointer-none text-gray-500 '>
                      <span className='text-sm'>Arrastra y suelta el</span>{' '}
                      Archivo aqui <br /> o{' '}
                      <a
                        href=''
                        id=''
                        className='text-amber-600 hover:underline'
                      >
                        selecciona un archivo
                      </a>{' '}
                      desde tu pc
                    </p>
                  </div>
                  <input
                    type='file'
                    className='hidden'
                  />
                </label>
              </div>
              <p className='text-sm text-gray-300'>
                <span>Tipos: doc,pdf</span>
              </p>
              <div>
                <button
                  type='submit'
                  className='my-5 w-full flex justify-center bg-primary-450 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-secondary-50 shadow-lg cursor-pointer transition ease-in duration-300'
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
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
