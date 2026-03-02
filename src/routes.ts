import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from './pages/ProductsPage.vue'
import SingleProductsPage from './pages/SingleProductsPage.vue'
import IndexPage from './pages/IndexPage.vue'
import TodoPage from './pages/TodoPage.vue'
import TestPage from './pages/TestPage.vue'
import CurrencyConverterPage from './pages/CurrencyConverterPage.vue'
import CartPage from './pages/CartPage.vue'
import TodoSecondPage from './pages/TodoSecondPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  {
    path: '/todos',
    component: TodoPage,
  },
  {
    path: '/products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    component: SingleProductsPage,
  },
  {
    path: '/test',
    component: TestPage,
  },
  {
    path: '/exchange',
    component: CurrencyConverterPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/todo2',
    component: TodoSecondPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  //   routes: routes,
  routes,
})
