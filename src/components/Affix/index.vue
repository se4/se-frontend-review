<template>
  <div v-bind:class="{}">
    <slot>AffixedComponent</slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from 'vue-property-decorator';

@Component
export default class Affix extends Vue {
  @Prop({default: 50, type: Number})
  public offsetTop: number;
  @Prop({default: 50, type: Number})
  public offsetBottom: number;


  
}
</script>

<style lang="scss" scoped>
</style>
