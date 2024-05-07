<template>
  <div class="main-swiper">
    <swiper
      :pagination="pagination"
      :navigation="true"
      :modules="modules"
      class="mainSwiper"
    >
      <swiper-slide><img src="https://www.bgmfactory.com/storage/img/banners/pc/20240405_pc.jpg?ver=2024-05-0417:31:32" /></swiper-slide>
      <swiper-slide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhRhRqRC9qwzydxpKUl9mQ4x7Qn882fVxBYk3yVEShQ&s" /></swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "@/assets/css/home/main-swiper.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
      },
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  background-color: black;
}
.swiper-wrapper {
  width: 900px;
}

</style>