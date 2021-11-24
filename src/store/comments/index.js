const url = 'https://bigcountry-task.vercel.app/comments.json'

const state = {
  comments: [],
  currentNumberPage: null
}

const mutations = {
  setComments(state, comments) {
    state.comments = comments
  },
  setCurrentNumberPage(state, value) {
    state.currentNumberPage = value
  }
}

const actions = {
  getComments({ commit }) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Что-то пошло не так! Код ошибки:' + response.status)
          return
        }
        response.json().then(data => {
          commit('setComments', data)
        })
      })
      .catch(error => {
        console.log('Error:', error)
      })
  },

  async submitComment({commit}, { params }) {
    console.log('Params', params);
    fetch(url, {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
      .then(response => {
        if(response.status !== 200 || response.status !== 201) {
          const tempComments = state.comments
          tempComments.push(params)
          commit('setComments', tempComments)
        }
        console.log('RES', response.json());
      })
      .catch(error => {
        console.log('Error:', error);
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}