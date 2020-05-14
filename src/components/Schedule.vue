<template>
  <div class="schedule">
    <h1>Training for today:</h1>
    <p v-show="!training">There is no training this day, take some rest ;D</p>
    <table v-if="training">
      <tr v-for="rep in training.reps" :key="rep">
        <th>{{ rep }}</th>
      </tr>
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
  mounted() {
    const today = format(new Date('2020-05-16T10:29:31.844Z'), 'MM/dd/yyyy');
    // const today = format(new Date(), 'MM/dd/yyyy');
    this.training = this.plan.find((object) => object.date === today);
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
