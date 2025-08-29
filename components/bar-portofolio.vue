<template>
  <div class="relative h-full w-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarPortfolio',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Monthly Sales",
            backgroundColor: "#00B4D8",
            borderRadius: 100,
            borderSkipped: false,
            barThickness: 20,
            data: [40, 20, 12, 39, 10, 80],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              drawTicks: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              drawTicks: false,
            },
          },
        },
      }
    }
  }
};
</script>
