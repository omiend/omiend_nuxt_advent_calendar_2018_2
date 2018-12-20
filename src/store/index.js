export const state = () => ({
  counter: 0,
  click_date: ""
})

export const mutations = {
  increment_mutation (state, payload) {
    state.counter++
    state.click_date = payload.click_date
  }
}

export const actions = {
  increment_action ({ commit }, payload) {
    commit('increment_mutation', { click_date: payload.click_date })
  }
}