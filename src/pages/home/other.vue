<template>
  <div class="p-s">
    <div class="other">
      <div class="div-r mr-xs">
        <span>div-r</span>
        <span>div-r</span>
      </div>
      <div class="div-l">
        <div class="div-l-t mb-xs">
          <span>div-l-t</span>
          <span>div-l-t</span>
        </div>
        <div class="div-l-b">
          <div class="div-l-b-l">
            <span>div-l-b-l</span>
            <span>div-l-b-l</span>
          </div>
          <div class="div-l-b-r">
            <span>div-l-b-r</span>
            <span>div-l-b-r</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'other',
};
</script>

<style lang="scss" scoped>
.other {
  display: flex;
  text-align: center;
  .div-r {
    width: 3rem;
    height: 3rem;
    background-color: $color_main;
  }
  .div-l {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 3rem;
    .div-l-t {
      height: 1rem;
      background-color: $color_danger;
      justify-content: space-around;
    }
    .div-l-b {
      flex: 1;
      display: flex;
      justify-content: space-between;
      background-color: $color_success;
      .div-l-b-l, .div-l-b-r{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .div-l-b-r {
       background-color: $color_warning;
      }
    }
  }
}
</style>


