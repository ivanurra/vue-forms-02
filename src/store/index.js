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
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload)
    },
    task(state, payload) {
      state.tasks = state.tasks.find(item => item.id === payload)
    }
  },
  actions: {
    setTasks({commit}, task) {
      commit('set', task)
    },
    deleteTasks({ commit }, id) {
      commit('delete', id)
    },
    setTask({ commit }, id) {
      commit('task', id)
    }
  },
  modules: {
  }
})
