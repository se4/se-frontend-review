<template>
  <section class="main-body">
    <section class="main-body-section">
      <div class="logo">REVIEW</div>
      <div class="login_container">
        <div class="container__main">
          <router-view/>
        </div>
      </div>
    </section>
    <footer class="footer is-white">
      <div class="content has-text-centered">@nju software</div>
    </footer>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginLayout extends Vue {}
</script>

<style lang="scss" scoped>
@import '../style/config';
@import 'bulma/sass/utilities/_all.sass';
.logo {
  text-align: center;
  padding: 20vh 0 0;
  color: $logo-color;
  font-size: $logo-font-size;
  font-family: $logo-font-family;
}
.outer-container {
  min-height: 100vh;
}
.login_container {
  width: 100%;
  .container__main {
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
}
.author {
  color: $footer-color;
  text-align: center;
}
.main-body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $white-bis;
  .main-body-section {
    flex: 1;
  }
}
</style>