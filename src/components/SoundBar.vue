<template>
  <div>
    <!-- 하단 고정 버튼 -->
    <div class="playlist-toggle">
      <button class="toggle-button" @click="toggleExpand">{{ isExpanded ? 'Close Playlist' : 'Open Playlist' }}</button>
    </div>

    <!-- 우측 모달 창 -->
    <transition name="slide-fade">
      <div class="playlist-modal" v-if="isExpanded">
        <h2>Your Playlist</h2>
        <ul>
          <li v-for="(song, index) in playlist" :key="index">{{ song.name }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    ...mapState(['playlist']),
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchPlaylist']),
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      if (this.isExpanded) {
        this.fetchPlaylist();
      }
    },
  },
  mounted() {
    this.fetchUser();
    this.fetchPlaylist();
  },
};
</script>

<style scoped>
/* 하단 고정 버튼 스타일 */
.playlist-toggle {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  transition: height 0.3s ease-in-out;
  background-color: #0c0c0c;
  z-index: 1200; /* 다른 요소 위에 표시되도록 설정 */
}

.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1001; /* 버튼이 항상 최상위에 표시되도록 설정 */
}

/* 우측 모달 창 스타일 */
.playlist-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background-color: black;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1001;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  color: white;
}

.playlist-modal h2 {
  margin-top: 0;
}

.playlist-modal ul {
  list-style: none;
  padding: 0;
}

.playlist-modal li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

/* 애니메이션 스타일 */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
