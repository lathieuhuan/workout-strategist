import { createRouter, createWebHistory } from 'vue-router';
import { ExercisesView, HistoryView, ProfileView, TrackingView, WorkoutView } from '@/views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'workout',
      component: WorkoutView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExercisesView,
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: TrackingView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/ProfileView.vue'),
    // },
  ],
});

export default router;
