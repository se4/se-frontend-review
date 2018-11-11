<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item header-logo" :to="{name:'home'}">MOOC</router-link>
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
      <div :class="['navbar-menu',{'is-active':isActive}]">
        <div class="navbar-start">
          <router-link :to="{name:'home'}" class="navbar-item">待完成文档</router-link>
          <router-link :to="{name:'preDoc'}" class="navbar-item">已完成文档</router-link>
        </div>
        <div class="navbar-end">
          <div
            style="cursor:pointer"
            v-click-outside="onClickOutside"
            @click="onAvatarClicked"
            class="navbar-item"
          >
            <div class="dropdown is-right" :class="{'is-active':isAvatarActive}">
              <div class="dropdown-trigger">
                <figure class="image is-32x32">
                  <img
                    style="max-height:none"
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  >
                </figure>
              </div>
              <div class="dropdown-menu" id="navbar-menu" role="menu">
                <div class="dropdown-content">
                  <router-link :to="{name:'user'}" class="dropdown-item">个人信息</router-link>
                  <hr class="dropdown-divider">
                  <router-link :to="{name:'login'}" class="dropdown-item">登出</router-link>
                </div>
              </div>
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
  private isActive: boolean = false;
  private isAvatarActive: boolean = false;

  public onClickExpand() {
    this.isActive = !this.isActive;
  }

  public onAvatarClicked() {
    this.isAvatarActive = !this.isAvatarActive;
  }

  public onClickOutside() {
    if (this.isAvatarActive === true) {
      this.isAvatarActive = false;
    }
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
