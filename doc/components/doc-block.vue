<template>
  <div class="doc-block" :class="[blockClass]">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight language-html line-numbers">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="doc-block-control" ref="control" flex="main:center cross:center" @click="isExpanded = !isExpanded">
      <i :class="[iconClass]" style="font-size: 18px;"></i>
      <span>{{ controlText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'docBlock',
  data() {
    return {
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },
  computed: {
    blockClass() {
      return `doc-${this.$router.currentRoute.path.split('/').pop()}`;
    },
    iconClass() {
      return this.isExpanded ? 'l-icon l-icon-up' : 'l-icon l-icon-down';
    },
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码';
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0];
    },
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight;
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0';
    }
  },
  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0];
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%';
      }
    });
  }
};
</script>

<style lang="less" scoped>
.doc-block {
  margin-top: 30px;
  border: solid 1px #ebebeb;
  border-radius: 2px;
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .source {
    padding: 50px 30px;
  }
  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 32px;
    line-height: 40px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 1.7;
      font-size: 32px;
    }
    code {
      color: #fff;
      background-color: rgba(53, 104, 255, 0.5);
      margin: 0 8px;
      display: inline-block;
      padding: 3px 10px;
      font-size: 30px;
      border-radius: 3px;
      height: 30px;
      line-height: 40px;
    }
  }
  .highlight {
    pre {
      margin: 0;
      padding: 20px 20px 20px 100px !important;
    }
    code {
      &.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        &::before {
          content: none;
        }
      }
    }
  }
  .doc-block-control {
    border-top: solid 1px #eaeefb;
    height: 88px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    i {
      font-size: 22px;
      line-height: 88px;
      transition: 0.3s;
      margin-right: 20px;
    }
    > span {
      font-size: 28px;
      line-height: 88px;
      transition: 0.3s;
    }
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
</style>
