<template>
  <!-- Navbar -->
  <nav id="navHeader" class="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/">
          <img v-if="this.$router.currentRoute.name !== 'ContactList'" id="imgLogo" src="/assets/img/logo/logo-black.png" style="width: 200px;"/>
          <img v-if="this.$router.currentRoute.name === 'ContactList'" id="imgLogo" src="/assets/img/logo/logo-white.png" style="width: 200px;"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-primary">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" @click="document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" class="nav-link">The Book</a>
          </li>
          <li class="nav-item">
            <a href="/#author" class="nav-link">The Author</a>
          </li>
          <li class="nav-item">
            <a href="/#club" class="nav-link">The Club</a>
          </li>
          <li class="nav-item">
            <a href="/book/o4T0DlZoqYpLLoLGcBGe" class="nav-link">The Shop</a>

            <!-- <router-link class="nav-link" to="/book/o4T0DlZoqYpLLoLGcBGe">Book Shop</router-link> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click.native="$scrollToTop" to="/joinus">Join Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click.native="$scrollToTop" to="/resources">Resources</router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <a href="/admin" class="nav-link">ADMIN</a>
          </li>

          <li class="nav-item" v-if="isLoggedIn == false">
            <a href="/admin" class="nav-link">
              <i
                class="now-ui-icons users_single-02"
              ></i>
            </a>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <a href="#" @click="onSignout" class="nav-link">
              <i
                class="now-ui-icons arrows-1_share-66"
                style="text-transform: uppercase;font-size: 1.2em;"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
<script>
import firebase from "../config/firebaseConfig";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    onSignout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = '/';
        });
    }
  },
  mounted(){
    if(window.location.href.indexOf('admin') != -1){
      document.getElementById('navHeader').removeAttribute('color-on-scroll');
      document.getElementById("navHeader").className = "navbar navbar-expand-lg bg-info fixed-top";
    }else{
      document.getElementById("navHeader").className = "navbar navbar-expand-lg bg-white fixed-top navbar-transparent";
      document.getElementById('navHeader').setAttribute('color-on-scroll',"500");
    }
  }
  
};
</script>
