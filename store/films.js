import API from '~/core/api'

export const state = () => ({
  films: []
})

export const getters = {
  getFilms: (state) => state.films,
}

export const mutations = {
  SET_FILMS(state, payload) {
    state.films = payload
  },
}

export const actions = {
  async fetchFilms({ commit, state }, payload) {
    await API.films.get('films').then(( { data } ) => {
      console.log(data.results)
      commit('SET_FILMS', data.results)
    })
  },
}
