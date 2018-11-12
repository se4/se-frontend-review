<template>
  <div v-bind:style="[sizeProps, positionProps]" v-on>
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
  @Prop()
  public width?: string;

  private sizeProps = {
    width: this.width ? this.width : '100%',
    border: '1px black solid'
  }

  private positionProps = {
    position: 'relative',
  }

  private justifyPosition(offset: number) {
    window.requestAnimationFrame(this.justifyPosition);
  }

  private getTargetRect(target: HTMLElement): ClientRect {
    return (target.getBoundingClientRect() as ClientRect);
  }

  private  getOffset(element: HTMLElement, target: HTMLElement) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = this.getTargetRect(target);

    const scrollTop = this.getSroll(target)[0];
    const scrollLeft = this.getSroll(target)[1];

    const docElem = window.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;

    return {
      top: elemRect.top - targetRect.top +
            scrollTop - clientTop,
      left: elemRect.left - targetRect.left +
            scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height,
    };
  }

  private getSroll(target: HTMLElement ): number[] {
    const scrollTop = target.scrollTop;
    const scrollLeft = target.scrollLeft;
    return [scrollTop, scrollLeft];
  }

}
</script>

<style lang="scss" scoped>
</style>
