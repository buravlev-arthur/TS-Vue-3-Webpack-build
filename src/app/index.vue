<template>
    <div id="nav">
         <router-link to="/">Go to Home</router-link>
         <router-link to="/name">Name-Page</router-link>
    </div>
    <div id="page_view">
        <router-view></router-view>
    </div>
    <p>{{counter}} : {{count}} : {{name}}</p>
    <!--<name></name>-->
</template>

<script lang="ts">
import name from './component.vue';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
    name: "app",

    data() {
        return {
            counter: 54
        }
    },

    computed: {
        ...mapState(['count']),
        ...mapState('m_1', ['name'])
    },

    components: {
        "name": name
    }
})
</script>

<style lang="scss">
#app {
    border:1px solid rgb(0, 126, 17);
    width:800px;
    height:300px;
    margin:100px auto;
}
</style>