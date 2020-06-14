import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselWrapper({ children }) {
  console.log(children);
  const [activeIndex, setActiveIndex] = useState(0);

  function nextSlide() {
    setActiveIndex(activeIndex++);
  }

  function previousSlide() {
    setActiveIndex(activeIndex--);
  }

  return (
    <Carousel interval={null} controls={false} activeIndex={activeIndex}>
      {React.Children.map(children, (Child) => {
        return <Carousel.Item>{React.cloneElement(Child, { previousSlide, nextSlide })}</Carousel.Item>;
      })}
    </Carousel>
  );
}

export default CarouselWrapper;
