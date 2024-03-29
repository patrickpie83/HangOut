import { createRouter, createWebHashHistory } from 'vue-router'
// 匯入組件
import HomeView from '../views/Official/HomeView.vue'

//定義路由
//path 設定路由
//component 動態匯入對應組件
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/Official/AboutView.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/Login/LoginView.vue'),
    
  },
  {
    path: '/signup',
    name: 'signup',
    component: ()=> import('../views/Login/SignupView.vue')
  },
  {
    path: '/browse',
    name:'browse',
    component: () => import('../views/ChatRoom/BrowseView.vue')
  },
  {
    path: '/person/:id',
    name: 'person',
    component: ()=> import('../views/ChatRoom/PersonView.vue')
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: () => import('../views/ChatRoom/AboutMeView.vue'),
  },
  {
    path: '/chatroom',
    component: () => import('../views/ChatRoom/ChatRoomView.vue'),
    children:[
      {
        // 迎接頁
        path: '',
        name:'chatWelcome',
        component: () => import('../views/ChatRoom/ChatWelcome.vue'),
      },
      {
        path: ':targetId',
        name:'target',
        component: () => import('../views/ChatRoom/ChatRoomTarget.vue'),
      },
    ]
  },
  { 
    //使用者網址輸入錯誤防呆
    path: '/:domain(.*)*', 
    name: 'NotFound', 
    component: ()=> import('../views/NotFoundView.vue')
  }

]



const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
