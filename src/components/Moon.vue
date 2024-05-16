<template>
  <div class="card_data" >
    <div class="button_card" v-if="role_id==1">
      <button class="redact">РЕДАКТИРОВАТЬ</button>
      <button class="delete" @click="deleted">Х</button>
    </div>
      <!-- <p class="img_info">{{ props.moon.avatar }}</p> -->
      <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
        <div class="info_card">
          <div>
            <p>НАЗВАНИЕ</p>
            <p>СЛОЖНОСТЬ</p>
            <p>ЦЕНА</p>
            <p>КОЛ-ВО ПРЕДМЕТОВ</p>
            <p>ПОГОДА</p>
          </div>
      <div >    
          <p>{{ props.moon.name }}</p>
          <!-- заменить таблицу с tier_id -->
          

          <p >{{ tier }} </p>
          <p >{{ props.moon.cost }} </p>
          <p>{{ props.moon.number_of_items }} </p>
          <p>{{ props.moon.weather }} </p>
      </div>
          </div>
  </div>
 
</template>
<script setup>
import { ref } from "vue";
// import {useStore} from "vuex";
import {deleteMoon} from "../api/moon.js";

import { useRouter } from "vue-router";
const router = useRouter();
// const store = useStore();


const props = defineProps({
  moon: Object
})
const tier_id = props.moon.tier_id;
let tier =0 
switch (tier_id) {
  case 1:
     tier = "тяжелая"
    break;
    case 2:
     tier = "средняя"
    break;
    case 3:
     tier = "легкая"
    break;
    case 4:
     tier = "безопасная"
    break;
  
}

let role_id = ref(localStorage.getItem('role_id'));
const emit = defineEmits(['delete']);

const deletedMoon = {
id: props.moon.id
}

async function deleted() {
await deleteMoon(deletedMoon);

}


</script>

<style>
  .card_data {
  background-color: #D9D9D9;
  border-radius: 20px;
  background-color: #D9D9D9;
  border-radius: 20px;
  display: flex;
  justify-content: end;
  width: 350px;
  flex-direction: column;
  
 }
 .button_card{
  display: flex;
  justify-content: end;
  padding: 10px;
  gap: 15px;
  align-items: center;
  
 }
 .redact{
  background-color: #BFBFBF;
  height: 20px;
  display: flex;
  align-items: center;
  color: black
 }
 .delete{
  background-color: #BFBFBF;
  width: 25px;
  height: 25px;
  border-radius: 7px;
  color: black
 }
</style>