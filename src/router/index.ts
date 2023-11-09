import { createRouter, createWebHistory } from 'vue-router';
import { ERouteName } from '@/constants';
import { WorkoutView } from '@/views/workout';
import { ProfileView } from '@/views/profile';
import { HistoryView } from '@/views/history';
import { ExerciseView, ExercisesView } from '@/views/excercises';
import NotFoundView from '@/views/NotFoundView.vue';

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
      name: 'parent',
      children: [
        {
          path: '',
          name: ERouteName.EXERCISES,
          component: ExercisesView,
        },
        {
          path: ':id',
          name: 'EXERCISE',
          component: ExerciseView,
        },
      ],
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
