<template>
  <div class="goods-list">
    <my-title :title="'商品列表'" />
    <div class="mb-xs">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="item in selectItems" :title="item.text" :key="item.id">
        </van-tab>
      </van-tabs>
    </div>
    <div class="p-s">
      <van-list @load="queryGoodsList" :finished="isFinish" :finished-text="finishedText">
        <van-cell class="mb-d clear-p" v-for="item in 10" :key="item">
          <a class="list-item">
            <div class="img-box mr-xs">
              <img src="https://tse1-mm.cn.bing.net/th/id/OIP.HGu4nDYFSlYtXhqqcg_y-gHaKY?w=134&h=187&c=7&o=5&pid=1.7" alt="">
            </div>
            <div class="item-l">
              <p class="title">雷米高 犬用驱虫一粒清阿苯达唑片 0.2g*4片</p>
              <div class="item-price-box">
                <div>
                  <p>价格</p>
                  <p>数量</p>
                </div>
                <img width="50" src="https://tse1-mm.cn.bing.net/th/id/OIP.HGu4nDYFSlYtXhqqcg_y-gHaKY?w=134&h=187&c=7&o=5&pid=1.7" alt="">
              </div>
            </div>
          </a>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import title from "@/components/title";
import { Tabs, Tab, List, Cell } from "vant";
export default {
  name: 'goodsList',
  components: {
    myTitle: title,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [List.name]: List,
    [Cell.name]: Cell,
  },
  data () {
    return {
      active: 0,
      selectItems: [],
      isFinish: false,
      finishedText: '没有了喔~~'
    }
  },
  async created () {
    let resp = await this.$http.queryNavigate()
    if(!resp || !resp.data) return
    this.selectItems = resp.data
  },
  methods: {
    async queryGoodsList () {
      // await
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  background-color: $color_void;
  .list-item {
    display: flex;
    .img-box {
      display: flex;
      align-items: center;
    }
    .item-l {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
      padding-top: 0.1rem;
      .title {
        height: 0.64rem;
        overflow: hidden;
        font-size: 0.24rem;
        line-height: 0.32rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 400;
      }
    }
    .item-price-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

