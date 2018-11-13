<template>
  <div>
    <div class="intro">Sign Up</div>
    <div class="columns is-multiline">
      <form @submit.prevent="submit" style="width:100%">
        <div class="column is-12">
          <label class="label">{{nicknameLabel}}</label>
          <p class="control has-icon has-icon-right">
            <input
              :name="nicknameLabel"
              v-model="credentials.nickname"
              v-validate="'min:3|max:11|alpha_num'"
              :class="{'input': true, 'is-danger': errors.has(nicknameLabel) }"
              type="text"
              placeholder="nickname"
            >
            <i v-show="errors.has(nicknameLabel)" class="fa fa-warning"></i>
            <span
              v-show="errors.has(nicknameLabel)"
              class="help is-danger"
            >{{ errors.first(nicknameLabel) }}</span>
          </p>
        </div>
        <div class="column is-12">
          <label class="label">{{usernameLabel}}</label>
          <p class="control has-icon has-icon-right">
            <input
              :name="usernameLabel"
              v-model="credentials.username"
              v-validate="'min:6|max:11|alpha_num|required'"
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
              v-validate="'min:6|max:11|alpha_num|required'"
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
          <label class="label">{{passwordAgainLabel}}</label>
          <p class="control has-icon has-icon-right">
            <input
              :name="passwordAgainLabel"
              v-model="passwordAgain"
              v-validate="'required|truthy'"
              :class="{'input': true, 'is-danger': errors.has(passwordAgainLabel) }"
              type="password"
              placeholder="password"
            >
            <i v-show="errors.has(passwordAgainLabel)" class="fa fa-warning"></i>
            <span
              v-show="errors.has(passwordAgainLabel)"
              class="help is-danger"
            >{{ errors.first(passwordAgainLabel) }}</span>
          </p>
        </div>
        <div class="column is-12">
          <p class="control level">
            <button
              style="width:40%"
              :class="{'button':true, 'is-link':true, 'is-loading':submiting}"
              type="submit"
            >注 册</button>
            <router-link
              :to="{name:'login'}"
              :class="{'button':true, 'is-text':true}"
              type="submit"
            >已有账户，登陆</router-link>
          </p>
        </div>
      </form>
    </div>
    <div v-show="isRegisterError" class="notification is-danger">
      <button @click="closeError" class="delete"></button>
      <strong>用户名已注册</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Validator } from 'vee-validate';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';
import { REGISTER } from '@/store/type/actions.type';
import { SET_REGISTER_ERROR } from '@/store/type/mutations.type';
import { LOGIN_ROUTER } from '@/router/name';

@Component
export default class Register extends Vue {
  public credentials: RegisterInfo = {
    username: '',
    password: '',
    nickname: ''
  };

  public passwordAgain = '';
  public submiting = false;

  public usernameLabel = '用户名';
  public passwordLabel = '密码';
  public passwordAgainLabel = '再次输入密码';
  public nicknameLabel = '昵称';

  @State((state: RootState) => state.auth.isRegisterError)
  public isRegisterError: boolean;

  public mounted() {
    Validator.extend('truthy', {
      getMessage: (field: string): string => '两次输入的密码不相同',
      validate: (value: string): boolean => value === this.credentials.password
    });
  }

  public closeError() {
    this.$store.commit(SET_REGISTER_ERROR, false);
  }

  public submit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        // eslint-disable-next-line
        this.submiting = true;
        await this.$store.dispatch(REGISTER, this.credentials);
        if (!this.isRegisterError) {
          // tslint:disable-next-line:no-console
          this.$router.push({ name: 'login' });
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