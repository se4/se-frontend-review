<template>
  <div class="background">
    <div class="right-background"/>
    <div class="container">
      <div class="columns is-desktop whole-content">
        <div class="column is-8 has-background-white doc-content">
          <div v-if="docDetail.content" class="content">
            <vue-markdown>{{ docDetail.content }}</vue-markdown>
          </div>
        </div>
        <div class="column is-8 has-background-white doc-content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
import { FETCH_THE_DOC, FETCH_CHECK_LIST } from '@/store/type/actions.type';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';

@Component({
  components: {
    VueMarkdown
  }
})
export default class Preview extends Vue {
  @State((state: RootState) => state.doc.docDetail)
  public docDetail: DocSerializer;

  @State((state: RootState) => state.doc.checkList)
  public checkList: CheckListItemSerializer[];

  public mounted() {
    if (this.$route.params.docId) {
      this.$store.dispatch(FETCH_THE_DOC, this.$route.params.docId);
      this.$store.dispatch(FETCH_CHECK_LIST, this.$route.params.docId);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/_all.sass';
.background {
  background-color: $white;
  position: relative;
}

.right-background {
  background-color: $white-bis;
  bottom: 0;
  left: 50%;
  position: absolute;
  right: 0;
  top: 0;
}

.doc-content {
  margin-left: -3rem;
  padding: 3rem;
  height: 100%;
}

.whole-content {
  margin: 0;
}

@media screen and (max-width: 1088px) {
  .doc-content {
    padding: 1rem;
    margin: 0;
  }
}
</style>
