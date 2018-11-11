<template>
  <div class="background">
    <div class="right-background"/>
    <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <router-link :to="{name:'preDoc'}">我的文档</router-link>
            </li>
            <li>
              <router-link :to="`/predoc/${$route.params.docId}`">{{docDetail.filename}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="section" style="padding-top:0">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-8 has-background-white doc-content">
            <div v-if="docDetail.content" class="content">
              <vue-markdown>{{ docDetail.content }}</vue-markdown>
            </div>
          </div>
          <div class="column is-4">
            <div v-for="item in docResult" :key="item.fid">
              <judge-item :success="item.pass">
                <strong>{{item.content}}</strong>
                <div v-for="result in item.result" :key="result.rid">
                  <strong style="padding-right:10px;color:grey">+ id:{{result.rid}}</strong>
                  <span class="state state-success" v-if="result.pass">PASS</span>
                  <span class="state state-error" v-else>ERROR</span>
                  <span class="comments">{{result.comment}}</span>
                </div>
              </judge-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
import { FETCH_THE_DOC, FETCH_DOC_RESULT } from '@/store/type/actions.type';
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

  @State((state: RootState) => state.doc.docResult)
  public docResult: DocResultSerializer[];

  public mounted() {
    if (this.$route.params.docId) {
      this.$store.dispatch(FETCH_THE_DOC, this.$route.params.docId);
      this.$store.dispatch(FETCH_DOC_RESULT, this.$route.params.docId);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';
@import '@/style/_config.scss';
.background {
  background-color: $white;
  position: relative;
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

.state {
  padding: 2px 5px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 3px;
  color: white;
  background: $success;
}

.state-success {
  background: $success;
}
.state-error {
  background: $danger;
}
.comments {
  padding-left: 10px;
  display: inline-block;
  color: $oc-gray-7;
  font-size: 14px;
}
</style>
