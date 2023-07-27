import { Swiper, SwiperSlide } from "swiper/react";

interface ISlider {}

function Slider(props) {
  return (
    <Swiper>
      {props.map(() => (
        <SwiperSlide>Slide 1</SwiperSlide>
      ))}
    </Swiper>
  );
}
