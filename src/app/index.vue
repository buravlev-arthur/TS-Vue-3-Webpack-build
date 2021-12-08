<template>
  <Routing />

  <button class="btn">
    Текст кнопки
  </button>

  <div id="page_view">
    <router-view />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import routingComponent from '../pages/index.vue'

export default {
  name: 'App',

  components: {
    Routing: routingComponent
  },

  data () {
    return {
      counter: 54
    }
  }

  /* computed: {
    ...mapState(['count']),
    ...mapState('m_1', ['name'])
  } */
}
</script>

<style lang="scss">
@import "./styles/index.scss";
@import "../shared/ui/index.scss";

@font-face {
  font-family:'Roboto-Regular';
  src: url('./assets/fonts/Roboto-Regular.ttf');
}

#app {
    border:1px solid rgb(0, 126, 17);
    width:800px;
    height:300px;
    margin:100px auto;
    font-family:Roboto-Regular;
}
</style>
