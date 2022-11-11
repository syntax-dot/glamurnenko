import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BlogPage from '../views/BlogPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import FreePage from '../views/FreePage.vue'
import ReviewsPage from '../views/ReviewsPage.vue'
import SeminarsPage from '../views/SeminarsPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import TrainingsPage from '../views/TrainingsPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/blog', component: BlogPage, name: 'blog' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
  { path: '/free', component: FreePage, name: 'free' },
  { path: '/reviews', component: ReviewsPage, name: 'reviews' },
  { path: '/services', component: ServicesPage, name: 'services' },
  { path: '/seminars', component: SeminarsPage, name: 'seminars' },
  { path: '/trainings', component: TrainingsPage, name: 'trainings' },
]
