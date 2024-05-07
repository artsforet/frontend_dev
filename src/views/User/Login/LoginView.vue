<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import router from '@/router/index.js'
import store from '@/store/index.js'

const email = ref();
const password = ref();
const pushRegister = () => {
  router.push("/register");
};
const submit = async (event) => {
  event.preventDefault();
    const { data }  = await axios.post('/auth/login', {
      email: email.value,
      password: password.value,
    }, { withCredentials: true });

    // redirect.value = true;
    // router.push('/')
    // 로그인 유저 정보 받아오기
  localStorage.setItem('token', data.token);
  axios.defaults.headers.common['Authorization'] = `${data.token}`;
  const user = JSON.parse(localStorage.getItem('user'));

// 'user' 값이 존재하고 true로 설정하려는 경우에만 변경합니다.
  if (user !== null && user !== true) {
    localStorage.setItem('user', JSON.stringify(true)); // 'user' 값을 true로 설정합니다.
  }
  router.push('/')
    //   const response = await axios.get("/api/auth/user", {
    //     // headers: { "Content-Type": "application/json" },
    //     // credentials: "include",
    //   });
    //   const content = await response.data;
    //   if (content.email) {
    //     this.email = `${content.email}`;
    //   } else {
    //     this.email = "로그인";
    //   }
    //   await store.dispatch("setAuth", true);
    // // } catch (e) {
    // //   await store.dispatch("setAuth", false);
    // // }
    //
    //  const auth = computed(() => store.state.authenticated);
}
const isLoggedIn = ref(false); // 로그인 페이지에서 헤더를 보여줄지 여부를 결정하는 ref

// const auth = computed(() => store.state.authenticated);
// await router.push("/")
</script>

<template>
  <div class="login-container-form">
  <form class="login-all-form" @submit.prevent="submit">
      <h1 class="login-title"><router-link to="/">로그인</router-link></h1>
      <div class="login-form">
      <br /><br /><br />
      <div class="login-wrap">
        <div class="login-form-interior-layout">
          <div class="login-layout-form">
            <div class="login-form-style-with">
            <span class="login-form-content">아이디</span>
            <br /><br />
              <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Email"
                required
            />
            <br /> <br />
            <span class="login-form-content">비밀번호</span>
            <br /><br />
            <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
            />
            <br /><br /><br />
            <button class="login-submit" type="submit">로그인</button>
            <br /><br />
            <div class="login-sub-function">
              <span class="user-save">
                <router-link to="/"> 게정 정보 저장</router-link>
              </span>
              &nbsp; &nbsp; &nbsp;
              <span class="user-find">
                <router-link to="/"> 아이디/비밀번호 찾기 </router-link>
              </span>
            </div>
            <br /><br />
              <div class="register-router-form">
                <router-link to="/register">
                  아직 회원이 아니신가요? <span> 회원가입 </span>
                </router-link>
              </div>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
      </div>
  </form>
  </div>
</template>

<style scoped>
@import "@/assets/User/LoginView.css";
</style>


<!-- LOGIN WRAP -->
<!--background-color: #333;-->


<!--background-color: #202020;-->
<!--background-color: #f3be38;-->
<!--background-color: #484848;-->
