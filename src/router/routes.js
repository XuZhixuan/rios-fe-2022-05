import Home from '@/views/HomeView';
import Team from '@/views/TeamView';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/team',
    component: Team,
    children: [
      {
        path: '',
        name: 'teamList',
        component: () => import('@/views/team/TeamList')
      },
      {
        path: ':id',
        name: 'teamDetail',
        component: () => import('@/views/team/TeacherShow'),
        props: true
      }
    ]
  }
];
