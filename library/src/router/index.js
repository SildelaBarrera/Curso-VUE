import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import('../views/BooksView.vue')
        },
        {
            path: '/addBook',
            name: 'Add Book',
            component: () => import('../views/AddBookView.vue')
        },
        {
            path: '/editBook',
            name: 'Edit Book',
            component: () => import('../views/EditBookView.vue')

        }

    ]
})

export default router