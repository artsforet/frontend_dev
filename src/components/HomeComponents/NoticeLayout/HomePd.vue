<template>
  <div style="height: 500px">
    <select v-model="selectedFile" @change="fetchMp3File">
      <option v-for="file in mp3Files" :key="file" :value="file">
        {{ file }}
      </option>
    </select>
    <audio ref="audioPlayer" :src="mp3Url" controls></audio>
    <button @click="togglePlayPause">
      {{ isPlaying ? "일시정지" : "재생" }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const mp3Files = ref([]);
    const selectedFile = ref("");
    const mp3Url = ref("");
    const audioPlayer = ref(null);
    const isPlaying = ref(false);

    onMounted(async () => {
      await fetchMp3Files();
    });

    async function fetchMp3Files() {
      try {
        const response = await axios.get("http://101.101.208.214:8000/storage/get");
        mp3Files.value = response.data;
        selectedFile.value = mp3Files.value[0]; // 기본적으로 첫 번째 파일 선택
        await fetchMp3File(); // 기본적으로 선택된 파일에 대한 MP3 파일 가져오기
      } catch (error) {
        console.error("Failed to fetch MP3 Files", error);
      }
    }

    async function fetchMp3File() {
      try {
        const response = await axios.get(
          `http://101.101.208.214/storage/${selectedFile.value}`
        );
        mp3Url.value = URL.createObjectURL(
          new Blob([response.data], { type: "audio/mpeg" })
        );
      } catch (error) {
        console.error("Failed to fetch MP3 File", error);
      }
    }

    function togglePlayPause() {
      if (audioPlayer.value.paused) {
        audioPlayer.value.play();
        isPlaying.value = true;
      } else {
        audioPlayer.value.pause();
        isPlaying.value = false;
      }
    }

    return {
      mp3Files,
      selectedFile,
      mp3Url,
      audioPlayer,
      isPlaying,
      togglePlayPause,
      fetchMp3File,
    };
  },
};
</script>

<!--<script setup>-->
<!--import { onMounted, ref } from "vue";-->
<!--import axios from "axios";-->

<!--const mp3Files = ref([]);-->
<!--onMounted(async () => {-->
<!--  await fetchMp3Files();-->
<!--  console.log(mp3Files.value);-->
<!--});-->
<!--async function fetchMp3Files() {-->
<!--  try {-->
<!--    const response = await axios.get("http://localhost:8000/storage/get");-->
<!--    mp3Files.value = response.data.map((fileName) => getMp3Url(fileName));-->
<!--  } catch (error) {-->
<!--    console.error("Failed to fetch MP# Files", error);-->
<!--  }-->
<!--}-->
<!--fetchMp3Files();-->
<!--function getMp3Url(fileName) {-->
<!--  return `http://localhost:8000/storage/${fileName}`;-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--  <div class="home-pd-container">-->
<!--    <h1>PD의 선택</h1>-->
<!--    <div class="flex-container">-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 첫 번째 아이템 &ndash;&gt;-->
<!--        <div>-->
<!--          <audio controls>-->
<!--            <source :src="mp3Files[0]" type="audio/mpeg" />-->
<!--            Your browser does not support the audio element.-->
<!--          </audio>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 두 번째 아이템 &ndash;&gt;-->
<!--        <div>두 번째 아이템</div>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 두 번째 아이템 &ndash;&gt;-->
<!--        <div>세 번째 아이템</div>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 두 번째 아이템 &ndash;&gt;-->
<!--        <div>네 번째 아이템</div>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 두 번째 아이템 &ndash;&gt;-->
<!--        <div>다섯 번째 아이템</div>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        &lt;!&ndash; 두 번째 아이템 &ndash;&gt;-->
<!--        <div>여섯 번째 아이템</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<style>-->
<!--.flex-container {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--}-->
<!--.item {-->
<!--  min-width: 500px;-->
<!--  height: 200px;-->
<!--  flex: 1;-->
<!--  border-top: 1px solid white;-->
<!--  border-bottom: 1px solid white;-->
<!--  position: relative;-->
<!--  float: left;-->
<!--  margin-right: 20px;-->
<!--}-->
<!--.item > div {-->
<!--  top: 40%;-->
<!--  position: absolute;-->
<!--}-->
<!--</style>-->
