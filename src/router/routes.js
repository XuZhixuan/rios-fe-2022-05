import Home from '@/views/HomeView';
import Team from '@/views/TeamView';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/team',
    component: Team,
    children: [
      {
        path: '',
        component: () => import('@/views/team/TeamList')
      },
      {
        path: ':id',
        component: () => import('@/views/team/TeacherShow'),
        props: true
      }
    ]
  }
];
