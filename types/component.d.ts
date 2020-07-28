import Vue from 'vue';

declare class UIComponent extends Vue {
  static name: string;
  static install(vue: typeof Vue): void;
}

export const version: string;
export function install(vue: typeof Vue): void;

export class Button extends UIComponent {}
export class Cell extends UIComponent {}
export class Collapse extends UIComponent {}
export class CollapseItem extends UIComponent {}
export class Coupon extends UIComponent {}
export class Card extends UIComponent {}
export class Dialog extends UIComponent {}
export class Divider extends UIComponent {}
export class DropdownMenu extends UIComponent {}
export class DropdownMenuItem extends UIComponent {}
export class GoodsAction extends UIComponent {}
export class GoodsActionIcon extends UIComponent {}
export class GoodsActionButton extends UIComponent {}
export class Grid extends UIComponent {}
export class GridItem extends UIComponent {}
export class Graphic extends UIComponent {}
export class Icon extends UIComponent {}
export class Image extends UIComponent {}
export class Loading extends UIComponent {}
export class NoticeBar extends UIComponent {}
export class NoResult extends UIComponent {}
export class Overlay extends UIComponent {}
export class Popup extends UIComponent {}
export class Radio extends UIComponent {}
export class RadioGroup extends UIComponent {}
export class SubmitBar extends UIComponent {}
export class Sku extends UIComponent {}
export class SwipeCell extends UIComponent {}
export class Swipe extends UIComponent {}
export class Scroller extends UIComponent {}
export class Switch extends UIComponent {}
export class Search extends UIComponent {}
export class BackTop extends UIComponent {}
export class Tabbar extends UIComponent {}
export class TabbarItem extends UIComponent {}
export class Tag extends UIComponent {}
export class Tab extends UIComponent {}
export class Toast extends UIComponent {}

declare module 'vue/types/vue' {
  interface Vue {
    $ktoast: any;
    $loadingStart: any;
    $loadingEnd: any;
  }
}
