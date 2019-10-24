<template>
  <div id="app">
    <Header />
    <message-component></message-component>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageComponent from './components/common/MessageComponent.vue';
export default {
  components: {
    Header,
    Footer,
    MessageComponent
  },
  methods: {
    ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      //let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      //this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
}
</script>
