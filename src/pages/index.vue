<template>
  <div class="navbar navbar-expand-lg bg-light rounded mb-3">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/tests">Tests</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoutingComponent',

  data() {
    return {};
  },
};
</script>
