import React, { useState, useEffect } from 'react';

const Carousel = () => {
    
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        [   'https://source.unsplash.com/1600x900/?legal', 
            'Servicio Consultoria legal', 
            'Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify)', 
            'https://unsplash.com/photos/5Lb1tUd8g2E'
        ],
        [   'https://source.unsplash.com/1600x900/?lawyer', 
            'Servicio Area de Litigio', 
            'Most package managers will install associated peer dependencies as well. If you see a ',  
            'https://unsplash.com/photos/5Lb1tUd8g2E'
        ],
        [   'https://source.unsplash.com/1600x900/?attorney', 
            'Servicio Consultoria legal', 
            'Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify)', 
            'https://unsplash.com/photos/5Lb1tUd8g2E'
        ],
        [   'https://source.unsplash.com/1600x900/?legislation', 
            'Servicio Area de Litigio', 
            'Most package managers will install associated peer dependencies as well. If you see a ',  
            'https://unsplash.com/photos/5Lb1tUd8g2E'
        ],
        [   'https://source.unsplash.com/1600x900/?law', 
            'Servicio Consultoria Abogados', 
            'Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify)', 
            'https://unsplash.com/photos/5Lb1tUd8g2E'
        ]
    ];
    

    const back = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const next = () => {
        if (currentIndex < images.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(1); // Reset to the first image if currentIndex exceeds the image length
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next(); // Llama a la función next cada 5 segundos
        }, 5000);

        return () => {
            clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
        };
    }, [currentIndex]);

    return (
        <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
            <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
                <span>{currentIndex}</span>/
                <span>{images.length}</span>
            </div>

            {images.map((image, index) => (
                <figure  key={index} className={`${currentIndex === index + 1 ? '' : 'hidden'}`} style={{ height: "500px"}} >
                    <img id="contenedor_figura" src={image[0]} alt={image[1]} className="absolute inset-0 z-10 h-full w-full object-cover opacity-60" style={{ objectPosition: 'center top' }}/>
                    <figcaption  className="absolute inset-x-0 bottom-1 md:bottom-20 md:right-auto md:left-20 z-20 p-4 font-light text-sm text-center md:text-left mx-auto tracking-widest leading-snug">
                        <h2 className="text-xl font-semibold ">{image[1]}</h2>
                        <p className='mb-3'>{image[2]}</p>
                        {image[3] && <a href={image[3]} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Photo by Unsplash</a>} 
                    </figcaption>
                </figure>
            ))}

            <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                {/* Left arrow SVG */}
            </button>

            <button onClick={next} className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                {/* Left arrow SVG */}
            </button>
            <style>
                {`
                   
                    @media (min-width: 768px) 
                        #contenedor_figura {
                            object-position:  center;
                        }
                       
                      }
                `}

            </style>
        </article>
    );
};

export default Carousel;
