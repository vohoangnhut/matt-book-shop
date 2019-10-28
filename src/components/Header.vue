<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
    <div class="container">
      <div class="navbar-translate">
        <router-link class="navbar-brand" to="/">Project B</router-link>
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
            <a href="/#about" class="nav-link">About The Book</a>
          </li>
          <li class="nav-item">
            <a href="/#author" class="nav-link">The Author</a>
          </li>
          <li class="nav-item">
            <a href="/#event" class="nav-link">Events</a>
          </li>
          <li class="nav-item">
            <a href="/book/o4T0DlZoqYpLLoLGcBGe" class="nav-link">Book Shop</a>

            <!-- <router-link class="nav-link" to="/book/o4T0DlZoqYpLLoLGcBGe">Book Shop</router-link> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click.native="$scrollToTop" to="/contact">Contact Us</router-link>
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
          this.$router.replace("/");
        });
    }
  }
};
</script>
