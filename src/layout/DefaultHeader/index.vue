<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item header-logo" href="https://bulma.io">MOOC</a>
        <a
          role="button"
          @click="onClickExpand"
          :class="['navbar-burger','burger',{'is-active':isActive}]"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" :class="['navbar-menu',{'is-active':isActive}]">
        <div class="navbar-start">
          <router-link :to="{name:'home'}" class="navbar-item">待完成文档</router-link>
          <router-link :to="{name:'preDoc'}" class="navbar-item">已完成文档</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefaultHeader extends Vue {
  public isActive: boolean = false;

  public onClickExpand() {
    this.isActive = !this.isActive;
  }
}
</script>

<style lang="scss">
@import 'bulma/sass/utilities/_all.sass';
@media screen and (min-width: 1088px) {
  .navbar {
    min-height: 4.25rem;
  }
}
.header-logo {
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  color: $cyan;
  font-size: 1.7em;
  padding-right: 20px;
}
.nav-active {
  background-color: #fafafa;
}
@media screen {
}
</style>
