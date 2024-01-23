<template>
  <div class="h-full w-full bg-[#000000]">
    <div class="flex h-full w-full">
      <div class="h-full w-[35%] flex">
        <div class="h-full w-[50%] "></div>
        <div class="h-full w-[50%] pl-8 pr-8">
          <div class="h-full ">
            <div class=" h-8 w-8 text-white mt-2">
              <img src="../src/assets/x1.svg" alt="">
            </div>
            <Home/>
            <Tab  name="Explore" icon="home"/>
            <Tab/>
            <Tab/>
            <Tab/>
          </div>
        </div>
      </div>
      <div class="w-[30%] border-x-2 border-[#0e1110]"></div>
      <div class="w-[35%] flex">
        <div class="w-[65%] pl-8 pr-8">
          <div class="w-full space-y-4">
            <Search /> 
            <Subscribe />
            <Trend />
            <Who />

          </div>
        </div>
        <div class="w-[35%]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "../src/components/Search.vue";
import Subscribe from "../src/components/Subscribe.vue";
import Trend from "../src/components/Trend.vue";
import Who from "../src/components/Who.vue";
import Home from "../src/components/Home.vue";
import Tab from "./components/Tab.vue";
</script>
