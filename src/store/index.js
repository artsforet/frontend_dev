import { createStore } from 'vuex'
import axios from 'axios' // Assuming you're using Axios for API calls

export const store = createStore({
  state: {
    // authenticated: false, // User authentication status
    // user: null, // User data
  },
  mutations: {
    // setAuth: (state, auth) => {
    //   state.authenticated = auth;
    // },
    // setUser: (state, user) => {
    //   state.user = user;
    // },
  },
  actions: {
    // async login(context, credentials) {
    //   try {
    //     const response = await axios.post('/api/auth/login', credentials);
    //     const user = response.data; // Assuming response contains user data
    //     alert(user.token);
    //     // Update authentication state and user data
    //     context.commit('setAuth', true);
    //     context.commit('setUser', user);
    //     localStorage.setItem('token', user.token);
    //     axios.defaults.headers.common['Authorization'] = `${user.token}`;
    //   } catch (error) {
    //     console.error('Error logging in:', error);
    //     // Handle login errors (e.g., display error message)
    //   }
    // },
    // async logout(context) {
    //   try {
    //     await axios.post('/api/auth/logout'); // Assuming logout API endpoint
    //     context.commit('setAuth', false);
    //     context.commit('setUser', null);
    //   } catch (error) {
    //     console.error('Error logging out:', error);
    //     // Handle logout errors (e.g., display error message)
    //   }
    // },
  },
  getters: {
    // isAuthenticated: (state) => state.authenticated,
    // currentUser: (state) => state.user,
  },
});

export default store;