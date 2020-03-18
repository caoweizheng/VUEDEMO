<template>
  <common-nav :active="'search'"/>
</template>

<script>
import commonNav from "@/components/Nav";
export default {
  name: 'my-nav',
  components: {
    commonNav: commonNav
  },
  data () {
    return {
      // active: 'search'
    }
  }
}
</script>

