<template>
<form>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Write your name"
    v-model="task.name"
  >
  <br/>
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-1"
    class="form-check-input"
    v-model="task.categories"
    value="JavaScript"
    >
    <label for="check-2" class="form-check-label">JavaScript</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-1"
    class="form-check-input"
    v-model="task.categories"
    value="NodeJS"
    >
    <label for="check-3" class="form-check-label">NodeJS</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-1"
    class="form-check-input"
    v-model="task.categories"
    value="VueJS"
    >
    <label for="check-4" class="form-check-label">VueJS</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-1"
    class="form-check-input"
    v-model="task.categories"
    value="ReactJS"
    >
    <label for="check-1" class="form-check-label">ReactJS</label>
  </div>
</form>
<br/>
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
        name: '',
        categories: []
      }
    }
  },
}
</script>
