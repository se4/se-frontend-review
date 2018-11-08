<template></template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
  @Prop({ default: 40, type: Number })
  public size: number;
}
</script>

<style lang="sass">

</style>
