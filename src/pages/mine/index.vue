<template>
  <common-nav :active="'mine'"/>
</template>

<script>
import commonNav from "@/components/Nav";
export default {
  name: 'my-mine',
  components: {
    commonNav: commonNav
  },
  data () {
    return {
      // active: 'mine'
    }
  }
}
</script>

