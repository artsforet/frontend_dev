<script setup>
import HeaderMain from "@/components/HeaderMain/HeaderMain.vue";
import HeaderContent from "@/components/HeaderMain/HeaderContent.vue";
</script>
<template>
<div>
  <HeaderContent v-if="this.$route.path !== '/login'"/>
  <HeaderMain />
  <router-view></router-view>
</div>
</template>