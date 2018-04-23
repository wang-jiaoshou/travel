<template>
<div class="wrapper">
   <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id" >
      <img class= "swiper-img" :src= "item.imgUrl" >
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: 'swiper-pagination',
        loop: true
      },
      swiperList: [{
        id:'001',
        imgUrl:'./700e0n000000egwuwE5D3_1536_307_25.jpg'
      },{
        id:'002',
        imgUrl:'././700k0r000000gzz223169_1536_307_25.jpg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .wrapper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    // width: 100% height: 31.25vm 抖动
    background: #eee
    .swiper-img
      width: 100%
</style>
