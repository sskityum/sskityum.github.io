import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {photosUrl} from '../../constants/galeryConst'

export function GaleryCarousel() {
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
            {photosUrl.map((url, i) => {
                return (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100 img-thumbnail"
                            src={url}
                            alt="Next slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>Кыска</h3>
                            <p>Балуецца...</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>                    
                )
            })}
        </Carousel>
    );
  }
  
