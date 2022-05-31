import Home from '@/views/HomeView';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/team',
    component: () => import('@/views/TeamList')
  },
  {
    path: '/team/:id',
    component: () => import('@/views/team/TeacherShow'),
    props: true
  }
];
