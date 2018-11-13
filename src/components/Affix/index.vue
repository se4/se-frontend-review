<template>
  <div v-bind:style="[positionProps]">
    <slot>AffixedComponent</slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from 'vue-property-decorator';

@Component
export default class Affix extends Vue {
  @Prop()
  public offsetTop?: number;
  @Prop()
  public offsetBottom?: number;
  @Prop()
  public target?: () => Window | HTMLElement | null;// 相对谁静止
  
  public beforeMount() {
    this.justifyPosition();
  }

// 用户获取父元素的函数
  public defaultGetTarget(): any {
    if(this.target){
      return this.target();
    }
    else{
      return window;
    }
  }

  private justifyPosition() {
    const targetNode = this.defaultGetTarget();
    const scrollTop = this.getScroll(targetNode)[0];
    const affixNode = this.$el;
    const elemOffset = this.getOffset(affixNode, targetNode);
    const elemSize = {
      width: affixNode.offsetWidth,
      height: affixNode.offsetHeight,
    };
    window.requestAnimationFrame(this.justifyPosition);
  }

  private getScroll(target: HTMLElement ): number[] {
    const scrollTop = target.scrollTop;
    const scrollLeft = target.scrollLeft;
    return [scrollTop, scrollLeft];
  }

  private getTargetRect(target: HTMLElement): ClientRect {
    return (target.getBoundingClientRect() as ClientRect);
  }

  private  getOffset(element: HTMLElement, target: HTMLElement) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = this.getTargetRect(target);

    const scrollTop = this.getScroll(target)[0];
    const scrollLeft = this.getScroll(target)[1];

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

}
</script>

<style lang="scss" scoped>
</style>
