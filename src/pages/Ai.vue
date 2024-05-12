<template>
  <div class="h-svh bg-slate-900 text-white">
    <div class="h-[30%] flex flex-col justify-center items-center">
      <div
        class="text-4xl font-bold w-full flex items-end justify-center h-[40%]"
      >
        AI MODEL CONFIDENCE LEVEL
      </div>
      <div
        class="text-center h-[60%] w-full flex items-center justify-center p-10 px-64"
      >
        <div
          class="bg-slate-600 h-full w-full rounded-2xl flex items-center justify-center px-4 text-xl"
        >
          {{ result?.text }}
          
        </div>
      </div>
    </div>
    <div class="flex h-[70%]">
      <div class="h-full w-1/2 text-xl flex flex-col items-center">
        <div class="h-[10%]">Emergency Vs Non-Emergency</div>
        <div class="h-[90%] w-full p-10 pt-0">
          <div class="bg-slate-600 flex rounded-2xl p-1 h-full">
            <div class="w-[65%] flex items-center justify-center p-10">
              <PieChart :data="result" />
            </div>
            <div class="w-[35%] flex flex-col justify-center h-full">
              <div>Emergency : {{ f(result?.emergency_probability) }}</div>
              <div>
                Non-Emergency : {{ f(100 - result?.emergency_probability) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-1/2 text-xl flex flex-col items-center">
        <div class="h-[10%]">Emergency Type Classification</div>
        <div class="h-[90%] w-full p-10 pt-0">
          <div class="bg-slate-600 flex rounded-2xl p-1 h-full">
            <div class="w-[65%] flex items-center justify-center p-10">
              <BarChart :data="result" />
            </div>
            <div class="w-[35%] flex flex-col h-full justify-center pl-5">
              <div>
                Assault : {{ f(result?.type_probabilities["Assault"]) || "0%" }}
              </div>
              <div>
                Biohazard :
                {{ f(result?.type_probabilities["Biohazard"]) || "0%" }}
              </div>
              <div>
                Flood : {{ f(result?.type_probabilities["Flood"]) || "0%" }}
              </div>
              <div>
                Fire : {{ f(result?.type_probabilities["Fire"]) || "0%" }}
              </div>
              <div>
                Injuries :
                {{ f(result?.type_probabilities["Injuries"]) || "0%" }}
              </div>
              <div>
                Other : {{ f(result?.type_probabilities["Other"]) || "0%" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import { ref, onMounted } from "vue";

const result = ref();

onMounted(() => {
  setInterval(() => {
    let data = localStorage.getItem("prediction");

    if (!data) return;

    data = JSON.parse(data);
    result.value = data;

    console.log(data);
  }, 500);
});

function f(x) {
  if (!x) return x;
  return x.toFixed(2) + "%";
}
</script>
