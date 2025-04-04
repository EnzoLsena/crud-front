import { createRouter, createWebHistory } from 'vue-router'
import ClientsView from '@/views/ClientsView.vue'
import ProductsView from '@/views/ProductsView.vue'
import StoresView from '@/views/StoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/clients' 
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoresView,
    },
  ],
})

export default router
