import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {funnyPicturesData} from '../../constants/funnyPicturesConst'

export const FunnyPicturesCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel 
            activeIndex={index} 
            onSelect={handleSelect} 
            className="arr-carous" 
        >
            {funnyPicturesData.map((data, i) => {
                return (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100 img-thumbnail"
                            src={data.cardUrl}
                            alt="Next slide"
                        />
                        <Carousel.Caption>
                            {/* <h3></h3>
                            <p>смешная картинка</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>                    
                )
            })}
        </Carousel>
    );
}