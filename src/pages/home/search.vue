<template>
  <van-search shape="round" :placeholder="placeholder"></van-search>
</template>

<script>
import { Search } from "vant";
export default {
  name: 'search',
  data () {
    return {
      placeholder: '请输入搜索关键词'
    }
  },
  components: {
    [Search.name]: Search
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
</style>


