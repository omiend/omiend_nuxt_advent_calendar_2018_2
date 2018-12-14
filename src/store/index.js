export const state = () => ({
  title: "default - state"
})

export const mutations = {
  SET_TITLE (state, _title) {
    state.title = _title
  }
}
