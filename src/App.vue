
<template>
  <NavBar/>
  <!-- <ContentBase/> -->
  <router-view/>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import NavBar from './components/NavBar.vue';
// import ContentBase from './components/ContentBase.vue';
export default {
  name:"App",
  components:{
    NavBar,
    // ContentBase
  }
}
</script>



<style  >
 
</style>
