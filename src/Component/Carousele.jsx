import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

const Carousele = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src="./images/hero_1.jpg" alt="img" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="./images/hero_2.jpg" alt="img" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="./images/hero_3.jpg" alt="img" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}

export default Carousele
