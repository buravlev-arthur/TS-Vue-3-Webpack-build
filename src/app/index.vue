<template>
  <div>
    <div v-if="auth">
      <Routing />
      <p>{{ 'auth: ' + auth }}</p>
      <button class="btn">Текст кнопки</button>
      <i className="icon bi-envelope"></i>
    </div>
    <div id="page_view">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import routingComponent from '../pages/index.vue';
import auth from '../processes/auth';

export default {
  name: 'App',

  components: {
    Routing: routingComponent,
  },

  data() {
    return {
      counter: 54,
      auth: false,
    };
  },

  mounted() {
    this.auth = auth();

    if (this.auth === false) {
      this.$router.push('auth');
    } else {
      this.$router.push('/');
    }
  },

  /* computed: {
    ...mapState(['count']),
    ...mapState('m_1', ['name'])
  } */
};
</script>

<style lang="scss">
@import "./styles/index";
@import "../shared/ui/index";

@font-face {
  font-family: Roboto-Regular;
  src: url("./assets/fonts/Roboto-Regular.ttf");
}

#app {
  border: 1px solid #007e11;
  width: 800px;
  height: 300px;
  margin: 100px auto;
  font-family: Roboto-Regular, sans-serif;
}
</style>
