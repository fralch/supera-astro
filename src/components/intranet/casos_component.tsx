
const Casos_component = () => {
    return (
        <section className="  py-2 bg-blueGray-50">
            <div className="w-full xl:w-4/5 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h2 className="font-semibold text-xl text-blueGray-700">
                                    Casos de Supera Abogados
                                </h2>
                            </div>
                            

                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse text-slate-600">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Nombre
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Área
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Ultima actualización
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Avance
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Estado
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        /argon/
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        Penal
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        10/10/2021 - 13:00
                                    </td>
                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-xs font-medium  text-gray-500">39%</span>
                                            <div className="relative w-3/5">
                                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                                    <div className="bg-indigo-600 h-2 rounded-sm" style={{ width: '39%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} onClick={() => document.getElementById('modal').classList.remove('hidden')}>
                                            Ver
                                        </button>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        /argon/index.html
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Civil
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        02/06/2021 - 08:12
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-xs font-medium  text-gray-500">9%</span>
                                            <div className="relative w-3/5">
                                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                                    <div className="bg-red-600 h-2 rounded-sm" style={{ width: '9%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                            Ver
                                        </button>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        /argon/charts.html
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Comunidades
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        02/06/2021 - 08:12
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-xs font-medium  text-gray-500">9%</span>
                                            <div className="relative w-3/5">
                                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                                    <div className="bg-red-600 h-2 rounded-sm" style={{ width: '9%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                            Ver
                                        </button>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        /argon/tables.html
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Laboral
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        02/06/2021 - 08:12
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-xs font-medium  text-gray-500">9%</span>
                                            <div className="relative w-3/5">
                                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                                    <div className="bg-red-600 h-2 rounded-sm" style={{ width: '9%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                            Ver
                                        </button>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        /argon/profile.html
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Corporativo
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        02/06/2021 - 08:12
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-xs font-medium  text-gray-500">9%</span>
                                            <div className="relative w-3/5">
                                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                                    <div className="bg-red-600 h-2 rounded-sm" style={{ width: '9%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} onClick={() => document.getElementById('modal').classList.remove('hidden')}>
                                            Ver
                                        </button>
                                       
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center hidden bg-gray-500 bg-opacity-75 modal">
                <div className="bg-white rounded-lg p-6 relative mx-auto w-full max-w-md">
                    <button onClick={() => document.getElementById('modal').classList.add('hidden')} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    
                    <h2 className="text-xl font-semibold mb-4 text-gray-500">Título del modal</h2>
                    <p className="text-gray-600">Contenido del modal...</p>
                </div>
            </div>

        </section>
    )
}
export default Casos_component;