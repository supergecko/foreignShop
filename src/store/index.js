import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: '',
        email: ''
    },
    mutations: {
        setUserName(state, newUserName) {
            state.userName = newUserName
        },
        setEmail(state, newEmail) {
            state.email = newEmail 
        }
    }
})

export default store