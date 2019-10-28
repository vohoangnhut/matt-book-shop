<template>
  <div id="app">
    <Header v-if="checkRoute" />
    <router-view/>
    <Footer v-if="checkRoute" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
  created() {
    //let uid = this.$store.getters.currentUser.uid;
    this.listenToProductList();
    //this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
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
