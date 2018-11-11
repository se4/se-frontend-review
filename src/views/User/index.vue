<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">个人信息</h1>
                </div>
            </div>
        </section>
        <section>
            <container>
                <form class="info-form">
                    <div class="column is-10 is-offset-1">
                        <label class="label">用户id</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                v-bind:value="userInfo.nickname"
                                placeholder="nickname"
                            >
                        </div>
                    </div>
                    <div class="column is-10 is-offset-1">
                        <label class="label">用户身份</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                v-bind:value="userInfo.role"
                                placeholder="role"
                            >
                        </div>
                    </div>
                    <div class="column is-10 is-offset-1">
                        <label class="label">用户名</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                v-bind:value="userInfo.username"
                                placeholder="username"
                            >
                        </div>
                    </div>
                    <div class="column is-10 is-offset-1">
                        <label class="label">用户简介</label>
                        <div class="control">
                            <textarea
                                class="textarea"
                                v-bind:value="userInfo.bio"
                                placeholder="bio"
                            />
                        </div>
                    </div>
                </form>
            </container>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { mapState } from 'vuex';
import { FETCH_PROFILE } from '@/store/type/actions.type';

@Component
export default class User extends Vue {
  @State((state: RootState) => state.user.profile)
  public userInfo: UserSerializer;

  public mounted() {
    // not necessary
    this.$store.dispatch(FETCH_PROFILE, '111');
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';
.info-form {
  width: 100%;
  margin-top: 20px;
}
</style>
