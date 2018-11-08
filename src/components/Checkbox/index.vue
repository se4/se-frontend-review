<template>
  <!-- <div class="columns">
    <div class="column">
      <div
        @click="change(1)"
        :class="{'button':true,'is-success':value===1,'is-small':true,'is-fullwidth':true}"
      >已完成</div>
    </div>
    <div class="column">
      <div
        @click="change(0)"
        :class="{'button':true,'is-danger':value===0,'is-small':true,'is-fullwidth':true}"
      >未完成</div>
    </div>
  </div>-->
  <!-- <div class="control columns">
    <div class="column">
      <label class="radio">
        <input type="radio" @change="change(1)" :name="name">
        已完成
      </label>
    </div>
    <div class="column">
      <label class="radio">
        <input type="radio" @change="change(0)" :name="name">
        未完成
      </label>
    </div>
  </div>-->
  <label class="checkbox" @click="change">
    <input
      type="checkbox"
      ref="checkboxElement"
      v-bind:checked="checked"
      @change="change($event.target)"
    >
    {{name}}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from 'vue-property-decorator';

@Component
export default class CustomedCheckbox extends Vue {
  @Model('change', { type: Number, default: 0 })
  public value: number;

  @Prop({ default: '' })
  private name: string | number;

  get checked() {
    return this.value === 0 ? false : true;
  }

  @Emit()
  // public change(num: number) {
  //   return num;
  // }
  public change(target: HTMLFormElement) {
    if (target.checked) {
      return 1;
    } else {
      return 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
