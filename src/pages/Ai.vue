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
        <div class="bg-slate-600 h-full w-full rounded-2xl"></div>
      </div>
    </div>
    <div class="flex h-[70%]">
      <div class="h-full w-1/2 text-xl flex flex-col items-center">
        <div class="h-[10%]">Emergency Vs Non-Emergency</div>
        <div class="h-[90%] w-full p-10 pt-0">
          <div class="bg-slate-600 flex rounded-2xl p-1 h-full">
            <div class="w-[65%] flex items-center justify-center p-10">
              <PieChart />
            </div>
            <div class="w-[35%] flex flex-col justify-center h-full">
              <div>Emergency :</div>
              <div>Non-Emergency :</div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-1/2 text-xl flex flex-col items-center">
        <div class="h-[10%]">Emergency Type Classification</div>
        <div class="h-[90%] w-full p-10 pt-0">
          <div class="bg-slate-600 flex rounded-2xl p-1 h-full">
            <div class="w-[65%] flex items-center justify-center p-10">
              <BarChart />
            </div>
            <div class="w-[35%] flex flex-col h-full justify-center pl-5">
                <div>Fire : </div>
                <div>Flood : </div>
                <div>Injuries : </div>
                <div>Assault : </div>
                <div>Biohazard : </div>
                <div>Others : </div>
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
</script>
