<template>
  <div class="background">
    <div class="right-background"/>
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{name:'home'}">待完成文档</router-link>
          </li>
          <li>
            <router-link :to="`/preview/${$route.params.docId}`">{{docDetail.filename}}</router-link>
          </li>
        </ul>
      </nav>
      <div class="columns is-desktop">
        <div class="column is-8 has-background-white doc-content">
          <div v-if="docDetail.content" class="content">
            <vue-markdown>{{ docDetail.content }}</vue-markdown>
          </div>
        </div>
        <div class="column is-4">
          <div v-for="item in checkList" :key="item.fid">
            <judge-item :success="item.level===1">
              <checkbox v-model="item.level" :name="item.content"/>
              <input
                v-model="item.comment"
                class="input is-small"
                type="text"
                placeholder="填写备注"
                style="box-shadow:none;border-color:white"
              >
            </judge-item>
          </div>
          <div
            @click="submit"
            style="width:100%"
            class="button is-primary"
            :class="{'is-loading':submitLoading}"
          >提 交</div>
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
import JudgeItem from '@/components/JudgeItem/index.vue';

@Component({
  components: {
    VueMarkdown,
    Checkbox,
    JudgeItem
  }
})
export default class Preview extends Vue {
  @State((state: RootState) => state.doc.docDetail)
  public docDetail: DocSerializer;

  @State((state: RootState) => state.doc.checkList)
  public checkList: CheckListItemSerializer[];

  public submitLoading = false;

  public mounted() {
    if (this.$route.params.docId) {
      this.$store.dispatch(FETCH_THE_DOC, this.$route.params.docId);
      this.$store.dispatch(FETCH_CHECK_LIST, this.$route.params.docId);
    }
  }

  public async submit() {
    this.submitLoading = true;
    await this.$store.dispatch(POST_CHECKLIST, this.$route.params.docId);
    this.submitLoading = false;
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';
.background {
  background-color: $white;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
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
</style>
