import { useState, useEffect } from 'react';


const Casos_component = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const abrirModal = () => {
        const modal = document.getElementById('default-modal');
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    }
    const cerrarModal = () => {
        const modal = document.getElementById('default-modal');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }
    return (
        <section className="    py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto">
            <div className="bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm">
               
                <div className="flex-grow overflow-hidden h-full flex flex-col">
                   
                    <div className="flex-grow flex overflow-x-hidden">
                        <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                            <div className="text-xs text-gray-400 tracking-wider">CASOS</div>
                            
                            <div className="space-y-4 mt-3">
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-5.png" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        <div className=" py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Civil</div>
                                    </div>
                                    
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-primary-450 focus:outline-none">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-1.png" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        <div className=" py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">Penal</div>
                                    </div>
                                   
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-4.png" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        <div className="py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md">Laboral</div>
                                    </div>
                                    
                                </button>
                                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-2.png" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        <div className="py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-red-500 rounded-md">Empresas</div>
                                    </div>
                                    
                                </button>
                             
                            </div>
                        </div>
                        <div className="flex-grow bg-white dark:bg-secondary-800 overflow-y-auto">
                          
                            <div className="sm:p-7 p-4">
                                
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-gray-400">
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Nombre del Cliente </th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Condición</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Celular</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Expediente/Carpeta F.</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Especialista</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Materia</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Contrato</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Acto Procesal</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">% Culminado</th>
                                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Ultimo acceso</th>
                                            

                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 dark:text-gray-100">
                                        <tr>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                    
                                                    Card
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                  
                                                    PayPal
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">- $120.00</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                    <div className="sm:flex hidden flex-col">
                                                        24.12.2020
                                                        <div className="text-gray-400 text-xs">11:16 AM</div>
                                                    </div>
                                                    <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto"  onClick={abrirModal}>
                                                        <svg viewBox="0 0 24 24" className="w-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                   
                                                    Card
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                   
                                                    Microsoft
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">- $9.99</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                    <div className="sm:flex hidden flex-col">
                                                        24.12.2020
                                                        <div className="text-gray-400 text-xs">07:16 AM</div>
                                                    </div>
                                                    <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                                                        <svg viewBox="0 0 24 24" className="w-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                      
                                    </tbody>
                                </table>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="default-modal" data-modal-show="true" aria-hidden="true" className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center">
                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                                Actualización del caso
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <div className="p-6 space-y-6  text-base">
                            <div className="px-6 w-full">
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">% Culminado</label>	
                                <div className="bg-gray-300 h-2 w-full rounded-full relative mt-4">
                                    <span className="bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer" ></span>
                                    <span className="bg-teal-500 h-2 absolute left-0 top-0 rounded-full" ></span>
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-white">
                                    <span className="w-8 text-left">0%</span>
                                    <span className="w-8 text-center">25%</span>
                                    <span className="w-8 text-center">50%</span>
                                    <span className="w-8 text-center">75%</span>
                                    <span className="w-8 text-right">100%</span>
                                </div>
                            </div>
                            <div className="px-6 w-full">
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200 mb-2">Acto Procesal</label>
                                <textarea className="w-full h-24 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100" placeholder="Escribe aquí..."></textarea>
                            </div> 
                            <p className="text-gray-400 text-xs">Fecha y hora actual: {dateTime.toLocaleString()}</p>
                                
                        </div>
                        <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-toggle="default-modal" type="button" className="text-white bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800">Guardar</button>
                            <button data-modal-toggle="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Casos_component;