<template>
  <div class="doc">
    <Header></Header>
    <SideBar></SideBar>
    <div class="layout">
      <div id="flyli" class="content" ref="content">
        <router-view></router-view>
      </div>
      <div class="anchor" v-if="anchorList.length > 0">
        <div class="list">
          <div class="item" v-for="(item, index) in anchorList" :key="index" :class="'item-' + item.anchor">
            <a @click.prevent="custormAnchor(item.id)">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header';
import SideBar from './components/side-bar';
export default {
  data() {
    return {
      navList: [],
      anchorList: []
    };
  },
  components: {
    Header,
    SideBar
  },
  watch: {
    $route: {
      handler(newV, oldV) {
        this.$nextTick(function () {
          const anchorArr = document.querySelectorAll('.heading-title');
          this.anchorList = [...anchorArr].map((item, index) => {
            return {
              id: item.id,
              anchor: item.getAttribute('anchor'),
              name: item.innerText
            };
          });
        });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    custormAnchor(anchorName) {
      let anchorElement = document.getElementById(anchorName);
      document.documentElement.scrollTop = anchorElement.offsetTop - 80;
    }
  }
};
</script>
<style lang="less">
@import './style/index.less';
.doc {
  color: #515151;
  .layout {
    padding: 200px 40px 200px 660px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .content {
      flex: 1;
      min-width: 600px;
    }

    .anchor {
      flex-shrink: 0;
      width: 600px;

      .list {
        position: fixed;
        right: 60px;
        top: 300px;
        z-index: 99;
        width: 360px;

        font-size: 28px;
        box-sizing: border-box;

        .item {
          color: #666;
          line-height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s ease-out;
          padding-left: 60px;
          &.item-h1,
          &.item-h2 {
            font-weight: bold;
          }
          &.item-h3 {
            font-size: 14px;
            text-indent: 1em;
          }
          &.item-h4,
          &.item-h5,
          &.item-h6 {
            display: none;
          }
          a {
            color: #666;
            text-decoration: none;
          }

          &:hover {
            a {
              color: @anchor-hover-color;
            }
          }
        }
      }
    }
  }
}
</style>
