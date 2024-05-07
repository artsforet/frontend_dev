<template>
  <swiper
    ref="{swiperRef}"
    :slidesPerView="7"
    :centeredSlides="true"
    :spaceBetween="10"
    :navigation="true"
    :modules="modules"
    class="vlog-home-swiper"
  >
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
    <swiper-slide style="color: black">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
    </swiper-slide>
  </swiper>

  <p class="append-buttons"></p>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
