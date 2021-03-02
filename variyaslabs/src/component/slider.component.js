import React from 'react';
import Swiper from 'react-id-swiper';
const Autoplay = () => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params}>
      <div><img src="../images/banner.jpg"/></div>
      <div><img src="../images/banner2.jpg"/></div>
      
    </Swiper>
  )
};
export default Autoplay;
