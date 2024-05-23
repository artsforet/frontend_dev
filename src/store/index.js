import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state: {
    user: null,
    playlists: [],
    currentTrack: null,
    isPlaying: false,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist;
    },
    setCurrentTrack(state, track) {
      state.currentTrack = track;
    },
    setIsPlaying(state, isPlaying) {
      state.isPlaying = isPlaying;
    },
    ADD_SONG_TO_PLAYLIST(state, song) {
      state.playlists.push(song);
    }
  },
  actions: {
    async playPauseAudio({ commit, state }, song) {
      try {
        const response = await axios.post('/playlists/save', {
          userId: state.userId,
          song: song
        });
        if (response.status === 200) {
          commit('ADD_SONG_TO_PLAYLIST', song);
        }
      } catch (error) {
        console.error('Failed to save song to playlist:', error);
      }
    },
    async fetchPlaylist({ commit, state }) {
      try {
        if (state.user) {
          console.log("STATE USER" + state.user.id)
          const response = await axios.get(`/auth/${state.user.id}/playlists`); // 유저의 플레이리스트를 받아오는 API 엔드포인트
          commit('setPlaylist', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    },
    async fetchUser({ commit }) {
      try {
        const response = await axios.get('/auth/user');
        const user = response.data;
        if (user.email) {
          commit('setUser', user);
          commit('setAuth', true);
        } else {
          commit('setUser', null);
          commit('setAuth', false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        commit('setUser', null);
        commit('setAuth', false);
      }
    },
    async setAuth({ commit }, isAuthenticated) {
      commit('setAuth', isAuthenticated);
    },
    async loginUser({ commit }, userData) {
      try {
        const response = await axios.post('/api/login', userData);
        commit('setUser', response.data.user);
        await this.dispatch('fetchPlaylist', response.data.user.id);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    playTrack({ commit }, track) {
      commit('setCurrentTrack', track);
      commit('setIsPlaying', true);
    },
    pauseTrack({ commit }) {
      commit('setIsPlaying', false);
    },
  },
  getters: {
    isLoggedIn: state => !!state.user,
    currentTrack: state => state.currentTrack,
    isPlaying: state => state.isPlaying,
    getUser(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUserId(state) {
      return state.user ? state.user.id : null;
    },
    getPlaylists: state => state.playlists
  }
});

export default store;