import Home from '@/views/HomeView';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/team',
    component: () => import('@/views/TeamList')
  }
];
