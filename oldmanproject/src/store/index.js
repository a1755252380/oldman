import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: {
      // 侧边栏默认打开的选项
      sideopen: "/index"
    }
  },
  mutations: {
    setsideopen(state, value) {
      state.sideopen = value
    }
  },
  getters: {
    getsideopen(state) {
      return state.index.sideopen
    }
  },
  actions: {},
  modules: {}
})
