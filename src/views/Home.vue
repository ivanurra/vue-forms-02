<template>
<form>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Write your name"
    v-model="task.name"
  >
</form>
<p>
  {{ task }}
</p>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      task: {
        name: ''
      }
    }
  },
}
</script>
