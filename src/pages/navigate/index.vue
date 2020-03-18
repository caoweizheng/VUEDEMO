<template>
  <common-nav :active="'nav'"/>
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
      // active: 'nav'
    }
  }
}
</script>

