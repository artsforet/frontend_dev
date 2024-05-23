<template>
  <div>
    <img :src="music.imageUrl" alt="Music Cover">
    <audio :src="music.audioUrl" controls></audio>
    <!-- 다른 음악 정보 표시 -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      music: {},
    };
  },
  created() {
    this.fetchMusic();
  },
  methods: {
    fetchMusic() {
      const musicId = this.$route.params.id;
      axios.get(`/music/13`)
        .then(response => {
          this.music = response.data;
        })
        .catch(error => {
          console.error('Error fetching music:', error);
        });
    }
  }
};
</script>
