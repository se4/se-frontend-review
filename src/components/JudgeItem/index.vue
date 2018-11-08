<template>
  <div :class="{'judge-section':true,'judge-success':success}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class JudgeItem extends Vue {
  @Prop({ type: Boolean })
  public success!: boolean;
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/_all.sass';
.judge-section {
  background: $white;
  border: 1px solid $grey-lighter;
  border-left: 4px solid $danger;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(161, 161, 161, 0.082);
}

.judge-success {
  border-left: 4px solid $success;
}
</style>

