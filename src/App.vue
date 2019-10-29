<template>
  <div id="app">
    <Header v-if="checkRoute" />
    <router-view/>
    <Footer v-if="checkRoute" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    checkRoute() {
      if(this.$route.path === '/admin/login'){
        return false;
      }
      return true;
    }
  }
}
</script>
