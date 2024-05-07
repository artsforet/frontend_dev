<script setup>
import MainSwiper from '@/components/HomeComponents/SwiperComponent/MainSwiper.vue'
import CurationSwiper from '@/components/HomeComponents/SwiperComponent/CurationSwiper.vue'
import PdSelect from '@/components/HomeComponents/pdSelect.vue'
import AlbumSeries from '@/components/HomeComponents/AlbumSeries.vue'
</script>

<template>
  <main class="main-container">
    <section>
    <MainSwiper class="main-swiper"/>
    </section>
    <section>
    <CurationSwiper class="curation-swiper"/>
    </section>
    <section>
      <PdSelect />
    </section>
    <section>
      <AlbumSeries />
    </section>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
  </main>
</template>

<style>
.main-container {
  background-color: #000000;
}
.main-swiper {
  background-color: black;
}
</style>