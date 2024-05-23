<template>
  <div class="upload-music-container">
    <div class="upload-music-wrapper">
      <br /><br /><br />

      <label class="input-file-button" for="input-file">
        업로드
      </label>

      <div class="upload-form-text-color"> MP3 파일을 선택해주세요. </div>
        <input type="file" id="input-file"  class="mp3-upload" ref="audio" accept="audio/*" @change="handleFileUpload" required/>
        <h3 style="color: white" v-if="test">{{test}}</h3>

        <br /> <br /> <br /> <br /> <br />
        <label class="input-file-button" for="input-image-file">
          업로드
        </label>
        <div class="upload-form-text-color" > 이미지 파일을 선택해주세요. </div>

      <input type="file" id="input-image-file" ref="image" accept="image/*" class="mp3-upload" @change="handleImageUpload" required> <br /> <br />

      <div class="metadata-container">
          <div class="metadata-form-container">
            <label for="title" class="label-container"> 타이틀 &nbsp; </label>
            <input type="text" v-model="title" placeholder="타이틀명을 입력해주세요." class="upload-music-input" required>
              &nbsp;
          </div>

<!--          <div class="metadata-form-container">-->
<!--            <label for="link"  class="label-container">링크</label>&nbsp;-->
<!--            <input type="text" v-model="permalink" placeholder="링크 사실 XXXX" class="upload-music-input" required>&nbsp;-->
<!--          </div>-->

          <div class="metadata-form-container">
            <label for="duration"  class="label-container">시간</label>
            <input type="number" v-model="duration" placeholder="노래 길이" class="upload-music-input" required>&nbsp;
          </div>

          <div class="metadata-form-container">
            <label for="status"  class="label-container">공개여부 </label> &nbsp;
            <input type="text" v-model="status" placeholder="공개여부" class="upload-music-input" required> &nbsp;
          </div>

          <div class="metadata-form-container">
            <label for="album"  class="label-container">앨범</label> &nbsp;
            <input type="text" v-model="album" placeholder="album" class="upload-music-input" required> &nbsp;
          </div>

        <div class="metadata-form-container">
          <label for="album"  class="label-container">아티스트</label> &nbsp;
          <input type="text" v-model="artist" placeholder="album" class="upload-music-input" required> &nbsp;
        </div>
        </div>

      <br /><br /><br />
      <button @click="uploadFile" class="upload-button">Upload</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        title: '',
        artist: '',
        filename: '',
        link: '',
        duration: null,
        status: '',
        album: '',
        mp3_info: '',
        coverFilename: '',
        audioFile: null,
        imageFile: null,
        test: "",
       // permalink: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.audioFile = event.target.files[0];
      const a = event.target.files[0].name;
      this.test = a;
    },
    handleImageUpload(event){
      this.imageFile = event.target.files[0]
    },
    // handleImageUpload(event) {
    //   this.image_file = event.target.files[0];
    // },
    uploadFile: async function() {
      try {
        const formData = new FormData()
        formData.append('title', this.title);
        formData.append('artist', this.artist);
        formData.append('album', this.album);
        formData.append('duration', this.duration);
        formData.append('status', this.status);
        if (this.audioFile) {
          formData.append('audio', this.audioFile);
        }
        if (this.imageFile) {
          formData.append('image', this.imageFile);
        }
        await axios.post('/music/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
          .then(response => {
            console.log('Success:', response);
            alert('File uploaded successfully');
        }) .catch(error => {
            console.error('Error:', error);
            alert('Failed to upload file');
          });
      } catch (error) {
        console.error('Error uploading file:', error)
        alert('Failed to upload file')
      }
    }
  }
};
</script>

<style>
.form-control {
  max-width: 400px;
}

.upload-music-container {
  width: 100%;
  height: 1020px;
  background-color: #202020;
  color: white;
}

.upload-music-wrapper {
  text-align: center;
}

.upload-music-input {
  width: 180px;
  height: 35px;
  border-radius: 5px;
  background-color: white;
  border: none;
  color: #171717;
}

.upload-music-input:focus {
  outline: none;
}

.input-file-button {
  width: 560px;
  padding: 6px 25px;
  background-color:#FF6600;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  text-align: center;
}

.mp3-upload {
  display: none;
}

.upload-form-text-color {
  color: rgba(255,255,255, 0.5);
}

.metadata-container {
  max-width: 580px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.label-container {
  height: 50px;
  display: flex;
  margin: 0;
  padding: 0;
  line-height: 37px;
}
.upload-button {
  background-color: #ed702d;
  color: white;
  padding: 15px 10px;
  border-radius: 7.5px;
}
</style>