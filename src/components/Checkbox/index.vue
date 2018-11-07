<template>
  <label class="checkbox" @click="change">
    <input
      type="checkbox"
      ref="checkboxElement"
      v-bind:checked="checked"
      @change="change($event.target)"
    >
    {{label}}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from 'vue-property-decorator';

@Component
export default class CustomedCheckbox extends Vue {
  @Model('change', { type: Number, default: 0 })
  public value: number;

  @Prop({ default: '' })
  private label: string;

  get checked() {
    return this.value === 0 ? false : true;
  }

  @Emit()
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
