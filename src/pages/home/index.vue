<template>
  <div id="home">
    <search class="mb-xs"/>
    <banner  class="mb-xs" />
    <grid class="mb-xs" />
    <other class="mb-xs" />
    <new-list />
    <common-nav :active="'home'"/>
  </div>
</template>

<script>
import commonNav from "@/components/Nav"
import banner from './banner'
import search from './search'
import grid from './grid'
import other from './other'
import newList from './newList'
export default {
  name: 'my-home',
  components: {
    commonNav: commonNav,
    banner: banner,
    search: search,
    grid: grid,
    other: other,
    newList: newList,
  }
}
</script>
<style lang="scss" scoped>
  #home {
    display: flex;
    flex-direction: column;
    background-color: $color_void;
    padding-bottom: 1rem;
    padding-top: 1.08rem;
    clear: both;
  }
</style>





