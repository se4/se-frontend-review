<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">待完成文档</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns is-multiline is-desktop">
        <div v-for="item in docList" :key="item.id" class="column is-3">
          <router-link :to="`/preview/${item.id}`" style="text-decoration: none;">
            <div class="box">
              <p>
                <strong>{{item.filename}}</strong>
              </p>
              <div>{{item.owner.name}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FETCH_DOC_LIST } from '@/store/type/actions.type';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';

@Component
export default class Home extends Vue {
  @State((state: RootState) => state.doc.docList)
  public docList: DocSimpleSerializer[];

  public mounted() {
    this.$store.dispatch(FETCH_DOC_LIST);
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/_all.sass';
.active-background {
  background-color: $white-bis;
}
</style>
