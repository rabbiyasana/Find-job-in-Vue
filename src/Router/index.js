import Vue from 'vue'
import VueRouter from "vue-router"

import FindJob from '../components/FindJob.vue'
Vue.useAttrs(VueRouter);

const routes= [
    {
        path:'/',
        name:'findjob',
        Component:FindJob
    },
    {
        path:'findjob/:id',
        name:'jobdetails',
        Component:JobDetails
    }
];
const router = new VueRouter({
    routes
});
export default router;