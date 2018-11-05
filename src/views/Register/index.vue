<template>
  <div>
    <div class="intro">Sign Up</div>
    <div class="columns is-multiline">
      <div class="column is-12">
        <label class="label">用户名</label>
        <p class="control has-icon has-icon-right">
          <input
            name="用户名"
            v-model="credentials.username"
            v-validate="'required|between:6,11|alpha_num|unique'"
            :class="{'input': true, 'is-danger': errors.has('用户名') }"
            type="username"
            placeholder="username"
          >
          <i v-show="errors.has('用户名')" class="fa fa-warning"></i>
          <span v-show="errors.has('用户名')" class="help is-danger">{{ errors.first('用户名') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">密码</label>
        <p class="control has-icon has-icon-right">
          <input
            name="password"
            v-model="credentials.password"
            v-validate="'required|between:6,11|alpha_num'"
            :class="{'input': true, 'is-danger': errors.has('credentials.password') }"
            type="password"
            placeholder="password"
          >
          <i v-show="errors.has('credentials.password')" class="fa fa-warning"></i>
          <span
            v-show="errors.has('credentials.password')"
            class="help is-danger"
          >{{ errors.first('credentials.password') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <p class="control">
          <button class="button is-primary" type="button" @click="submit">Submit</button>
        </p>
      </div>
    </div>
    <div class="notification is-danger">
      <button class="delete"></button>
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
      <a>felis venenatis</a>efficitur. Sit amet,
      consectetur adipiscing elit
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VeeValidate from 'vee-validate';
import { mapState } from 'vuex';
import { REGISTER } from '@/store/type/actions.type';
import { SET_REGISTER_ERROR } from '@/store/type/mutations.type';
import { LOGIN_ROUTER } from '@/router/name';

@Component
export default class DefaultLayout extends Vue {
  public credentials: RegisterInfo = {
    username: '',
    password: '',
    nickname: ''
  };

  public submit() {
    // tslint:disable-next-line:no-console
    console.log(this.credentials);
  }

  public mounted() {
    //       const isUnique = value =>
    //     new Promise(resolve => {
    //       setTimeout(() => {
    //         if (emailsDB.indexOf(value) === -1) {
    //           return resolve({
    //             valid: true
    //           });
    //         }
    //         return resolve({
    //           valid: false,
    //           data: {
    //             message: `${value} is already taken.`
    //           }
    //         });
    //       }, 200);
    //     });
    //   Validator.extend('unique', {
    //     validate: isUnique,
    //     getMessage: (field, params, data) => data.message
    //   });
    // },
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