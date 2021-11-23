import React, {useState} from "react";
import {SliderData} from "./SliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import '../App.css';

function Slider ({slides}) {
  const [current, setCurrent]= useState(0);
  const length= slides.length;

  const nextSlide= () => {
    setCurrent(current === length - 1 ? 0 : current +1);

  };

  const prevSlide= () => {
    setCurrent( current === 0 ? length -1 : current -1)
  }
  console.log(current)

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return(
    <>
      <section className={'slider'}>
        <AiOutlineArrowLeft className={'left-arrow'} onClick={prevSlide}/>
        <AiOutlineArrowRight className={'right-arrow'} onClick={nextSlide}/>

      {SliderData.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img key={index} src={slide.image} alt={'imagenes'} className={'image'} /> )}
            </div>

        );

      })}
      </section>


    </>

  );
}

export default Slider;