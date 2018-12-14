export const state = () => ({
  title: "default - state",
  mounted_time: "",
  async_data_time: ""
})

export const mutations = {
  SET_TITLE (state, payload) {
    state.title = payload.title
  },
  SET_MOUNTED_TIME (state, payload) {
    state.mounted_time = payload.time
  },
  SET_ASYNC_DATA_TIME (state, payload) {
    state.async_data_time = payload.time
  }
}
