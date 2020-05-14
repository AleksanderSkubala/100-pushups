import addDays from 'date-fns/addDays';
import trainings from './_trainings';

export default class Training {
  constructor(initialPushups = 0) {
    this.initialPushups = initialPushups;
  }

  getPlanNumber() {
    switch (true) {
      default:
        return 0;

      case (this.initialPushups < 6):
        return 0;

      case (this.initialPushups <= 10):
        return 1;

      case (this.initialPushups <= 20):
        return 2;

      case (this.initialPushups <= 25):
        return 3;

      case (this.initialPushups <= 30):
        return 4;

      case (this.initialPushups <= 35):
        return 5;

      case (this.initialPushups <= 40):
        return 6;

      case (this.initialPushups <= 45):
        return 7;

      case (this.initialPushups <= 50):
        return 8;

      case (this.initialPushups <= 55):
        return 9;

      case (this.initialPushups <= 60):
        return 10;

      case (this.initialPushups > 60):
        return 11;
    }
  }

  get makePlan() {
    const plans = trainings.splice(this.getPlanNumber());
    const trainingPlan = [];
    const currentDate = new Date();
    let dayCounter = 2;
    plans.map((plan) => {
      plan.map((day) => {
        const newDay = day;
        newDay.date = addDays(currentDate, dayCounter);
        trainingPlan.push(newDay);
        dayCounter += 2;
        return 0;
      });

      dayCounter += 1;
      // at the end of plan.map adds 2d to counter, there should be 3 so it adds 1(2+1=3)
      return 0;
    });
    return trainingPlan;
  }
}

// console.log(new Training(2).makePlan);
