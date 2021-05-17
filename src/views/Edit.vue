<template>
  Edit: {{$route.params.id}} - {{task}}
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    computed: {
        ...mapState(['task'])
    },
    methods: {
        ...mapActions(['setTask'])
    },
    created() {
        this.setTask(this.$route.params.id)
    }
}
</script>
