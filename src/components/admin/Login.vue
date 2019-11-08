<template>
  <div class="page-header header-filter" filter-color="orange">
    <div class="page-header-image" style="background-image:url(../assets/img/login.jpg)"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <div class="card card-login card-plain">
            <form class="form" method action>
              <div class="card-header text-center">
                <div class="logo-container">
                  <img src="/assets/img/now-logo.png" alt />
                </div>
              </div>
              <div class="card-body">
                <div class="input-group form-group-no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="email"
                    placeholder="Email..."
                    @keyup.enter="login"
                  />
                </div>
                <div class="input-group form-group-no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="Password..."
                    @keyup.enter="login"
                  />
                </div>
              </div>
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click="login"
                >Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "../../config/firebaseConfig";
import { db } from "../../config/firebaseConfig";
export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.checkExistsUser(this.email).then(snapshot => {
              var insertFlag = false;
              if (snapshot.size === 0)
                insertFlag = true;
              this.insertUserRole(this.email, insertFlag).then(result => {
                this.$router.replace("/admin");
              });
            });
          },
          err => {
            this.$swal({
              type: "error",
              title: "Oops",
              html: err.message
            });
          }
        );
    },
    checkExistsUser(email) {
      return new Promise((resolve, reject) => {
        db.collection("role")
          .where("email", "==", email)
          .get()
          .then(snapshot => {
            resolve(snapshot);
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    insertUserRole(email, flag) {
      return new Promise((resolve, reject) => {
        if (flag === false) {
          resolve(true);
        } else {
          db.collection("role")
            .add({
              email: email,
              role: "ba"
            })
            .then(() => {
              resolve(true);
            })
            .catch(error => {
              reject(error); // the request failed
            });
        }
      });
    }
  },
  mounted() {
    if (window.location.href.indexOf("login") != -1) {
      document.body.className = "login-page";
    }
  }
};
</script>
