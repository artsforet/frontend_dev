<template>
  <swiper
    ref="{swiperRef}"
    :slidesPerView="7"
    :spaceBetween="10"
    :navigation="true"
    :modules="modules"
    :freeMode="true"
    class="vlog-home-swiper"
  >
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <br />
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
    </swiper-slide>
    <swiper-slide style="color: black; width:200px;height: 300px; flex-wrap: wrap">
      <img src="https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900" alt="이미지1"/>
      <div style="color:white">
        Hello World
      </div>
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

<style>
.vlog-home-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
.vlog-home-swiper > .swiper-wrapper {
  margin-right: 500px;
}

.vlog-home-swiper > .swiper-wrapper > .swiper-slide > img {

  display: block;
  object-fit: cover;
}
</style>