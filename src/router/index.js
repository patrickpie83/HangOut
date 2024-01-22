import { createRouter, createWebHashHistory } from 'vue-router'
// 匯入組件
import HomeView from '../views/Official/HomeView.vue'


//定義路由
//path 設定路由
//component 對應組件
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
    children:[
      {
        path: '',
        component: () => import('../views/Login/LoginView.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: ()=> import('../views/Login/SignupView.vue')
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
