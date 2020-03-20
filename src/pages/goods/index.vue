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
        <van-cell class="mb-d clear-p" v-for="item in goodsList" :key="item.id">
          <a class="list-item">
            <div class="img-box mr-xs">
              <img :src="item.imgPath" alt="">
            </div>
            <div class="item-l">
              <p class="title">{{item.subject}}</p>
              <div class="item-price-box">
                <div>
                  <p class="price">￥{{item.sale_price}}</p>
                  <p class="count">
                    <span>{{item.comments}}</span>
                    <span>{{item.sold}}</span>
                  </p>
                </div>
                <img width="50" src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" alt="">
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
      goodsList: [],
      isFinish: false,
      finishedText: '没有了喔~~',
      pageNumber: 0
    }
  },
  async created () {
    let resp = await this.$http.queryNavigate()
    if(!resp || !resp.data) return
    this.selectItems = resp.data
  },
  methods: {
    async queryGoodsList () {
      let resp = await this.$http.queryGoodsList({pageNumber: this.pageNumber ++ , pageSize: 20})
      if(!resp || !resp.data || !resp.data.length){
        this.isFinish = true
        return
      }
      this.goodsList = this.$_.concat(this.goodsList, resp.data)
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
      width: 2rem;
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
      .price {
        color: $color_danger;
        font-size: 0.28rem;
      }
      .count {
        span {
          font-size: 0.24rem;
          color: $color_sub;
        }
      }
    }
  }
}
</style>

