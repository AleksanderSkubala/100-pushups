<template>
  <div class="schedule">
    <h1>Training for today:</h1>
    <p v-show="!training">There is no training this day, take some rest ;D</p>
    <table v-if="training">
      <thead>
        <th colspan="2" v-once>{{ getRest() }} of rest between sets </th>
      </thead>
      <tbody>
        <tr v-for="(rep, index) in training.reps" :key="index">
          <th>set {{ index+1 }}</th>
          <th>{{ rep }} reps</th>
        </tr>
        <tr>
          <th colspan="2" v-once>Take {{ restDay() }} rest</th>
        </tr>
      </tbody>
    </table>
    <Button @click.native="deletePlan()" text="Delete your training plan"></Button>
  </div>
</template>

<script>
import { format } from 'date-fns';
import Button from './Button.vue';

export default {
  name: 'Schedule',
  components: {
    Button,
  },
  data() {
    return {
      plan: JSON.parse(localStorage.getItem('trainingPlan')),
      training: '',
    };
  },
  methods: {
    deletePlan() {
      localStorage.clear();
      this.$emit('deletePlan');
      window.location = '';
    },
    getRest() {
      switch (this.plan.indexOf(this.training)) {
        default:
          return '60 s';

        case (1):
        case (4):
          return '90 s';

        case (2):
        case (5):
          return '2 min';
      }
    },
    restDay() {
      if (this.plan.indexOf(this.training) === 2 || this.plan.indexOf(this.training) === 5) {
        return '2 days';
      }

      return '1 day';
    },
  },
  mounted() {
    if (this.plan) {
      const today = format(new Date('05/18/2020'), 'MM/dd/yyyy');
      this.training = this.plan.find((object) => object.date === today);
    }
  },
};
</script>

<style lang="scss" scoped>
  .schedule {
    padding: 0 20px;

    h1 {
      color: #FFAD32;
      font-size: 1.75em;
    }

    table {
      border-collapse: collapse;

      th {
        padding: 10px;
        border: 1px solid black;
      }
    }


    button {
      margin-top: 25px;
    }
  }
</style>
