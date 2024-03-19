import { useState, useEffect } from 'react';

const Carousel = () => {
    
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        [   'https://images.unsplash.com/photo-1619771678310-9f1e06085d86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF3fHx8fHx8MTcwNzM0MDExOQ&ixlib=rb-4.0.3&q=80&w=1600', 
            'CIVIL', 
            'Navegamos los desafíos legales con soluciones precisas y un enfoque humano.', 
            '/civil'
        ],
        [   'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGVnYWx8fHx8fHwxNzA3MzQwMTk2&ixlib=rb-4.0.3&q=80&w=1600', 
            'PENAL', 
            'Nuestra defensa legal es comprometida y estratégica, diseñada para proteger sus derechos e intereses en todo momento.',  
            '/penal'
        ],
        [   'https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGVnaXNsYXRpb258fHx8fHwxNzA3MzM5OTk0&ixlib=rb-4.0.3&q=80&w=1600y', 
            'LABORAL', 
            'Brindamos una defensa legal integral, comprometida tanto con trabajadores en activo como con ex empleados, asegurando la protección de sus derechos laborales en todo momento.', 
            '/laboral'
        ],
        [   'https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF3eWVyfHx8fHx8MTcwNzMzOTk3OQ&ixlib=rb-4.0.3&q=80&w=1600', 
            'CORPORATIVO', 
            'Nuestra asesoría legal experta ofrece soluciones estratégicas para proteger los intereses comerciales de su empresa y garantizar el cumplimiento normativo en todo momento.',  
            '/coporativo'
        ]
    ];
    

    const back = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length); // Reset to the last image if currentIndex is 1
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
        <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl"   >
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
                        {image[3] && <a href={image[3]} target="_blank" rel="noreferrer" className="bg-texto-tertiary hover:bg-primary-450 text-white font-bold py-2 px-4 rounded-full ">Más información</a>} 
                    </figcaption>
                </figure>
            ))}

            <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-800 hover:bg-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
            </button>

            <button onClick={next} className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-800 hover:bg-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
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
