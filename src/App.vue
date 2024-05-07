<script setup>
import HeaderMain from "@/components/HeaderMain/HeaderMain.vue";
import HeaderContent from "@/components/HeaderMain/HeaderContent.vue";
import { ref } from 'vue'
import SoundBar from '@/components/SoundBar.vue'

const user_modal_controller = ref(false);

const close_modal = () => {
  user_modal_controller.value = !user_modal_controller.value;
}
</script>
<template>
<div @click="$emit('close_modal')">
  <HeaderContent v-if="this.$route.path !== '/login'" @close_modal="close_modal"/>
  <HeaderMain />
  <router-view></router-view>
  <SoundBar />
</div>
</template>