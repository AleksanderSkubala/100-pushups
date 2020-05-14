<template>
  <div class="schedule">
    <h1>Training for today:</h1>
    <p v-show="!training">There is no training this day, take some rest ;D</p>
    <table v-if="training">
      <thead>
        <th colspan="2">{{ this.getRest() }} of rest between sets </th>
      </thead>
      <tbody>
        <tr v-for="(rep, index) in training.reps" :key="index">
          <th>set {{ index+1 }}</th>
          <th>{{ rep }} reps</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'Schedule',
  data() {
    return {
      plan: JSON.parse(localStorage.getItem('trainingPlan')),
      training: '',
    };
  },
  methods: {
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
  },
  mounted() {
    if (this.plan) {
      const today = format(new Date(), 'MM/dd/yyyy');
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
  }
</style>
