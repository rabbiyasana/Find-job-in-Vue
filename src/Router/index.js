import { createRouter, createWebHistory } from 'vue-router';
import FindJob from '../components/FindJob.vue';
import JobDetails from '../components/JobDetails.vue';

const routes = [
    {
        path: '/',
        name: 'findjob',
        component: FindJob 
    },
    {
        path: '/job/:id',
        name: 'jobdetails',
        component: JobDetails 
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;