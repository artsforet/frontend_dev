import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/User/Login/LoginView.vue";
import TestView from '@/views/TestView.vue'
import SongPage from '@/views/HeaderCategories/SoundFactory/SongPage.vue'
import RegisterView from '@/views/User/Login/RegisterView.vue'
import SongAlbum from '@/views/HeaderCategories/SoundFactory/SongAlbum.vue'
import MusicDetail from '@/views/MusicDetail.vue'
import AlbumDetail from '@/views/HeaderCategories/SoundFactory/AlbumDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/detail',
      name: 'musicDetail',
      component: MusicDetail

    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/soundfactory/song',
      name: 'songpage',
      component: SongPage
    },
    {
      path: '/soundfactory/albumdetail',
      name: 'albumdetail',
      component: AlbumDetail
    },
    {
      path: '/soundfactory/album',
      name: 'songalubm',
      component: SongAlbum
    },
  ]
})

export default router
