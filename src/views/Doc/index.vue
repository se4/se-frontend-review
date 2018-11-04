<template>
  <div class="home">
    <div class="title">
      Document Detail ( docId: {{ docDetail.id }} )
    </div>
    <div 
      v-if="docDetail.content" 
      class="doc-container markdown-body">
      <vue-markdown>{{ docDetail.content }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_THE_DOC } from "@/store/type/actions.type";
import VueMarkdown from "vue-markdown";
export default {
  name: "Doc",
  components: {
    VueMarkdown
  },
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState({
      docDetail: state => state.doc.docDetail
    })
  },
  async mounted() {
    if (this.$route.params.docId) {
      const docId = this.$route.params.docId;
      await this.$store.dispatch(FETCH_THE_DOC, docId);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/config";
.home {
  max-width: 800px;
  margin: 0 auto;

  .filename {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .title {
    font-family: $logo-font-family;
    font-size: 30px;
    color: $oc-gray-6;
    width: 100%;
    padding-top: 40px;
  }
  .doc-container {
    width: 100%;
    margin-top: 40px;
    background-color: white;
    padding: 10px 30px 30px;
  }
}
</style>
