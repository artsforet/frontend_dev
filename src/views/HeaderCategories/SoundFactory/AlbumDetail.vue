<template>
  <div class="song-page-container">
    <div class="song-page-wrapper">
      <div class="audio-player">
        <div class="song-page-title">
          <br /><br /><br />
          <h2> 곡 > BGM </h2>
          <h4 style="color:#f3be38; line-height: 50px"> 템포 전체 | 길이 전체 </h4>
        </div>
        <div ref="waveform" class="waveform-container" v-if="musicRecords">
<!--          <div v-for="(record, index) in currentItems" :key="index" class="waveform-style">-->
<!--            <div class="music-record">-->
<!--              <div class="music-waveforms-title-info">-->
<!--                <img :src="getRecordTitle(record.Key).imageUrl" />-->
<!--                <div class="music-waveforms-title-info-description">-->
<!--                  <div style="font-size:15px">{{ getRecordTitle(record.Key).title }}</div>-->
<!--                  <div style="color:#888888; font-size:14px">{{ getRecordTitle(record.Key).album }}</div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="waveform-inner"></div>-->
<!--                <br />-->
<!--                <div style="margin:0; padding: 0; height:12px; line-height:5px;"> example description </div>-->
<!--              </div>-->

              &nbsp;&nbsp;&nbsp;&nbsp;
<!--              <div style="display: flex; line-height: 90px;">-->
<!--                <p class="audio-duration">{{ formatTime(audioDurations[index]) }}</p>-->
<!--                &nbsp;&nbsp;&nbsp;&nbsp;-->

<!--                <span @click="playPauseAudio(index)" class="play-pause-icon">-->
<!--                  <i :class="['bi', playingIndex === index ? 'bi-pause' : 'bi-play-fill']"></i>-->
<!--                </span>-->
<!--              </div>-->
            </div>
          </div>
<!--        </div>-->
<!--        <div v-else style="text-align: center; margin-top: 150px">-->
<!--          <h1> 곡이 없습니다.</h1>-->
<!--        </div>-->
<!--      </div>-->

      <br /><br />
      <center>
        <div>
          <button @click="prevPage" :disabled="currentPage === 1" class="move-button">
            <i class="bi bi-chevron-left"></i>
          </button>
          &nbsp;
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          &nbsp;
          <button @click="nextPage" :disabled="currentPage === totalPages" class="move-button">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
        <br /><br /><br /><br />
      </center>
      <!--      <div class="pagination">-->
      <!--        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>-->
      <!--        <span>Page {{ currentPage }} of {{ totalPages }}</span>-->
      <!--        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import WaveSurfer from 'wavesurfer.js';
import not_image from'@/assets/image/no_image.jpg'

export default {
  data() {
    return {
      musicRecords: [],
      music_info: [],
      wavesurfers: [],
      audioDurations: [],
      playingIndex: -1,
      currentPage: 1,
      itemsPerPage: 10,
      not_image: not_image,
    };
  },
  watch: {
    currentPage: 'fetchMusicRecords',
  },
  mounted() {
    this.fetchMusicRecords();
    this.fetchMusicData();
  },
  computed: {
    currentItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.musicRecords.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.musicRecords.length / this.itemsPerPage);
    }
  },
  methods: {
    async fetchMusicData() {
      try {
        const response = await axios.get('/music/get/table/');
        this.music_info = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getRecordTitle(record_key) {
      const musicInfo = this.music_info.find(info => info.filename === record_key);
      if (musicInfo) {
        return {
          title: musicInfo.title,
          album: musicInfo.album,
          imageUrl: musicInfo.imageUrl !== '' ? musicInfo.imageUrl : this.not_image
        };
      } else {
        return {
          title: 'untitle',
          album: 'Virus Artist',
          imageUrl: this.not_image
        };
      }
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    },
    async fetchMusicRecords() {
      try {
        const response = await axios.get(`/music/list-objects/arts`);
        this.musicRecords = response.data.Contents;
        console.log(this.musicRecords)
        await this.loadAudio();
      } catch (error) {
        console.error('Error fetching music records:', error);
      }
    },
    async loadAudio() {
      try {
        for (const record of this.musicRecords) {
          const response = await axios.get(`/music/mp3/${record.Key}`, { responseType: 'blob' });
          const audioUrl = URL.createObjectURL(new Blob([response.data]));
          const audioDuration = await this.getAudioDuration(audioUrl);
          this.audioDurations.push(audioDuration);
          const wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform.children[this.wavesurfers.length].querySelector('.waveform-inner'),
            waveColor: 'gray',
            progressColor: 'orange',
            autoplay: false,
            height: 50,
          });
          wavesurfer.load(audioUrl);
          wavesurfer.on('finish', () => {
            this.playingIndex = -1;
          });
          this.wavesurfers.push(wavesurfer);
        }
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    },
    async fetchNextPage() {
      if (this.musicRecords.length < this.totalItems) {
        this.currentPage += 1;
        await this.fetchMusicRecords();
      }
    },
    async getAudioDuration(audioUrl) {
      return new Promise(resolve => {
        const audio = new Audio(audioUrl);
        audio.addEventListener('loadedmetadata', () => {
          resolve(audio.duration);
        });
      });
    },
    playPauseAudio(index) {
      if (this.playingIndex === index) {
        this.wavesurfers[index].pause();
        this.playingIndex = -1;
      } else {
        this.wavesurfers.forEach((wavesurfer, i) => {
          if (i !== index) wavesurfer.pause();
        });
        this.wavesurfers[index].play();
        this.playingIndex = index;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
};
</script>

<style scoped>
@import "@/assets/css/SongPage.css";
</style>