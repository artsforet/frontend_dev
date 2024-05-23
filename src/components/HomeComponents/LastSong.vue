<template>
  <div class="last-song-swiper-container">
    <div class="last-song-swiper-wrapper">
      <!-- 스와이퍼 컨테이너 -->
      <div class="last-song-title-content">
        <br /><br /><br /><br />
        <div class="curation-title">
          <span class="last-song-page-title"><router-link to="/">큐레이션</router-link></span>
           <span class="last-song-page-push">더보기</span>
        </div>
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="5"
        :centered-slides="false"
        :pagination="{ type: 'fraction' }"
        :navigation="true"
        :scrollbar="{ draggable: true }"
        class="last-song-swiper"
      >
        <!-- 스와이퍼 슬라이드 -->
        <swiper-slide>
          <img loading="lazy" class="broadcast_item-background" src="https://www.bgmfactory.com/storage/broadcast/258.jpg" alt="">          <br />
          <div style="color: white; top:0; margin:0; padding:0; width: 222px ">Hello World</div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://images.saramingig.co.kr/product/t/2/y/t2ylFhWuQLtV7SO.jpeg/o2j/resize/900"/>
        </swiper-slide>
        <swiper-slide>
          <img src="https://images.saramingig.co.kr/product/t/2/y/t2ylFhWuQLtV7SO.jpeg/o2j/resize/900"/>
        </swiper-slide>
        <swiper-slide>
          <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://images.saramingig.co.kr/product/t/2/y/t2ylFhWuQLtV7SO.jpeg/o2j/resize/900"/>
        </swiper-slide>
        <swiper-slide>
          <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://images.saramingig.co.kr/product/t/2/y/t2ylFhWuQLtV7SO.jpeg/o2j/resize/900"/>
        </swiper-slide>
        <swiper-slide>
          <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://images.saramingig.co.kr/product/t/2/y/t2ylFhWuQLtV7SO.jpeg/o2j/resize/900"/>
        </swiper-slide>
        <swiper-slide>
          <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" />
        </swiper-slide>
      </Swiper>
      <!-- 스크롤바 -->
      <!--    <div class="custom-scrollbar"></div>-->
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "@/assets/css/home/lastsong-swiper.css";

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
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
<style>
@import "@/assets/css/home/curation-swiper.css";
</style>
<!--<style>-->
<!--.curation-swiper-container {-->
<!--  width: 100%;-->
<!--  text-align: center;-->
<!--}-->

<!--.curation-swiper-wrapper {-->
<!--  text-align: center;-->
<!--}-->
<!--.swiper {-->
<!--  width: 960px;-->
<!--}-->
<!--</style>-->
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
