<template>
<div class="footer-container">
  <div class="footer-wrapper">

    <ul class="footer-wrapper-un">
      <li>
        <router-link to="/about">회사소개</router-link>
      </li>
      <li>
        <router-link to="/about">FAQ</router-link>
      </li>
      <li>
        <router-link to="/about">이용약관</router-link>
      </li>
      <li>
        <router-link to="/about">개인정보처리방침</router-link>
      </li>
    </ul>
    <br/>

    <div class="footer-information">
      주소. 경기도 부천시 부천로 198번길 18 춘의테크노파크 2차 202동 1006호 (주)예술숲
      <br />

      상호명. (주)예술숲 | 대표. 김면지 | 사업자등록번호. 000-00-0000 | 통신판매업신고번호. 제 2024 서울광진 0000호
      <br />

      E-mail. bgmfactory@littlesongmusic.com | 계좌번호. 주식회사 예술숲 000-000000-00-000 국민은행 | 개인정보보호책임자. 김면지 | Tel. 1800-4746
      <br />
    </div>

  <!--footer.facebook-alternate-->
  <!--블로그-->
  <!--주소. 04975 서울시 광진구 천호대로 676 3F (주)리틀송뮤직-->
  <!--상호명. (주)리틀송뮤직 | 대표. 박종오 | 사업자등록번호. 693-87-01082 | 통신판매업신고번호. 제 2019 서울광진 0673호-->
  <!--E-mail. bgmfactory@littlesongmusic.com | 계좌번호. 주식회사 리틀송뮤직 028-070819-04-026 기업은행 | 개인정보보호책임자. 이재승 | Tel. 02-444-7411-->
  <!--© 2024 Littlesongmusic. All rights reserved.-->

  </div>
</div>
</template>

<style>

.footer-container {
  max-width: 1920px;
  height: 400px;
  background-color: #202020;
  color: #bbb;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  bottom: 0;
  position: relative;
}

.footer-container > .footer-wrapper {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}

.footer-container > .footer-wrapper > ul {
  display: flex;
  justify-content: start;
  padding: 0;
}

.footer-container > .footer-wrapper > ul > li {
  list-style: none;
  margin-right: 20px;
  font-weight: 500;
  font-size: 18px;
  padding: 0;
}

.footer-information {
  text-align: start;
  color: #888
}

.footer-wrapper-un > li > a {
  color: white;
  text-decoration: none;
}

</style>