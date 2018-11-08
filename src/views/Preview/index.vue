<template>
  <div class="background">
    <div class="right-background"/>
    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-8 has-background-white doc-content">
          <div v-if="docDetail.content" class="content">
            <vue-markdown>{{ docDetail.content }}</vue-markdown>
          </div>
        </div>
        <div class="column is-4">
          <div
            v-for="item in checkList"
            :key="item.fid"
            :class="{'notification':true,'is-success':item.level===1,'is-danger':item.level===0}"
          >
            <div>{{item.content}}</div>
            <div class="control">
              <checkbox v-model="item.level" :name="item.fid"/>
            </div>
            <textarea v-model="item.comment" class="textarea" placeholder="e.g. Hello world"></textarea>
          </div>
          <div @click="submit" style="width:100%" class="button is-primary">提 交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
import {
  FETCH_THE_DOC,
  FETCH_CHECK_LIST,
  POST_CHECKLIST
} from '@/store/type/actions.type';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';
import Checkbox from '@/components/Checkbox/index.vue';

@Component({
  components: {
    VueMarkdown,
    Checkbox
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

  public submit() {
    this.$store.dispatch(POST_CHECKLIST, this.$route.params.docId);
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/_all.sass';
.background {
  background-color: $white;
  position: relative;
  padding-top: 20px;
}

.right-background {
  // background-color: $white-bis;
  bottom: 0;
  left: 50%;
  position: absolute;
  right: 0;
  top: 0;
}

.doc-content {
  padding-top: 0.75rem;
}

// @media screen and (max-width: 1088px) {
//   .doc-content {
//     padding: 1rem;
//     margin: 0;
//   }
// }
</style>
