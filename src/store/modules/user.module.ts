import * as ACTIONS from '@/store/type/actions.type.ts';
import * as MUTATIONS from '@/store/type/mutations.type.ts';
import {
  fetchUserProfile,
  updateProfile,
  changePassword
} from '@/api/user.api';
import { ActionTree, MutationTree, Module } from 'vuex';
import { saveUserProfile, getUserProfile } from '@/utils/auth';

const userState: UserState = {
  profile: getUserProfile() || {},
  update: false
};

const actions: ActionTree<UserState, RootState> = {
  async [ACTIONS.FETCH_PROFILE](context, userId) {
    const { data } = await fetchUserProfile(userId);
    context.commit(MUTATIONS.SET_PROFILE, data);
  },
  async [ACTIONS.CHANGE_PASSWORD](context, { userId, oldPassword, password }) {
    const { data } = await changePassword(userId, oldPassword, password);
    context.commit(MUTATIONS.SET_PROFILE, data);
  },
  async [ACTIONS.UPDATE_PROFILE](context, { userId, profile }) {
    const { data } = await updateProfile(userId, profile);
    context.commit(MUTATIONS.SET_PROFILE, data);
  }
};

const mutations: MutationTree<UserState> = {
  [MUTATIONS.SET_PROFILE](state, userSerializer: UserSerializer) {
    state.profile = userSerializer;
    saveUserProfile(userSerializer);
  },
  [MUTATIONS.SET_PROFILE_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  }
};

const user: Module<UserState, RootState> = {
  state: userState,
  actions,
  mutations
};

export default user;
