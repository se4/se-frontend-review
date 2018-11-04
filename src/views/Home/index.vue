<template>
  <div class="home">
    <div class="title">
      Documents
    </div>
    <div class="doc-container">
      <el-row :gutter="24">
        <el-col 
          v-for="doc in docList"
          :key="doc.id" 
          :span="12">
          <router-link
            :to="`/doc/${doc.id}`"
            style="text-decoration: none;">
            <el-card
              style="margin-bottom: 24px"
              class="card"
              shadow="hover">
              <div class="filename">{{ doc.filename }}</div>
              <div>BY {{ doc.owners.name }}</div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_DOC_LIST } from "@/store/type/actions.type";
import Tag from "@/components/Tag";
export default {
  name: "Home",
  components: { Tag },
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState({
      docList: state => state.doc.docList
    })
  },
  async mounted() {
    await this.$store.dispatch(FETCH_DOC_LIST);
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
    text-decoration: none;
  }

  .card {
    text-decoration: none;
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
    padding-top: 40px;
  }
}
</style>
