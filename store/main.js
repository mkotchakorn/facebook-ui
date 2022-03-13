export const state = () => ({
  posts: [],
})

export const mutations = {
  setState(state, params) {
    state[params[0]] = params[1]
  },
}
