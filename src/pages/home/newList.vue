<template>
  <div class="newList p-s">
    <van-list @load="onLoad" :finished="finished" :finished-text="finishedText">
      <van-cell class="mb-d clear-p" v-for="item in dataList" :key="item.id">
        <div class="new-item">
          <div class="item-title-box mr-sm p-s">
            <div class="item-title">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div>
            <p>{{item.text}}</p>
            <span class="item-time">{{item.time}}</span>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant";
export default {
  name: 'newList',
  components: {
    [Cell.name]: Cell,
    [List.name]: List
  },
  data () {
    return {
      dataList: [],
      pageNum: 0,
      finished: false,
      finishedText: '没有了喔~~~'
    }
  },
  methods: {
    async onLoad () {
      // setTimeout(() => {
      //   this.dataList.push(this.dataList.length + 1)
      //   this.dataList.length > 40 ? true: false
      // }, 1000);
      let resp = await this.$http.queryDataList({pageSize: 20, pageNum: this.pageNum++})
      if(!resp || !resp.data || !resp.data.length) {
        this.finished = true
      }
      this.dataList = this.$_.concat(this.dataList, resp.data)
    }
  },
  // async created () {
  //   let resp = await this.$http.queryDataList({pageSize: 20, pageNum: this.pageNum})
  //   if(!resp || !resp.data) return
  //   this.dataList = resp.data
  // }

}
</script>

<style lang="scss" scoped>
  .new-item {
    display: flex;
    // .item-title-box {
    //   background-color: $color_title;
    //   font-weight: 600;
    //   color: $color_void;
    // }
    // .item-time {
    //   font-size: 0.24rem;
    // }
    .item-title-box {
      background-color: $color_title;
      .item-title {
        height: 100%;
        color: $color_void;
        margin: auto 0;
        display: flex;
        align-items: center;
      }
    }
  }
</style>

