import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    userData:{},
    validToken: localStorage.getItem('token') || '',
    loggedIn: false ,
    viewCount:0,
    userId :localStorage.getItem('userId') || ''
  },
  getters: {
    validToken:state => state.validToken,
    userData:state   => state.userData,
    loggedIn: state  => state.loggedIn,
    viewCount: state => state.viewCount,
    userId : state => state.userId
  },
  mutations: {
    setUserValidToken(state,value){
      state.validToken = value
      localStorage.setItem('token', value);
    },
    setUserData(state,value){
      state.userData = value
      state.userId = value.id
      console.log('userData',value)
      localStorage.setItem('userId',value.id)
      localStorage.setItem('userData',JSON.stringify(value))
    },
    setLoggedIn(state, value) { 
      state.loggedIn = value
    },
    setPostViewCount(state,value){
      state.viewCount = value
    },
    setUserId(state,value){
      state.userId = value
    }
  },
  actions: {
    setValidToken({commit},value){
      commit('setUserValidToken',value)
    },
    setUserData({commit},value){
      commit('setUserData',value)
    },
    setLoggedIn({ commit }, value) { 
      commit('setLoggedIn', value)
    },
    // central Post View Count
    fetchPostViewCount({ commit }, { params }) {
      axios.post(`http://localhost:8056/api/user/post/${params.postId}/activity-log-view`,params)
          .then(response => {
              commit('setPostViewCount',  response.data.viewData );
          })
          .catch(error => {
              console.error('Failed to fetch post view count', error);
          });
    },
    // checkToken LogIn or Not
      checkTokenForLogIn({commit}){
        const existId = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const userObject = localStorage.getItem('userData');
        const userData = userObject ? JSON.parse(userObject) : null;

        if(existId){
            commit('setUserValidToken',existId);
            commit('setLoggedIn',true);
            commit('setUserId',userId);
            commit('setUserData',userData);
        }else{
          commit('setUserValidToken','');
          commit('setLoggedIn',false);
          commit('setUserId','');
          commit('setUserData',{});
        }
      }
  },
  modules: {
  }
})
