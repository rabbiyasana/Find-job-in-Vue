<template>
 <NavBar />
 <FindJob/>
 <router-view></router-view>
</template>

<script>

import FindJob from './components/FindJob.vue';
import NavBar from './components/NavBar.vue';
import '../src/index.css'
export default {
  name: 'App',
  components: {
    FindJob,
    NavBar
  }
}
</script>
