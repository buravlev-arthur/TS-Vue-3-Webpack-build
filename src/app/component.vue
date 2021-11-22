<template>
    <p>{{name}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name : "name",
    
    data() {
        return {
            name : 'Leon'
        }
    }
})
</script>

<style lang="scss" scoped>
p {
    color: red;
}
</style>