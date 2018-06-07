<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabel',
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (el) {
      // console.log(el.target.innerText)
      this.$emit('change', el.target.innerText)
    },
    handleTouchStart () {
      this.touchstatus = !this.touchstatus
    },
    handleTouchMove (el) {
      if (this.touchstatus) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = el.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(startY, touchY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchstatus = !this.touchstatus
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      // Object.keys(this.cities)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
