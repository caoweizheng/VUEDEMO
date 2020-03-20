<template>
  <van-nav-bar
    :title="title"
      @click-left="onClickLeft">
     <van-icon name="arrow-left" color="rgb(19, 18, 18)" size="0.32rem" slot="left" />
  </van-nav-bar>
</template>

<script>
import { NavBar, Icon } from "vant";
export default {
  name: 'my-title',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  props: ['title']
}
</script>

<style lang="scss" scoped>

</style>


