<template>
  <div id="home">
    <search  class="mb-xs" />
    <banner  class="mb-xs" />
    <grid />
    <common-nav :active="'home'"/>
  </div>
</template>

<script>
import commonNav from "@/components/Nav"
import banner from './banner'
import search from './search'
import grid from './grid'
export default {
  name: 'my-home',
  components: {
    commonNav: commonNav,
    banner: banner,
    search: search,
    grid: grid,
  }
}
</script>
<style lang="scss" scoped>
  #home {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>





