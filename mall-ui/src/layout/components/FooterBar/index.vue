<template>
  <van-tabbar v-model="selected">
    <van-tabbar-item to="/home/index" replace>
      <span><b>首页</b></span>
      <span slot="icon" class="iconfont iconshouye"></span>
    </van-tabbar-item>
    <van-tabbar-item to="/type/index" replace>
      <span><b>分类</b></span>
      <span slot="icon" class="iconfont iconleibie"></span>
    </van-tabbar-item>
    <van-tabbar-item to="/user/index" replace>
      <span><b>我的</b></span>
      <span slot="icon" class="iconfont iconwode"></span>
    </van-tabbar-item>


  </van-tabbar>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant'
  const tabBar = ['home-index', 'type-index' , 'user-index']
  export default {
    name: '',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data: () => ({
      selected: 0
    }),
    computed: {},
    methods: {},
    watch: {},
    filters: {},
    created () {
      this.selected = tabBar.findIndex(item => item === this.$route.name);
    }

  }
</script>
