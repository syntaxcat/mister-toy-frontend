mple with static data

<template>
  <DoughnutChart v-if="chartData !== null" :chartData="chartData" />
</template>

<script>
  import { defineComponent } from "vue";
  import { DoughnutChart } from "vue-chart-3";
  import { Chart, registerables } from "chart.js";

  Chart.register(...registerables);

  export default {
    name: "Home",
    props: {
      toys: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        chartData: null,
      };
    },
    created() {
        const groups = this.toys.reduce((acc, curr) => {
            if (curr.type in acc) {
                 acc[curr.type]++;
            }else {
                acc[curr.type] = 1;
            }
            return acc;
        }, {});
        console.log(groups);
        const labels = Object.keys(groups);
      this.chartData = {
        labels,
        datasets: [
          {
            data: labels.map((label) => groups[label]),
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
      };
    },
    components: { DoughnutChart },
  };
</script>

<style></style>
