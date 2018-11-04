import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import { fetchDocList, fetchDoc } from "@/api/doc";

const state = {
  docList: [],
  docDetail: {}
};

const actions = {
  async [ACTIONS.FETCH_DOC_LIST](context) {
    const { data } = await fetchDocList();
    await context.commit(MUTATIONS.SET_DOC_LIST, data);
  },
  async [ACTIONS.FETCH_THE_DOC](context, docId) {
    const { data } = await fetchDoc(docId);
    context.commit(MUTATIONS.SET_THE_DOC, data);
  }
};

const mutations = {
  [MUTATIONS.SET_DOC_LIST](state, docList) {
    state.docList = docList;
  },
  [MUTATIONS.SET_THE_DOC](state, docDetail) {
    state.docDetail = docDetail;
  }
};

export default {
  state,
  actions,
  mutations
};
