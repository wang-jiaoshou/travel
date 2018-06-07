export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
    localStorage.city = city
  }
}
