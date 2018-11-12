import * as ACTIONS from '@/store/type/actions.type';
import * as MUTATIONS from '@/store/type/mutations.type';
import { login, register } from '@/api/auth.api';
import { getToken, destroyToken, saveToken } from '@/utils/auth';
import { Module, ActionTree, MutationTree } from 'vuex';

const authState: AuthState = {
  isAuthenticated: !!getToken(),
  isLoginError: false,
  isRegisterError: false,
  update: false
};

const actions: ActionTree<AuthState, RootState> = {
  async [ACTIONS.LOGIN](context, credentials: LoginInfo) {
    try {
      const {
        data,
        _header: { Authorization }
      } = await login(credentials);
      context.commit(MUTATIONS.SET_PROFILE, data);
      context.commit(MUTATIONS.SET_AUTH, true);
      context.commit(MUTATIONS.SET_LOGIN_ERROR, false);
      saveToken(Authorization);
    } catch (e) {
      context.commit(MUTATIONS.SET_LOGIN_ERROR, true);
      context.commit(MUTATIONS.SET_AUTH, false);
    }
  },
  async [ACTIONS.LOGOUT](context) {
    context.commit(MUTATIONS.REMOVE_AUTH);
  },
  async [ACTIONS.REGISTER](context, credentials: RegisterInfo) {
    try {
      await register(credentials);
      context.commit(MUTATIONS.SET_REGISTER_ERROR, false);
    } catch (e) {
      context.commit(MUTATIONS.SET_REGISTER_ERROR, true);
    }
  }
};

const mutations: MutationTree<AuthState> = {
  [MUTATIONS.SET_LOGIN_ERROR](state, error: boolean) {
    state.isLoginError = error;
  },
  [MUTATIONS.SET_REGISTER_ERROR](state, error: boolean) {
    state.isRegisterError = error;
  },
  [MUTATIONS.SET_AUTH](state, isAuthenticated = true) {
    state.isAuthenticated = isAuthenticated;
  },
  [MUTATIONS.REMOVE_AUTH](state) {
    state.isAuthenticated = false;
    destroyToken();
  },
  [MUTATIONS.SET_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  }
};

const auth: Module<AuthState, RootState> = {
  state: authState,
  actions,
  mutations
};

export default auth;
