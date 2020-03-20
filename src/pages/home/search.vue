<template>
  <van-sticky>
    <div class="search">
      <van-search shape="round" :placeholder="placeholder"></van-search>
    </div>
  </van-sticky>
</template>

<script>
import { Search, Sticky} from "vant";

export default {
  name: 'search',
  data () {
    return {
      placeholder: '请输入搜索关键词'
    }
  },
  components: {
    [Search.name]: Search,
    [Sticky.name]: Sticky,
  }
}
</script>

<style lang="scss" scoped>
  .van-search__content--round {
    border-radius: 999rem;
  }
  .van-search {
    background-color: $color_primary;
  }
  .search {
    position: fixed;
    width: 100%;
    height: 1.08rem;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: $color_void;
  }
</style>


