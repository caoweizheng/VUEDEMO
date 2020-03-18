<template>
  <div>
    <van-tabbar v-model="focusName">
      <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="nav" to="/nav" icon="search">分类</van-tabbar-item>
      <van-tabbar-item name="search" to="search" icon="friends-o">发现</van-tabbar-item>
      <van-tabbar-item name="mine" to="mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem  } from 'vant'
export default {
  name: 'common-nav',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      focusName: this.active
    }
  },
  props: ['active'],
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar-item--active {
  color: $color_primary;
}
</style>


