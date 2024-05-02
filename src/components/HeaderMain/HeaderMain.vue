<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const message = ref("You are not logged in!");
    // const store = useStore();

    onMounted(async () => {
      // try {
      //   const response = await fetch("http://localhost:8000/api/user", {
      //     headers: { "Content-Type": "application/json" },
      //     credentials: "include",
      //   });
      //   const content = await response.json();
      //   message.value = `Hi ${content.name}`;
      //   await store.dispatch("setAuth", true);
      // } catch (e) {
      //   await store.dispatch("setAuth", false);
      // }
    });

    return {
      message,
    };
  },
};
</script>
<template>
  <div class="header-bottom_mask">
    <div class="header-bottom_content">
      <div class="header-inner_container header-inner_container--bottom">
        <div class="header-interact">
          <a class="header-logo" href="/"> GG </a>
          <form class="header_search-area">
            <!--            <input type="hidden" name="searchtype" value="track" />-->
            <div class="header_search-wrap">
              <input
                class="header_search-input"
                id="search-keyword"
                type="search"
                maxlength="50"
                name="searchtext"
                placeholder="어떤 음악을 찾고 계신가요?"
                value=""
              />
              <!--              <input-->
              <!--                class="header_search-button header_search-button&#45;&#45;submit"-->
              <!--                type="submit"-->
              <!--              />-->
              <input
                class="header_search-button header_search-button--reset"
                type="reset"
                value="취소"
              />
            </div>
          </form>
        </div>
        <div class="header-shortcut_area">
          <div class="header-shortcut">
            <div class="shortcut-header">
              <a class="shortcut-link" href="#">사운드 팩토리</a>
            </div>
            <div class="shortcut-item_list">
              <div class="shortcut-item">
                <router-link to="/soundfactory/song" class="shortcut-link">곡</router-link>
              </div>
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">앨범</a>
              </div>
            </div>
          </div>
          <div class="header-shortcut">
            <div class="shortcut-header">
              <a class="shortcut-link" href="#">SFX</a>
            </div>
            <div class="shortcut-item_list">
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">효과음</a>
              </div>
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">폴리사운드</a>
              </div>
            </div>
          </div>
          <div class="header-shortcut">
            <div class="shortcut-header">
              <a class="shortcut-link" href="#">예술숲</a>
            </div>
            <div class="shortcut-item_list">
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">곡</a>
              </div>
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">NCSOUND</a>
              </div>
            </div>
          </div>
          <div class="header-shortcut">
            <div class="shortcut-header">
              <a class="shortcut-link" href="#">무료배포</a>
            </div>
            <div class="shortcut-item_list">
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">사운드 팩토리</a>
              </div>
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">공유마당</a>
              </div>
            </div>
          </div>
          <div class="header-shortcut">
            <div class="shortcut-header">
              <div class="shortcut-link">플레이리스트</div>
            </div>
            <div class="shortcut-item_list">
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">큐레이션</a>
              </div>
              <div class="shortcut-item">
                <a class="shortcut-link" href="#">방금그곡</a>
              </div>
            </div>
          </div>
          <div class="shortcut-header_bottom_border"></div>
        </div>
        <div class="header-mobile_area">
          <div class="header-open_interaction" data-menu="search">
            <i class="header-search_toggle_icon"></i>
          </div>
          <div class="header-open_interaction" data-menu="menu">
            <i class="header-hamburger_menu_icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.header-ground_container {
  background-color: #202020;
  height: 130px;
  color: #ffffff;
  z-index: 20;
  margin: 0;
}

.header-inner_container {
  max-width: calc(100% - 40px);
  width: 1197px;
  margin: 0 auto;
}

.header-inner_container--top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  gap: 25px;
  font-size: 15px;
  user-select: none;
}

.header-inner_container--top > * {
  white-space: nowrap;
}

.header-top_menu {
  padding-bottom: 2px;
}

.header-user_info {
  position: relative;
  display: flex;
  height: 100%;
}

.header-user_header {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.header-user_name {
  padding-bottom: 2px;
}

.header-locale-select,
.header-user_menu {
  position: absolute;
  width: 130px;
  padding: 8px 0;
  background-color: #333333;
  border-radius: 10px;
  z-index: 11;
  right: 0;
  top: 100%;
  margin-top: 10px;
  animation: header_menu_open 300ms cubic-bezier(0.95, 0.05, 0.95, 0.05) 1;
}

.header-user_menu {
  width: 280px;
}

@keyframes header_menu_open {
  from {
    overflow: hidden;
    max-height: 0;
  }

  to {
    overflow: hidden;
    max-height: 1000px;
  }
}

.header-locale-select--hidden {
  display: none;
}

.header-user_info:not(.header-user_info--open) .header-user_menu {
  display: none;
}

.user_menu-user_info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
}

.user_menu-user_info,
.user_menu-menu_item {
  padding: 8px 20px;
}

.user_menu-profile {
  width: 30px;
  height: 30px;
}

.user_menu-menu_item {
  font-size: 13px;
  color: #bbbbbb;
}

.user_menu-menu_link {
  background-color: transparent;
  cursor: pointer;
}

.header-bottom_mask {
  position: relative;
  height: 100px;
  background-color: #000000;
  z-index: 10;
}

.header-bottom_content {
  position: absolute;
  width: 100%;
  height: fit-content;
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

.header-inner_container--bottom {
  display: grid;
  grid-template-areas:
    "interact shortcut"
    "blank shortcut";
  grid-template-columns: auto 51%;
  grid-template-rows: 100px auto;
  column-gap: 20px;
}

.header-interact {
  grid-area: interact;
  display: flex;
  align-items: center;
  gap: max(10%, 15px);
}

.header-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #f3be38;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
}

.header-shortcut_area {
  grid-area: shortcut;
  display: flex;
  align-items: stretch;
  position: relative;
  white-space: nowrap;
}

.header-shortcut {
  width: 20%;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  transition: max-height 250ms cubic-bezier(0.05, 0.95, 0.05, 0.95);
}

.header-shortcut_area:hover .header-shortcut {
  max-height: 1000px;
  transition: max-height 250ms cubic-bezier(0.95, 0.05, 0.95, 0.05);
}

.shortcut-link {
  flex: 1;
  text-align: center;
  padding: 6px 0;
  transition: color 100ms;
  color: white;
  text-decoration: none;
}

.shortcut-link:hover {
  color: #f3be38;
}

.shortcut-header {
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

.shortcut-header::after,
.shortcut-header::before {
  content: "";
  position: absolute;
  display: block;
  height: 3px;
  width: 3px;
  background-color: #000000;
  bottom: 0;
  z-index: 1;
}

.shortcut-header::before {
  left: 0;
}

.shortcut-header::after {
  right: 0;
}

.shortcut-header_bottom_border {
  position: absolute;
  width: 20%;
  height: 0;
  top: 97px;
  right: 0;
  background-color: #f3be38;
  transition: right 150ms;
  pointer-events: none;
  animation: none;
}

.header-shortcut_area:hover .shortcut-header_bottom_border {
  height: 3px;
  animation: bottom_border_show 150ms;
}

@keyframes bottom_border_show {
  from {
    height: 0;
  }

  99.999% {
    height: 0;
  }

  to {
    height: 3px;
  }
}

.header-shortcut:nth-child(1):hover ~ .shortcut-header_bottom_border {
  right: 80%;
}

.header-shortcut:nth-child(2):hover ~ .shortcut-header_bottom_border {
  right: 60%;
}

.header-shortcut:nth-child(3):hover ~ .shortcut-header_bottom_border {
  right: 40%;
}

.header-shortcut:nth-child(4):hover ~ .shortcut-header_bottom_border {
  right: 20%;
}

.shortcut-item_list {
  flex: 1;
  border-left: 0.5px solid rgba(245, 245, 245, 0.5);
  margin: 11px 0;
}

.header-shortcut:last-child .shortcut-item_list {
  border-right: 0.5px solid rgba(245, 245, 245, 0.5);
}

.shortcut-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
}

.header-arrow_icon {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 3px;
  width: 14px;
  height: 7px;
  --animation-duration: 300ms;
}

.header-arrow_icon::before {
  content: "";
  display: block;
  width: 9.9px;
  height: 9.9px;
  border: 2px solid #f3be38;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(45deg);
  transition: transform var(--animation-duration);
  animation: none;
  border-radius: 2px;
}

.header-locale--open .header-arrow_icon::before,
.header-user_info--open .header-arrow_icon::before {
  transform: translate(-50%, 2px) rotateZ(45deg);
}

.header_search-area {
  position: relative;
}

.header_search-wrap {
  position: relative;
  border-bottom: 1px solid #f3be38;
}

.header_search-input {
  width: 100%;
  background-color: transparent;
  color: #bbbbbb;
  height: 31px;
  font-size: 18px;
  padding-left: 24px;
  padding-right: 20px;
  line-height: 14px;
  border-bottom: 1px solid #f9db54;
  border-left: none;
  border-right: none;
  border-top: none;
}

.header_search-input:placeholder-shown {
  padding-right: 0;
}

.header_search-button {
  position: absolute;
  height: 31px;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  background-color: transparent;
  cursor: pointer;
}

.header_search-button--submit {
  left: 0;
  width: 18px;
  text-indent: -9999px;
}

.header_search-button--reset {
  right: 0;
  width: 14px;
  font-size: 14px;
  text-indent: -9999px;
}

.header_search-input:placeholder-shown ~ .header_search-button--reset {
  display: none;
}

.header-locale {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.header-locale-icon--small {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.header-locale-icon--large {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.header-locale-current {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 5px;
  cursor: pointer;
}

.header-locale-text {
  color: #ffffff;
  padding-bottom: 2px;
}

.header-locale-text--small {
  font-size: 15px;
}

.header-locale-text--large {
  font-size: 17px;
}

.header-locale-item {
  display: grid;
  padding: 8px 20px;
  grid-template-columns: 24px auto;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}

.header-locale-item:hover {
  background-color: #484848;
}

.beta-icon {
  padding: 2px 4px;
  margin-left: 6px;
  border-radius: 2px;
  border: 1px solid #f3be38;
  color: #f3be38;
  line-height: 1.1;
  font-size: 12px;
}

.beta-icon::before {
  content: "BETA";
}

.header-mobile_area {
  display: flex;
  column-gap: 16px;
}

.header-open_interaction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}

.header-search_toggle_icon {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
}

.header-search_toggle_icon::before,
.header-search_toggle_icon::after {
  content: "";
  display: block;
}

.header-search_toggle_icon:not(.header-search_toggle_icon--active)::before {
  width: 300px;
  font-size: 18px;
  background-color: transparent;
  line-height: 14px;
  border-bottom: 1px solid #f9db54;
  border-left: none;
  border-right: none;
}

.header-search_toggle_icon:not(.header-search_toggle_icon--active)::after {
  position: absolute;
  width: 4px;
  height: 10px;
  background-color: #ffffff;
  right: 0;
  bottom: 2.5px;
  transform-origin: right bottom;
  transform: rotateZ(-45deg);
}

.header-search_toggle_icon--active::before,
.header-search_toggle_icon--active::after {
  position: absolute;
  width: 4px;
  height: 28px;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
}

.header-search_toggle_icon--active::before {
  transform: translate(-50%, -50%) rotateZ(-45deg);
}

.header-search_toggle_icon--active::after {
  transform: translate(-50%, -50%) rotateZ(45deg);
}

.header-hamburger_menu_icon {
  --stroke: 3px;
  --color: #ffffff;
  display: flex;
  align-items: center;
  width: 22px;
  height: 21px;
  border-top: var(--stroke) solid var(--color);
  border-bottom: var(--stroke) solid var(--color);
}

.header-hamburger_menu_icon::before {
  content: "";
  display: block;
  width: 100%;
  height: var(--stroke);
  background-color: var(--color);
}

.header-update_wrap {
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  height: 20px;
}

.header-update_inner {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  will-change: bottom, flex-direction;
  animation: 10000ms updateMove 4000ms linear infinite;
}

@keyframes updateMove {
  0% {
    bottom: 0;
    flex-direction: column;
  }

  10% {
    bottom: -100%;
    flex-direction: column;
  }

  10.00001% {
    bottom: 0;
    flex-direction: column-reverse;
  }

  50% {
    bottom: 0;
    flex-direction: column-reverse;
  }

  60% {
    bottom: -100%;
    flex-direction: column-reverse;
  }

  60.00001% {
    bottom: 0;
    flex-direction: column;
  }

  100% {
    bottom: 0;
    flex-direction: column;
  }
}

.header-update_area {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #ffffff;
  font-size: 12px;
  min-width: 0;
}

.header-update_type {
  padding: 2px 6px 3px;
  border-radius: 3px;
  background-color: #f3be38;
}

.header-update_title {
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/*.header-notice_wrap {*/
/*    background-color : #ffffff;*/
/*    padding          : 0 24px;*/
/*}*/

/*.header-notice {*/
/*    max-width   : 1197px;*/
/*    margin      : 0 auto;*/
/*    height      : 60px;*/
/*    display     : flex;*/
/*    align-items : center;*/
/*}*/

/*.header-notice_type {*/
/*    font-size   : 18px;*/
/*    color       : #000000;*/
/*    font-weight : 700;*/
/*    flex-shrink : 0;*/
/*}*/

/*.header-notice_title {*/
/*    font-size     : 16px;*/
/*    color         : #414141;*/
/*    margin-left   : 50px;*/
/*    flex-grow     : 1;*/
/*    text-overflow : ellipsis;*/
/*    overflow      : hidden;*/
/*    white-space   : nowrap;*/
/*}*/

.side_menu-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0;
  transition: width 300ms;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  color: #ffffff;
  perspective: 2000px;
  perspective-origin: 0 200px;
}

.side_menu-container--visible {
  width: 100%;
}

.side_menu-wrap {
  width: min-content;
  height: 100%;
  min-width: 300px;
  background-color: #000000;
  top: 0;
  position: relative;
  transform-origin: left;
  transform: rotateY(0);
  transition: transform 300ms;
}

.side_menu-container--visible .side_menu-wrap {
  transform: rotateY(0);
}

.side_menu-wrap::before,
.side_menu-wrap::after {
  content: "";
  display: block;
  position: absolute;
  top: 32px;
  left: 320px;
  height: 3px;
  width: 20px;
  background-color: #ffffff;
  pointer-events: none;
  touch-action: none;
}

.side_menu-wrap::before {
  transform: rotateZ(-45deg);
}

.side_menu-wrap::after {
  transform: rotateZ(45deg);
}

.side_menu-area {
  width: 100%;
  height: 100%;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  overflow-x: visible;
  overflow-y: scroll;
}

.side_menu-user_info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
}

.side_menu-user_profile {
  width: 30px;
  border-radius: 99px;
}

.side_menu-user_greeting {
  display: flex;
}

.user_greeting-name[data-lang="en"] {
  order: 2;
}

.side_menu-user_arrow {
  display: block;
  width: 7.5px;
  height: 13px;
  overflow-y: hidden;
  position: relative;
}

.side_menu-user_arrow::before {
  content: "";
  display: block;
  width: 9px;
  height: 9px;
  position: absolute;
  border: 2px solid #bbbbbb;
  transform-origin: left top;
  transform: translateX(0.5px) rotateZ(45deg);
  border-radius: 2px;
}

.side_menu-shortcut_list {
  display: flex;
  flex-direction: column;
}

.side_menu-shortcut_item {
  font-size: 16px;
  line-height: 1.5;
}

.side_menu-shortcut_item--header {
  width: 100%;
  border-bottom: 0.5px solid #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
  margin-bottom: 5px;
  position: relative;
}

.side_menu-shortcut_item--header:not(:first-child) {
  margin-top: 15px;
}

.side_menu-button_area {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.side_menu-button {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbbbbb;
  font-size: 17px;
  background-color: transparent;
}

.side_menu-menu_list {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 24px;
}

@media (min-width: 768.02px) {
  .header-mobile_area {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-ground_container {
    height: fit-content;
  }

  .header-inner_container--top {
    display: none;
  }

  .header-locale {
    align-self: start;
  }

  .header-locale-text {
    color: #484848;
  }

  .header-locale-select {
    background-color: #ffffff;
    right: unset;
    left: 0;
    top: unset;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .header-locale-item {
    padding: 5px 0 5px 12px;
    grid-template-columns: 16px auto;
  }

  .header-locale-item:hover {
    background-color: #e2e2e2;
  }

  .header-locale-current .header-locale-text {
    color: #ffffff;
  }

  .header-locale-current {
    background-position: 98% 50%;
  }

  .header-bottom_mask,
  .header-bottom_content,
  .header-inner_container--bottom {
    height: 64px;
    min-height: 64px;
    margin: 0;
  }

  .header-bottom_content {
    overflow: unset;
  }

  .header-inner_container--bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header-logo_img {
    width: 162px;
  }

  .header_search-area {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0 20px 20px;
    background-color: #000000;
    transform-origin: top center;
    transform: rotateX(90deg);
    transition: transform 200ms;
  }

  .header_search-area--open {
    transform: none;
  }

  .header_search-button--reset {
    background-image: none;
    width: min-content;
    text-indent: 0;
  }

  .header-shortcut_area {
    display: none;
  }

  .header-arrow_icon {
    transform: rotateX(180deg);
  }

  .header-update_area {
    display: none;
  }

  .header-notice_title {
    margin-left: 20px;
  }
}
</style>

<!--<template>-->
<!--  <nav @mouseleave="isHovered = false">-->
<!--    <div class="header">-->
<!--      <div class="menu">-->
<!--        <router-link-->
<!--          to="/"-->
<!--          style="-->
<!--            color: white;-->
<!--            margin-right: 50px;-->
<!--            text-decoration: none;-->
<!--            font-size: 20px;-->
<!--          "-->
<!--          >LOGO</router-link-->
<!--        >-->
<!--        <input-->
<!--          type="text"-->
<!--          class="header-main-input"-->
<!--          placeholder="어떤 음악을 찾고 계신가요?"-->
<!--        />-->
<!--        <span class="submenu" @mouseover="isHovered = true">-->
<!--          <span class="header-main-list"-->
<!--            ><router-link to="/"> 사운드 팩토리</router-link></span-->
<!--          >-->
<!--          <span class="header-main-list"-->
<!--            ><router-link to="/jukebox"> SFX </router-link></span-->
<!--          >-->
<!--          <span class="header-main-list"-->
<!--            ><router-link to="/login"> NCSOUND </router-link></span-->
<!--          >-->
<!--          <span class="header-main-list"-->
<!--            ><router-link to="/login"> 무료배포 </router-link></span-->
<!--          >-->
<!--          <span class="header-main-list"-->
<!--            ><router-link to="/login"> 플레이리스트 </router-link></span-->
<!--          >-->
<!--        </span>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-if="isHovered" @mouseover="isHovered = true" class="submenu-content">-->
<!--      <div style="margin-left: 410px">-->
<!--        <span class="header-main-list"-->
<!--          ><router-link to="/"> 사운드 팩토리</router-link></span-->
<!--        >-->
<!--        <span class="header-main-list"-->
<!--          ><router-link to="/jukebox"> SFX </router-link></span-->
<!--        >-->
<!--        <span class="header-main-list"-->
<!--          ><router-link to="/login"> NCSOUND </router-link></span-->
<!--        >-->
<!--        <span class="header-main-list"-->
<!--          ><router-link to="/login"> 무료배포 </router-link></span-->
<!--        >-->
<!--        <span class="header-main-list"-->
<!--          ><router-link to="/login"> 플레이리스트 </router-link></span-->
<!--        >-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isHovered: false,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--body,-->
<!--nav {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--.header {-->
<!--  line-height: 100px;-->
<!--  background-color: #333;-->
<!--  color: #fff;-->
<!--  padding: 10px;-->
<!--  font-size: 18px;-->
<!--  font-weight: 600;-->
<!--  text-align: center;-->
<!--}-->

<!--.menu {-->
<!--  cursor: pointer;-->
<!--}-->

<!--.submenu-content {-->
<!--  width: 100%;-->
<!--  height: 100px;-->
<!--  color: #fff;-->
<!--  animation: 0.5s fadeIn;-->
<!--  line-height: 100px;-->
<!--}-->

<!--.submenu-content {-->
<!--  text-align: center;-->
<!--  background-color: rgba(0, 0, 0, 0.8);-->
<!--  font-weight: 600;-->
<!--}-->

<!--.submenu-content > div > .header-main-list {-->
<!--  font-size: 18px;-->
<!--}-->
<!--@keyframes fadeIn {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->
<!--@media screen and (max-width: 1470px) {-->
<!--  body {-->
<!--    width: 1920px;-->
<!--  }-->
<!--}-->

<!--.header-main-list > a {-->
<!--  color: white;-->
<!--  text-decoration: none;-->
<!--  margin: 0 20px;-->
<!--}-->

<!--.container-fluid > .navbar-brand {-->
<!--  color: white;-->
<!--}-->
<!--.navbar-nav > .nav-item > a {-->
<!--  color: white;-->
<!--}-->

<!--.header-main-input {-->
<!--  width: 300px;-->
<!--  font-size: 18px;-->
<!--  background-color: transparent;-->
<!--  line-height: 14px;-->
<!--  border-bottom: 1px solid #f9db54;-->
<!--  border-left: none;-->
<!--  border-right: none;-->
<!--}-->

<!--.header-main-input:focus {-->
<!--  outline: none;-->
<!--  color: white;-->
<!--}-->
<!--</style>-->
<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <nav class="header-main">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="header-main-content">&ndash;&gt;-->
<!--&lt;!&ndash;        <div style="color: white; text-decoration: none; margin-right: 50px">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link&ndash;&gt;-->
<!--&lt;!&ndash;            to="/"&ndash;&gt;-->
<!--&lt;!&ndash;            style="&ndash;&gt;-->
<!--&lt;!&ndash;              color: white;&ndash;&gt;-->
<!--&lt;!&ndash;              margin-right: 50px;&ndash;&gt;-->
<!--&lt;!&ndash;              text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;              font-size: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;            "&ndash;&gt;-->
<!--&lt;!&ndash;            >LOGO</router-link&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;          &lt;!&ndash;      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <span @mouseover="isHovered = true" @mouseleave="isHovered = false">&ndash;&gt;-->
<!--&lt;!&ndash;            <input&ndash;&gt;-->
<!--&lt;!&ndash;              type="text"&ndash;&gt;-->
<!--&lt;!&ndash;              class="header-main-input"&ndash;&gt;-->
<!--&lt;!&ndash;              placeholder="어떤 음악을 찾고 계신가요?"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="header-main-list"&ndash;&gt;-->
<!--&lt;!&ndash;              ><router-link to="/"> 사운드 팩토리</router-link></span&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="header-main-list"&ndash;&gt;-->
<!--&lt;!&ndash;              ><router-link to="/jukebox"> SFX </router-link></span&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="header-main-list"&ndash;&gt;-->
<!--&lt;!&ndash;              ><router-link to="/login"> NCSOUND </router-link></span&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="header-main-list"&ndash;&gt;-->
<!--&lt;!&ndash;              ><router-link to="/login"> 무료배포 </router-link></span&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="header-main-list"&ndash;&gt;-->
<!--&lt;!&ndash;              ><router-link to="/login"> 플레이리스트 </router-link></span&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;          </span>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div v-if="isHovered" class="submenu">Submenu content here</div>&ndash;&gt;-->
<!--&lt;!&ndash;    </nav>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;  <Transition>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  &lt;!&ndash;  </Transition>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<style>&ndash;&gt;-->
<!--&lt;!&ndash;@media screen and (max-width: 1470px) {&ndash;&gt;-->
<!--&lt;!&ndash;  body {&ndash;&gt;-->
<!--&lt;!&ndash;    width: 1920px;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;.header-main {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 100px;&ndash;&gt;-->
<!--&lt;!&ndash;  line-height: 80px;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: black;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.header-main-list > a {&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;  font-size: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;  font-weight: 600;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.container-fluid > .navbar-brand {&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;.navbar-nav > .nav-item > a {&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;.d-flex {&ndash;&gt;-->
<!--&lt;!&ndash;  height: 50px;&ndash;&gt;-->
<!--&lt;!&ndash;  margin-top: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.header-main-input {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: transparent;&ndash;&gt;-->
<!--&lt;!&ndash;  line-height: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;  border-bottom: 1px solid #f9db54;&ndash;&gt;-->
<!--&lt;!&ndash;  border-left: none;&ndash;&gt;-->
<!--&lt;!&ndash;  border-right: none;&ndash;&gt;-->
<!--&lt;!&ndash;  margin-right: 50px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.header-main-input:focus {&ndash;&gt;-->
<!--&lt;!&ndash;  outline: none;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.header-main-content {&ndash;&gt;-->
<!--&lt;!&ndash;  max-width: 1920px;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.v-enter-active,&ndash;&gt;-->
<!--&lt;!&ndash;.v-leave-active {&ndash;&gt;-->
<!--&lt;!&ndash;  transition: opacity 0.3s ease-in;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.v-enter-from,&ndash;&gt;-->
<!--&lt;!&ndash;.v-leave-to {&ndash;&gt;-->
<!--&lt;!&ndash;  opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.submenu {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 500px;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #555;&ndash;&gt;-->
<!--&lt;!&ndash;  color: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;  position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
<!--&lt;!&ndash;<script setup>&ndash;&gt;-->
<!--&lt;!&ndash;import { ref } from "vue";&ndash;&gt;-->

<!--&lt;!&ndash;const isHovered = ref(false);&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<script setup></script>
