import * as ACTIONS from '@/store/type/actions.type.ts';
import * as MUTATIONS from '@/store/type/mutations.type.ts';
import {
  fetchDocList,
  fetchDoc,
  fetchCheckList,
  postCheckList,
  fetchMyCheckedDocList
} from '@/api/doc.api';
import { ActionTree, MutationTree, Module } from 'vuex';

const docState: DocState = {
  docList: [],
  docDetail: {},
  checkList: [],
  myCheckedDocList: [],
  docResult:{},
};

const actions: ActionTree<DocState, RootState> = {
  async [ACTIONS.FETCH_DOC_LIST](context) {
    const { data } = await fetchDocList();
    await context.commit(MUTATIONS.SET_DOC_LIST, data);
  },
  async [ACTIONS.FETCH_THE_DOC](context, docId: number) {
    const { data } = await fetchDoc(docId);
    context.commit(MUTATIONS.SET_THE_DOC, data);
  },
  async [ACTIONS.FETCH_CHECK_LIST](context, docId: number) {
    const { data } = await fetchCheckList(docId);
    context.commit(MUTATIONS.SET_CHECK_LIST, data);
  },
  async [ACTIONS.POST_CHECKLIST](context, docId: number) {
    await postCheckList(docId, context.state.checkList.slice(0));
  },
  async [ACTIONS.FETCH_MY_CHECKED_DOC_LIST](context) {
    const { data } = await fetchMyCheckedDocList();
    await context.commit(MUTATIONS.SET_MY_CHECKED_DOC_LIST, data);
  },
  async [ACTIONS.FETCH_DOC_RESULT](context,docId:number){
    const {data} = await fetchDocResult(docId);
    context.commit(MUTATIONS.SET_DOC_RESULT,data)
  }
};

const mutations: MutationTree<DocState> = {
  [MUTATIONS.SET_DOC_LIST](state, docList: DocSimpleSerializer[]) {
    state.docList = docList;
  },
  [MUTATIONS.SET_THE_DOC](state, docDetail: DocSerializer) {
    state.docDetail = docDetail;
  },
  [MUTATIONS.SET_CHECK_LIST](state, checkList: CheckListItemSerializer[]) {
    state.checkList = checkList;
  },
  [MUTATIONS.SET_MY_CHECKED_DOC_LIST](
    state,
    myCheckedDocList: DocSimpleSerializer[]
  ) {
    state.myCheckedDocList = myCheckedDocList;
  }
};

const doc: Module<DocState, RootState> = {
  state: docState,
  actions,
  mutations
};

export default doc;
