import React, { useState } from "react";
import Slider from "../../css/ImageSlider.module.css";
const ImageSlider = () => {
  let imageslider = [
    "https://images.pexels.com/photos/724626/pexels-photo-724626.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/88234/pexels-photo-88234.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/134058/pexels-photo-134058.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4137250/pexels-photo-4137250.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const [count, setcount] = useState(0);

  let leftarrow = () => {
    if (count === 0) {
      setcount(imageslider.length - 1);
    } else {
      setcount(count - 1);
    }
  };

  let rightarrow = () => {
    if (count === imageslider.length - 1) {
      setcount(0);
    } else {
      setcount(count + 1);
    }
  };
  return (
    <div className={Slider.card}>
      <img className={Slider.cardimg} src={imageslider[count]} alt="" />
      <button className={Slider.leftbtn} onClick={leftarrow}>
        <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
      </button>
      <button className={Slider.rightbtn} onClick={rightarrow}>
        <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ImageSlider;

// let leftarrow = () => {
//     if (count === 0) {
//       setcount(imageslider.length - 1);
//     } else {
//       setcount(count - 1);
//     }
//   };
//   let rightarrow = () => {
//     if (count === imageslider.length - 1) {
//       setcount(0);
//     } else {
//       setcount(count + 1);
//     }
//   };
