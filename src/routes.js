import Splash from './pages/splash';
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import NotFoundPage from './pages/not-found.vue';


export default [
    {
        path: '/',
        component: Splash,
    },
    {
        path: '/home/',
        component: HomePage
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];
