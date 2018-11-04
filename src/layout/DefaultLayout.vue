<template>
  <section class="main-body">
    <default-header/>
    <router-view class="body-section"/>
    <footer class="footer">
      <div class="content has-text-centered">@nju software</div>
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultHeader from '@/layout/DefaultHeader/index.vue'; // @ is an alias to /src
import { fetchDocList } from '@/api/doc.api';


@Component({
  components: {
    DefaultHeader
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import 'bulma/sass/utilities/_all.sass';
.main-body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $white-bis;
  .body-section {
    flex: 1;
  }
}
</style>

