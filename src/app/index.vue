<template>
  <div class="container-fluid h-100 d-flex justify-content-center align-items-center bg-light">
    <div class="row bg-white rounded shadow-sm p-3 w-50 h-50">
      <div class="col">
        <div class="row">
          <div class="col">
            <Routing />
          </div>
        </div>

        <div class="row">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routingComponent from '../pages/index.vue';

export default {
  name: 'App',

  components: {
    Routing: routingComponent,
  },

  data() {
    return {};
  },

  mounted() {},
};
</script>

<style lang="scss">
@import "../shared/ui/index";

@font-face {
  font-family: Roboto-Regular;
  src: url("./assets/fonts/Roboto-Regular.ttf");
}
</style>
