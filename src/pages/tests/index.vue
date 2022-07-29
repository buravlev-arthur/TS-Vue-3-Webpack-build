<template>
  <div class="col">
    <div class="py-2">
      <span class="bg-success text-white me-2 mb- p-1 rounded">Bootstrap: </span>
      <button class="btn btn-primary btn-sm">
        <small>Bootstrap stylised button</small>
      </button>
    </div>
    <div class="py-2">
      <span class="bg-success text-white me-2 p-1 rounded">Bootstrap icons: </span>
      <i class="icon bi-envelope me-2"></i>
      <i class="bi bi-bicycle me-2 text-primary"></i>
      <i class="bi bi-car-front-fill me-2 text-danger"></i>
    </div>
    <div class="py-2">
      <span class="bg-success text-white me-2 p-1 rounded">Vuex store: </span>
      <span>
        <small>
          {{state}}
        </small>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TestsPage',

  computed: {
    ...mapState('m_1', ['state']),
  },
};
</script>
