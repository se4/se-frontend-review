<template>
  <div class="home">
    <section class="hero is-info has-shadow">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Documents</h1>
          <h2 class="subtitle">待完成文档</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { fetchDocList } from '@/api/doc.api';

@Component({
  components: {
    HelloWorld
  }
})
export default class PreDoc extends Vue {
  public mounted() {
    fetchDocList();
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/_all.sass';
.active-background {
  background-color: $white-bis;
}
</style>
