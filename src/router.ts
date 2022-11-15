import Vue from 'vue';
import VueRouter from 'vue-router';

// https://github.com/vuejs/vue-router/issues/2105#issuecomment-761854147
const RouterPassThrough = Vue.component('router-pass-through', {
    render: (createElem) => createElem('router-view'),
});

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/HomeView.vue'),
        },
        {
            path: '/games',
            name: 'games',
            component: RouterPassThrough,
            redirect: { name: 'series-list' },
            children: [
                {
                    path: 'series-list',
                    name: 'series-list',
                    component: () => import('./views/SeriesListView.vue'),
                },
            ],
        },
    ],
});

export default router;
