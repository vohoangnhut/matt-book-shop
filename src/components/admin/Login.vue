<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button @click="login">Connection</button>
  </div>
</template>
<script>
import firebase from "../../config/firebaseConfig";
export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/admin/contact');
          },
          err => {
            this.$swal({
              type: "error",
              title: "Oops",
              html: err.message
            });
          }
        );
    }
  }
};
</script>
