<template>
  <div class="planner">
    <h1>Type how many pushups can you make?</h1>
    <input name="reps" v-model="reps" placeholder="number of reps">
    <Button @click.native="handleClick()" text="Make training plan"></Button>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Planner',
  components: {
    Button,
  },
  data() {
    return {
      reps: '',
    };
  },
  methods: {
    handleClick() {
      this.$emit('makePlan', this.reps);
    },
  },
};
</script>

<style lang="scss" scoped>

  .planner {
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    h1 {
      color: #FFAD32;
      font-size: 1.75em;
    }

    input {
      font-family: 'Montserrat', sans-serif;
      font-size: 1em;
      border: none;
      border-bottom: 2px solid #050505;
      outline: none;
    }

    button {
      margin-top: 20px;
    }
  }
</style>
