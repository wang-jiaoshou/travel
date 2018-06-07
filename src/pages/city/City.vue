<template>
  <div>
    <city-header></city-header>
    <city-search  :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabel :cities="cities" @change="handleLetterChange"></city-alphabel>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabel from './components/Alphabel'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabel
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleCityetCityInfoSucc)
    },
    handleCityetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
      // console.log(this.hotCities)
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
