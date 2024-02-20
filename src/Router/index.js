import { createRouter, createWebHistory } from 'vue-router';
import FindJob from '../components/FindJob.vue';
import JobDetails from '../components/JobDetails.vue';

const routes = [
    { path: '/', component: FindJob },
    { path: '/jobdetails/:id', component: JobDetails },

  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  
  export default router;