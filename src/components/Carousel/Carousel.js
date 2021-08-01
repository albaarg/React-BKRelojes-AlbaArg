import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselHomeList = () => {
    return (
        <Carousel style={{width: '50%', marginTop:'6rem'}} className='container' >
           <Carousel.Item>
             <img
                className="d-block w-100"
                 src="https://firebasestorage.googleapis.com/v0/b/react-ecommerce-aa.appspot.com/o/imagenes%2F196816320_540208430317144_4002091887515073240_n.jpg?alt=media&token=df4523e7-849b-4750-88da-8a1f3c4330c6"
                 alt="Relojes a un click"
             />
        </Carousel.Item>

        <Carousel.Item>
          <img
             className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/react-ecommerce-aa.appspot.com/o/imagenes%2F191517665_309581603965688_1911428712298156834_n.jpg?alt=media&token=a147b14c-19db-414e-a568-d20e33ee7eb8"
              alt="Envíos a todo el país"
           />
        </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/react-ecommerce-aa.appspot.com/o/imagenes%2F210343185_129377765975877_4051400882712518880_n.jpg?alt=media&token=4d8ce502-222c-4c17-a681-d15a93d9a3c5"
                alt="Ventas por mayor y menor"
               />
            </Carousel.Item>


        </Carousel>
    )
}