import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CARIMG1 from "../assets/carousel-1.jpg";
import CARIMG2 from "../assets/carousel-2.jpg";
import "../components/InputSearch/style.scss";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carousel-set' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='.carousel-img' src={CARIMG1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='.carousel-img' src={CARIMG2} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;