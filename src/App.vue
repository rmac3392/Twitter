<template>
  <div class="h-full w-full bg-[#000000]">
    <div class="flex h-full w-full">
      <div class="h-full w-[35%] flex">
        <div class="h-full w-[50%]"></div>
        <div class="h-full w-[50%] pl-8 pr-8">
          <div class="h-full pl-5 space-y-5">
            <div class="h-9 w-9 text-white mt-2">
              <img src="../src/assets/x1.svg" alt="" />
            </div>
            <Home />
            <Tab name="Explore" icon="magnify" />
            <Tab name="Notifications" icon="bell-outline" />
            <Tab name="Messages" icon="email-outline" />
            <Tab name="Grok" icon="slash-forward-box" />
            <Tab name="Lists" icon="list-box-outline" />
            <Tab name="Bookmarks" icon="bookmark-outline" />
            <Tab name="Communities" icon="account-multiple-outline" />
            <div class="flex w-full h-10">
              <div class="w-[20%] h-full">
                <!-- <HomeIcon class="h-12 w-12 text-white"/> -->
                <div class="h-8 w-8 text-white mt-2">
                  <img src="../src/assets/x1.svg" alt="" />
                </div>
              </div>
              <div class="w-[80%] text-white text-2xl font-base p-2 pl-3">
                Premium
              </div>
            </div>
            <Tab name="Profile" icon="account-outline" />
            <Tab name="More" icon="dots-horizontal-circle-outline" />
            <div
              class="rounded-full bg-[#0089f4] w-full h-12 font-bold text-lg p-2 text-center text-white cursor-pointer mt-2"
            >
              Post
            </div>

            <div class="h-20"> </div>
            <div class="flex h-12 ">
              <div
                class="w-[18%] rounded-full flex justify-center items-center"
              >
                <img src="../src/assets/ncl.jpg" class="rounded-full" alt="" />
              </div>
              <div class="flex flex-col w-[90%] justify-center pl-3">
                <div class="text-base font-semibold text-white leading-tight">
                  Ryan James Macawili
                </div>
                <div class="text-sm text-[#6a6f74] leading-tight">
                  @MacawiliJames
                </div>
              </div>
              <div class="w-[10%]">
                <div class="w-full flex items-end">
                  <EllipsisHorizontalIcon class="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
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
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
</script>
