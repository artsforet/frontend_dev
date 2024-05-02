<template>
  <div class="song-page-container">
    <div class="song-page-wrapper">
      <div class="audio-player">
        <div class="song-page-title">
          <br /><br /><br />
          <h2> 곡 > BGM </h2>
          <h4 style="color:#f3be38; line-height: 50px"> 템포 전체 | 길이 전체 </h4>
        </div>
        <div ref="waveform" class="waveform-container">
          <div v-for="(record, index) in musicRecords.Contents" :key="index" class="waveform-style">
            <div class="music-record">
              <div class="music-waveforms-title-info">
                <img :src="img" />
                <div>{{ getRecordTitle(record.Key).title }}</div>
                <div>{{ getRecordTitle(record.Key).album }}</div>
              </div>
              <div>
              <div class="waveform-inner"></div>
              <br />
              <div style="margin:0; padding: 0; height:12px; line-height:5px;"> example description </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div style="display: flex; line-height: 90px;">
                <p class="audio-duration">{{ formatTime(audioDurations[index]) }}</p>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <span @click="playPauseAudio(index)" class="play-pause-icon">
                  <i :class="['bi', playingIndex === index ? 'bi-pause' : 'bi-play-fill']"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WaveSurfer from 'wavesurfer.js';

export default {
  data() {
    return {
      musicRecords: [],
      music_info: [],
      wavesurfers: [],
      audioDurations: [],
      playingIndex: -1,
    };
  },
  mounted() {
    this.fetchMusicRecords();
    this.fetchMusicData();
  },
  methods: {
    async fetchMusicData() {
      try {
        const response = await axios.get('/music/db');
        this.music_info = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getRecordTitle(record_key) {
      const musicInfo = this.music_info.find(info => info.filename === record_key);
      return musicInfo ? { title: musicInfo.title, album: musicInfo.album } : { title: record_key, album: '' };
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    },
    async fetchMusicRecords() {
      try {
        const response = await axios.get('/music/list-objects/arts');
        this.musicRecords = response.data;
        await this.loadAudio();
      } catch (error) {
        console.error('Error fetching music records:', error);
      }
    },
    async loadAudio() {
      try {
        for (const record of this.musicRecords.Contents) {
          const response = await axios.get(`/music/audio/arts/${record.Key}`, { responseType: 'blob' });
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
  },
};
</script>

<style scoped>
@import "@/assets/css/SongPage.css";
</style>
