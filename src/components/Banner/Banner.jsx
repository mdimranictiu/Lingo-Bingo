import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

const Banner = () => {
    return (
        <div className="py-10">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={true}
                swipeable
                emulateTouch
                className="shadow-lg"
            >
                {[img2, img1, img3, img4, img5, img6].map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`${image}`}
                            className="w-full h-[400px] md:h-[500px]  "
                        />
                       
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
