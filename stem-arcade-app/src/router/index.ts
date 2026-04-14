import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import SmashFighters from '../games/smash/SmashFighters.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/play/:id',
      name: 'play',
      component: GameView,
      props: true
    },
    {
      path: '/games/smash',
      name: 'smash',
      component: SmashFighters
    }
  ]
});

export default router;
