<template>
  <Navbar/>
  <div class="container mt-4">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  components: { 
    Navbar 
    },
  methods: {
    ...mapActions(['loadLocalStorage'])
    },
  created() {
      this.loadLocalStorage()
    }
  }
</script>
