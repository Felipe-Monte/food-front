import { Container } from './styles';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { FoodCard } from '../FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider({ title, dishes }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <FoodCard dish={dish} /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>

  );
};