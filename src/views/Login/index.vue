<template>
  <div>
    <div class="intro">Sign In</div>
    <div class="columns is-multiline">
      <form @submit.prevent="submit" style="width:100%">
        <div class="column is-12">
          <label class="label">{{usernameLabel}}</label>
          <p class="control has-icon has-icon-right">
            <input
              :name="usernameLabel"
              v-model="credentials.username"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has(usernameLabel) }"
              type="username"
              placeholder="username"
            >
            <i v-show="errors.has(usernameLabel)" class="fa fa-warning"></i>
            <span
              v-show="errors.has(usernameLabel)"
              class="help is-danger"
            >{{ errors.first(usernameLabel) }}</span>
          </p>
        </div>
        <div class="column is-12">
          <label class="label">{{passwordLabel}}</label>
          <p class="control has-icon has-icon-right">
            <input
              :name="passwordLabel"
              v-model="credentials.password"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has(passwordLabel) }"
              type="password"
              placeholder="password"
            >
            <i v-show="errors.has(passwordLabel)" class="fa fa-warning"></i>
            <span
              v-show="errors.has(passwordLabel)"
              class="help is-danger"
            >{{ errors.first(passwordLabel) }}</span>
          </p>
        </div>
        <div class="column is-12">
          <p class="control level">
            <button
              style="width:40%"
              :class="{'button':true, 'is-link':true, 'is-loading':submiting}"
              type="submit"
            >登 陆</button>
            <router-link
              :to="{name:'register'}"
              :class="{'button':true, 'is-text':true}"
              type="submit"
            >没有账户，注册</router-link>
          </p>
        </div>
      </form>
    </div>
    <div v-show="isLoginError" class="notification is-danger">
      <button @click="closeError" class="delete"></button>
      <strong>用户名或密码错误</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Validator } from 'vee-validate';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';
import { REGISTER, LOGIN } from '@/store/type/actions.type';
import { SET_LOGIN_ERROR } from '@/store/type/mutations.type';
import { LOGIN_ROUTER } from '@/router/name';

@Component
export default class Login extends Vue {
  public credentials: LoginInfo = {
    username: '',
    password: ''
  };

  public submiting = false;

  public usernameLabel = '用户名';
  public passwordLabel = '密码';

  @State((state: RootState) => state.auth.isLoginError)
  public isLoginError: boolean;

  public mounted() {
    Validator.extend('truthy', {
      getMessage: (field: string): string => '两次输入的密码不相同',
      validate: (value: string): boolean => value === this.credentials.password
    });
  }

  public closeError() {
    this.$store.commit(SET_LOGIN_ERROR, false);
  }

  public submit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        this.submiting = true;
        await this.$store.dispatch(LOGIN, this.credentials);
        if (!this.isLoginError) {
          this.$router.push({ name: 'home' });
        } else {
          this.submiting = false;
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/config';
.intro {
  color: $oc-gray-7;
  text-align: center;
  font-size: 25px;
  padding: 10px 0 30px;
}
.link {
  color: $oc-blue-5;
  text-decoration: none;
}
.action-section {
  display: flex;
  justify-content: space-between;
}
</style>