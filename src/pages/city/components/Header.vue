<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    .header-back
      width: .64rem
      position:absolute
      top: 0
      left: 0
      text-align: center
      font-size: .4rem
      color: #fff
</style>
