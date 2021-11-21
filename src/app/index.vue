<template>
    <p>{{counter}}</p>
</template>

<script lang="ts">
export default {
    name: "app",

    data() {
        return {
            counter: 54
        }
    }
}
</script>

<style lang="scss">
#app {
    border:1px solid rgb(0, 126, 17);
    width:800px;
    height:300px;
    margin:100px auto;
}
</style>