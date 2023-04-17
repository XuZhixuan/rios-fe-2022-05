import Home from '@/views/HomeView';
import Team from '@/views/TeamView';
import Project from '@/views/ProjectsView';

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
  },
  {
    path: '/projects',
    component: Project,
    children: [
      { path: '', name: 'projectList', component: () => import('@/views/projects/ProjectList') },
      { path: ':id', name: 'projectDetail', component: () => import('@/views/projects/ProjectShow'), props: true }
    ]
  }
];
