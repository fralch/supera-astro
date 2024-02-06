import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        'https://source.unsplash.com/1600x900/?beach',
        'https://source.unsplash.com/1600x900/?cat',
        'https://source.unsplash.com/1600x900/?dog',
        'https://source.unsplash.com/1600x900/?lego',
        'https://source.unsplash.com/1600x900/?textures&patterns'
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
                <figure key={index} className={`h-96 ${currentIndex === index + 1 ? '' : 'hidden'}`}>
                    <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />
                    <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
                        Any kind of content here!
                        Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius.
                    </figcaption>
                </figure>
            ))}

            <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                {/* Left arrow SVG */}
            </button>

            <button onClick={next} className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                {/* Right arrow SVG */}
            </button>
        </article>
    );
};

export default Carousel;
