<template>
  <van-grid class="mg-grid">
    <van-grid-item v-for="(item, idx) in grids" :key="idx" :icon="item.icon" :text="item.text">

    </van-grid-item>
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'grid',
  components: {
    [Grid.name]: Grid,
    [GridItem.name] : GridItem
  },
  data () {
    return {
      grids: []
    }
  },
  async created () {
    let resp = await this.$http.queryGrid()
    if(!resp || !resp.data) return
    this.grids = resp.data
  }
}
</script>
<style lang="scss" scoped>
</style>


