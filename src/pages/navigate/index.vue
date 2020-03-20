<template>
  <div class="my-nav">
    <search class="mb-xs"/>
    <van-tree-select
      height="100%"
      :main-active-index.sync="activeIndex"
      :items="selectItems"
      @click-nav="queryContent">
      <template slot="content">
        <van-grid :column-num="3">
          <van-grid-item v-for="content in contents" :key="content.id" @click="showGoodsInfo(content)">
            <span class="mb-xs">
              {{content.text}}
            </span>
            <img
            class="nav-item-img"
            v-lazy="content.imgPath" />
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
    <common-nav :active="'nav'"/>
  </div>
</template>

<script>
import commonNav from "@/components/Nav";
import { TreeSelect, Image, Grid, GridItem } from "vant";
import search from '../home/search'
export default {
  name: 'my-nav',
  components: {
    commonNav: commonNav,
    search:search,
    [TreeSelect.name]: TreeSelect,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data () {
    return {
      activeIndex: 0,
      selectItems: [],
      contents: []
    }
  },
  async created () {
    let resp = await this.$http.queryNavigate()
    if(!resp || !resp.data) return
    this.selectItems = resp.data

    this.queryContent(0)
  },
  methods: {
    async queryContent (index,text) {
      // console.log(this.selectItems[index].text)
      let resp = await this.$http.queryNavigateContents({title: this.selectItems[index].text})
      if(!resp || !resp.data) return
      this.contents = resp.data
    },
    showGoodsInfo (content) {
      this.$router.push({
        path: 'goodsList',
        query: {
          title: content.text
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-nav {
  padding-top: 1.08rem;
  .nav-item-img {
    width: 1rem;
    height: 1rem;
  }
}
</style>


