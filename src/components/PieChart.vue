<template>
  <div class="h-[90%] w-full flex items-center justify-center">
    <div class="h-full flex w-[100%]">
      <div class="w-[100%]">
        <div class="h-full pt-3 flex items-center justify-center">
          <canvas width="500" height="500" ref="chartCanvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement,
} from "chart.js";

const props = defineProps({
  data: Object,
});

const chartCanvas = ref();
let myChart;

watch(
  () => props.data,
  () => {
    if (!myChart) return;
    const prob = props.data.emergency_probability;
    myChart.data.datasets[0].data = [prob, 100 - prob];
    myChart.update();
  }
);

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");
    myChart = new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["Emergency", "Not Emergency"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50],
            backgroundColor: ["#312e81", "#4338ca"],
            hoverOffset: 4,
          },
        ],
      },
    });
  }
});

ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement);
const chartOptions = ref({
  responsive: true,
});
</script>
