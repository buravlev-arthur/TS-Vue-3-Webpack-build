<template>
  <p>{{ name }}</p>
</template>

<script>

export default {
  name: 'NameComponent',

  data () {
    return {
      name: 'Leon'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
    color: red;
}
</style>
