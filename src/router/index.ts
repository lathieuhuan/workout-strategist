import { createRouter, createWebHistory } from 'vue-router';
import {
  ExercisesView,
  HistoryView,
  NotFoundView,
  ProfileView,
  TrackingView,
  WorkoutView,
} from '@/views';
import { ERouteName } from '@/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ERouteName.WORKOUT,
      component: WorkoutView,
    },
    {
      path: '/profile',
      name: ERouteName.PROFILE,
      component: ProfileView,
    },
    {
      path: '/history/:any*',
      name: ERouteName.HISTORY,
      component: HistoryView,
    },
    {
      path: '/exercises',
      name: ERouteName.EXERCISES,
      component: ExercisesView,
    },
    {
      path: '/tracking',
      name: ERouteName.TRACKING,
      component: TrackingView,
    },
    {
      path: '/:any(.*)*',
      name: 'NOT_FOUND',
      component: NotFoundView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/ProfileView.vue'),
    // },
  ],
});

export default router;
