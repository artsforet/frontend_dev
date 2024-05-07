<script setup>
import { computed, onMounted, ref, watch, watchEffect, defineEmits } from 'vue'
import { useStore } from "vuex";
import axios from 'axios'
import { onClickOutside } from '@vueuse/core'

const store = useStore();
const message = ref("로그인");
const modal_variable = ref(false);

const user_modal = () => {
  if (message.value !== "로그인") {
    modal_variable.value = !modal_variable.value;
  }
};

const auth = computed(() => store.state.authenticated);

watchEffect(async () => {
  try {
      const response = await axios.get("/auth/user");
      const login_display = response.data;
      if (login_display.email) {
        message.value = `${login_display.email}`;
      } else {
        message.value = "로그인";
      }
      await store.dispatch("setAuth", true);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
const logout = async (event) => {
  event.preventDefault();
  await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  modal_variable.value = !modal_variable.value;
  window.location.reload();
};

const props = defineProps([
  'user_modal_controller'
])
const close_modal = () => {
  modal_variable.value = !modal_variable.value;
}

</script>
<template>
  <div class="header-content">
    <span class="header-content-container">
      <span v-if="message === `로그인`" class="login-text">
        <router-link to="/login">
          {{ message }}
        </router-link>
      </span>
      <span class="message-event" @click="user_modal">
        <a v-if="message !== `로그인`"> {{ message }}</a>
      </span>
      <span v-if="modal_variable" class="user-modal-container">
        {{ message }} <br />
        <span>마이페이지</span> <br />
        <span>다운로드 내역</span> <br />
        <span>1:1 문의 내역</span> <br />
        <span @click="close_modal"><router-link to="/test">음악 업로드</router-link></span> <br />
        <span v-if="message.value !== `logout`"
          ><a href="#" class="modal-logout" @click="logout">LOGOUT</a></span
        >
      </span>
      <!--      <span><router-link to="/login">로그인</router-link></span>-->
      <span>비대면</span>
      <span>바우처 이용권</span>
      <span>사운드패드</span>
      <span>라이선스</span>
      <span>공지사항</span>
      <span>1:1문의</span>
      <span>FAQ</span>
    </span>

    <!--    <div style="color: white" v-if="message === `로그인`">-->
    <!--      <router-link to="/login">후우</router-link>-->
    <!--    </div>-->
    <!--    <span class="message-event">{{ message }}</span>-->
    <!--    <span v-else class="header-content-container">-->
    <!--      <router-link to="/login"> 로그인 </router-link>-->
    <!--    </span>-->
  </div>
</template>
<style>
.header-content {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: white;
  background-color: #202020;
  margin: 0 auto;
  text-align: center;
}

.header-content-container {
  color: white;
  text-align: center;
}

.header-content-container > a {
  color: white;
}

a {
  color: white;
}

.header-content-container > span {
  margin: 0 20px;
}

.user-modal-container {
  width: 300px;
  height: 500px;
  position: absolute;
  background-color: #333333;
  z-index: 1000;
  top: 50px;
  left: 200px;
  border-radius: 15px;
}

.login-text > a {
  text-decoration: none;
  margin-left: 20px;
  padding: 0;
  position: absolute;
}

.message-event {
  cursor: pointer;
  margin-left: 20px;
}

.modal-logout {
  text-decoration: none;
}
</style>
