<template>
  <form @submit.prevent="processForm">
   <Input :task="task" />
  </form>
  <br />
  <p>
    {{ task }}
  </p>
</template>

<script>
import Input from '../components/Input'

export default {
  name: "Home",
  components: {
    Input,
  },
  data() {
    return {
      task: {
        id: '',
        name: '',
        categories: [],
        status: '',
        number: 0,
      },
    };
  },
  methods: {
    processForm() {
      console.log(this.task);
      if (this.task.name.trim() === "") {
        console.log("Empty");
        return;
      }
      console.log("Not empty");
      this.task = {
        name: "",
        categories: [],
        status: "",
        number: 0,
      };
    },
  },
  computed: {
    blocked() {
      return this.task.name.trim() === "" ? true : false;
    },
  },
};
</script>
