import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: '',
      categories: [],
      status: '',
      number: 0,
    },
  },
  mutations: {
    set(state, payload) {
      state.tasks.push(payload)
      console.log(state.tasks)
    }
  },
  actions: {
    setTasks({commit}, task) {
      commit('set', task)
    }
  },
  modules: {
  }
})
