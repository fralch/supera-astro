import { useState, useEffect } from 'react';
import { r } from '../../dist/_astro/index.LFf77hJu';
import { set } from 'astro/zod';
const StatsBlock = () => {

    // autoimcrementa el valor de un numero y lo muestra en pantalla
   
    const [count, setCount] = useState(0);
    const autoimcrement = (num: number) => {
        const interval = setInterval(() => {
            if (count < num) {
                setCount(count + 1);
            } else {
                setCount(0);
            }
        }, 100);
        return count;
    };

    useEffect(() => {
        autoimcrement(100);
    }, [count]);

    return (
        <div className="bg-gray-50 py-16  mx-0" >
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif  text-secondary-400 sm:text-4xl  font-bold" >
                    Sobre nuestros servicios
                </h2>
                <p className="mt-3 text-xl text-gray-500 sm:mt-4 ">
                    Organic, genuine conversations with higher response rates than
                    LinkedIn or cold email.
                </p>
            </div>
        </div>
        <div className="mt-10 pb-1">
            <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                            <div className="flex flex-col items-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <img className="w-14" src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-dark-1.png" alt=""/>
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 ">
                                    Clientes satisfechos
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">200+</dd>
                            </div>
                            
                            <div className="flex flex-col items-center  border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <img className="w-14" src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-dark-2.png" alt=""/>
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Casos ganados
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">58%</dd>
                            </div>
                            <div className="flex flex-col items-center border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <img className="w-14" src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-dark-3.png" alt="" />
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Abogados expertos
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                            </div>
                                <div className="flex flex-col items-center border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                    <img className="w-14" src="https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-dark-4.png" alt="" />
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                        Casos descestimados
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                                </div>
                            </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default StatsBlock;