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
                <li class="nav-item">
                  <i class="nav-link now-ui-icons users_single-02" style="
                      text-transform: uppercase;
                      font-size: 1.2em;
                      line-height: 1.625rem;
                  "></i>
                </li>

                <li class="nav-item">
                  <i class="nav-link now-ui-icons arrows-1_share-66" style="
                      text-transform: uppercase;
                      font-size: 1.2em;
                      line-height: 1.625rem;
                  "></i>
                </li>
                
              </ul>
            </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
<script>
export default {
  name: "Header"
};
</script>
