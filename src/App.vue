<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <Planner v-show="trainingPlan.length == 0" @makePlan="makePlan"></Planner>
      <Schedule v-show="trainingPlan.length > 0" @deletePlan="deletePlan"></Schedule>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Training from './assets/pushups';

import Footer from './components/Footer.vue';
import Planner from './components/Planner.vue';
import Schedule from './components/Schedule.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Planner,
    Schedule,
  },
  data() {
    return {
      trainingPlan: [],
    };
  },
  methods: {
    makePlan(reps) {
      this.trainingPlan = new Training(reps).makePlan;
      localStorage.setItem('trainingPlan', JSON.stringify(this.trainingPlan));
    },
    deletePlan() {
      this.trainingPlan = [];
    },
  },
  mounted() {
    this.trainingPlan = localStorage.getItem('trainingPlan') ? JSON.parse(localStorage.getItem('trainingPlan')) : [];
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  body {
    margin: 0;
    padding: 0;
  }

 .outerWrapper{
   width: 100vw;
   min-height: 100vh;
   background-color: whitesmoke;
   font-family: 'Montserrat', sans-serif;
   display: flex;
   justify-content: center;
   position: absolute;
   z-index: -1;
 }

 .innerWrapper {
   width: 90%;
   max-height: 90vh;
   height: 100%;
   height: auto;
   margin-top: 5%;
   background-color: white;
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   &::before {
     content: '';
     width: 100vw;
     height: 15vh;
     background-color:  #FFAD32;
     position: absolute;
     z-index: -1;
     top: 0;
     left: 0;
   }

   @media (min-width: 1024px) {
     margin-top: 5vh;
   }
 }
</style>
