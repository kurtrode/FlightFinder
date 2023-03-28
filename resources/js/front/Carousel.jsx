import React from 'react'
import { useState } from "react";

export default function Carousel({detailerData}) {

  // Need data from API for detailedData

    const[currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? detailedData.length - 1 : currentIndex - 1;
        setCurrentIndex(newInde)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === detailedData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <div>

        <div className="carousel-image">IMAGE (IF WE HAVE) HERE</div>
        <div className="carousel-city__box">CITY NAME</div>

        <button className="arrow btn-prev"onClick={goToPrevious}></button>
        <button className="arrow btn-next" onClick={goToNext}></button> 
    </div>
  )
}
