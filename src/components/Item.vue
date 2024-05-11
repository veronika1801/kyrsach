<template>
    <div class="card_data">
        <!-- <p class="img_info">{{ props.item.avatar }}</p> -->
        <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
          <div class="info_card">
            <div>
              <p>НАЗВАНИЕ</p>
              <p>ТИП</p>
              <p>ЦЕНА</p>
              <p>ВЕС</p>
              <p>ИМЕЕТ БАТАРЕЮ</p>
              <p>ПРОВОДЯЩИЙ ТОК</p>
            </div>
        <div >    
            <p>{{ props.item.name }}</p>
            <!-- заменить таблицу с type_id -->
            <p >{{ props.item.type_id }} </p> 
            <p >{{ props.item.cost }} </p>
            <p>{{ props.item.weight }} </p>
            <!-- заменить таблицу с presence_of_battery_id -->
            <p>{{ props.item.presence_of_battery_id }} </p>
            <!-- заменить таблицу с conducts_electricity_id -->
            <p>{{ props.item.conducts_electricity_id }} </p>
        </div>
            </div>
    </div>
  </template>
  <script setup>

  import {useStore} from "vuex";
  const store = useStore();
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const props = defineProps({
    item: Object
  })
  
  </script>

<style>
    
</style>