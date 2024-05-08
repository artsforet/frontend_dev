<template>
  <div class="album-series-swiper-container">
    <h3 class="album-series-title"><router-link to="/"> 앨범 시리즈 </router-link></h3>
  <swiper
    @swiper="setThumbsSwiper"
    :slidesPerView="18"
    :modules="modules"
    class="album-series-swiper-button-swiper"
  >
    <swiper-slide class="swiper-button-custom-slide">
      브이로그
    </swiper-slide>
    <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      귀여운 음악
      </span>
    </swiper-slide>
    <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      코믹
      </span>
    </swiper-slide>
    <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      기쁨과 환희
      </span>
    </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      잔잔한 음악
      </span>
          </swiper-slide>
          <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      행사 음악
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      광고 음악
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      할리우드
      </span>
    </swiper-slide>
    <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      세계음악
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      인트로 음악
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      시사
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      공포 미스터리
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      배경음악 정석
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      힙합 R&B
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      배경음악 팩토리
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      테마
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      자장가
      </span>
      </swiper-slide>
      <swiper-slide class="swiper-button-custom-slide">
      <span class="swiper-button-custom">
      계절
      </span>
    </swiper-slide>
  </swiper>
  <br /><br /><br />
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
    :allowTouchMove=false
  >
    <swiper-slide style="background-color: black">
      <VlogView />
    </swiper-slide>

    <swiper-slide>
      <CuteView />
    </swiper-slide>

    <swiper-slide>
      <ComicView />
    </swiper-slide>

    <swiper-slide>
      <PleasureView />
    </swiper-slide>

    <swiper-slide>
      <CalmView />
    </swiper-slide>

    <swiper-slide>
      <EventView />
    </swiper-slide>

    <swiper-slide>
      <AdvertisementView />
    </swiper-slide>

    <swiper-slide>
      <HollyWood />
    </swiper-slide>

    <swiper-slide>
      <WorldmusicView />
    </swiper-slide>

    <swiper-slide>
      <IntorView />
    </swiper-slide>

    <swiper-slide>
      <PrewviewView />
    </swiper-slide>

    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </swiper>
  </div>
</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import VlogView from '@/components/HomeComponents/AlbumSeries/VlogView.vue'
import CuteView from '@/components/HomeComponents/AlbumSeries/CuteView.vue'
import ComicView from '@/components/HomeComponents/AlbumSeries/ComicView.vue'
import PleasureView from '@/components/HomeComponents/AlbumSeries/PleasureView.vue'
import CalmView from '@/components/HomeComponents/AlbumSeries/CalmView.vue'
import EventView from '@/components/HomeComponents/AlbumSeries/EventView.vue'
import AdvertisementView from '@/components/HomeComponents/AlbumSeries/AdvertisementView.vue'
import HollyWood from '@/components/HomeComponents/AlbumSeries/HollyWood.vue'
import WorldmusicView from '@/components/HomeComponents/AlbumSeries/WorldmusicView.vue'
import IntorView from '@/components/HomeComponents/AlbumSeries/intorView.vue'
import PrewviewView from '@/components/HomeComponents/AlbumSeries/PreviewView.vue'

export default {
  components: {
    IntorView,
    WorldmusicView,
    PrewviewView,
    HollyWood,
    AdvertisementView,
    EventView,
    CalmView,
    PleasureView,
    ComicView,
    CuteView,
    VlogView,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
};
</script>

<style>
.swiper-button-prev, .swiper-button-next {
}

</style>