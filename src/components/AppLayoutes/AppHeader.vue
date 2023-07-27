<script>
 import { RouterLink } from 'vue-router'
</script>


<template>
    <header id="header">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <h1 class="logo me-auto me-lg-0"><a href="index.html">Danishyar</a></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/resume">Resume</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>

  </header>
</template>

<style scoped>

a.router-link-active {
  color: black;
  border-bottom: 2px solid black;
}

</style>