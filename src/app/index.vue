<template>
  <div>
    <div id="nav">
      <router-link to="/">
        Go to Home
      </router-link>
      <router-link to="/name">
        Name-Page
      </router-link>
    </div>
    <div id="page_view">
      <router-view />
    </div>
    <p>{{ counter }} : {{ count }} : {{ name }}</p>
    <name-component />
    <img
      width="200"
      src="./assets/images/image.png"
    >
    <div id="lg" />
  </div>
</template>

<script>
import NameComponent from './component.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    'name-component': NameComponent
  },

  data () {
    return {
      counter: 54
    }
  },

  computed: {
    ...mapState(['count']),
    ...mapState('m_1', ['name'])
  }
}
</script>

<style lang="scss">
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

#lg {
  width:200px;
  height:200px;
  background: url('./assets/images/img.jpg');
  background-size: contain;
}
</style>
