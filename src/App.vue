<script>
// import FindJob from './components/FindJob.vue';
import JobDetails from './components/JobDetails.vue';
import NavBar from './components/NavBar.vue';

import '../src/index.css'
export default {
  name: 'App',
  components: {
    // FindJob,
    NavBar,
   JobDetails 


  }
}
</script>
<template>
 
 <div id="app">
    <router-view>
      <NavBar />
 <!-- <FindJob/> -->
 <JobDetails />
    </router-view>
 
  </div>
</template>




