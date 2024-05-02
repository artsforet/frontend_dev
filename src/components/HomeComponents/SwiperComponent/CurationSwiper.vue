<template>
  <div class="curation-swiper">
    <!-- 스와이퍼 컨테이너 -->
    <div class="curation-title-content">
      <span class="curation-title">
        <router-link to="/">큐레이션</router-link>
      </span>
      <span class="curation-page-push">더보기</span>
    </div><Swiper
      :slides-per-view="5.5"
      :centered-slides="false"
      :space-between="30"
      :pagination="{ type: 'fraction' }"
      :navigation="true"
      class="curationSwiper"
    >
      <!-- 스와이퍼 슬라이드 -->
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </Swiper>

    <!-- 스크롤바 -->
    <div class="custom-scrollbar"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "@/assets/css/home/curation-swiper.css";
import "@/assets/css/home/curation-layout.css";

// import required modules
import { Scrollbar } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar],
    };
  },
  mounted() {
    // 스와이퍼와 스크롤바를 초기화합니다.
    // this.initSwiper();
  },
  methods: {
    // initSwiper() {
    //   // 스와이퍼 초기화
    //   // 스와이퍼 초기화
    //   this.swiperRef = new Swiper(".curationSwiper", {
    //     slidesPerView: 5.5,
    //     centeredSlides: false,
    //     spaceBetween: 30,
    //     pagination: {
    //       type: "fraction",
    //     },
    //     navigation: true,
    //   });
    //
    //   // 스크롤바 위치 조정
    //   const scrollbar = document.querySelector(".custom-scrollbar");
    //   const swiperContainer = document.querySelector(".curation-swiper");
    //
    //   if (scrollbar && swiperContainer) {
    //     scrollbar.style.top = swiperContainer.offsetTop + "px";
    //     scrollbar.style.left =
    //       swiperContainer.offsetLeft + swiperContainer.offsetWidth + 20 + "px"; // 원하는 위치로 조정합니다.
    //   }
    // },
  },
};
</script>
<!--<template>-->
<!--  <div class="curation-swiper">-->
<!--    <swiper-->
<!--      ref="{swiperRef}"-->
<!--      :slidesPerView="5.5"-->
<!--      :centeredSlides="false"-->
<!--      :spaceBetween="30"-->
<!--      :pagination="{-->
<!--        type: 'fraction',-->
<!--      }"-->
<!--      :navigation="true"-->
<!--      :scrollbar="{-->
<!--        hide: false,-->
<!--      }"-->
<!--      space-between="10"-->
<!--      :modules="modules"-->
<!--      class="curationSwiper"-->
<!--    >-->
<!--      <swiper-slide>Slide 1</swiper-slide>-->
<!--      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>-->
<!--      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>-->
<!--      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>-->
<!--      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>-->
<!--    </swiper>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--// Import Swiper Vue.js components-->
<!--import { Swiper, SwiperSlide } from "swiper/vue";-->

<!--// Import Swiper styles-->
<!--import "swiper/css";-->
<!--import "swiper/css/scrollbar";-->
<!--import "@/assets/css/swiper/curation-swiper.css";-->

<!--// import required modules-->
<!--import { Scrollbar } from "swiper/modules";-->

<!--export default {-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  setup() {-->
<!--    return {-->
<!--      modules: [Scrollbar],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
