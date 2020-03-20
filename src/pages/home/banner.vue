<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item :key="idx" v-for="(item, idx) in banners">{{item.text}}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem  } from "vant";
export default {
  name: 'banner',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      banners: []
    }
  },
  async created () {
    let resp  = await this.$http.queryBanners()
    if(!resp || !resp.data) return
    this.banners = resp.data
  },
  methods : {
  }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 3rem;
  line-height: 3rem;
  .van-swipe-item {
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    background-color: $color_primary;
  }
}
</style>


