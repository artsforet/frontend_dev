<script setup>
import MainSwiper from '@/components/HomeComponents/SwiperComponent/MainSwiper.vue'
import CurationSwiper from '@/components/HomeComponents/SwiperComponent/CurationSwiper.vue'
</script>

<template>
  <main class="main-container">
    <section>
    <MainSwiper class="main-swiper"/>
    </section>
    <section>
    <CurationSwiper class="curation-swiper"/>
    </section>
  </main>
</template>

<style>
.main-swiper {
  background-color: black;
}
</style>