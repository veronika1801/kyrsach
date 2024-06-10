<template>
  <div class="card_data" >
    <div class="button_card" v-if="role_id==1">
      <button class="redact"><router-link class="router-redact" :to="{ name: 'Redact_moon', params: { id: props.moon.id, name: props.moon.name, tier_id: props.moon.tier_id, cost: props.moon.cost, number_of_items: props.moon.number_of_items, weather: props.moon.weather, avatar: props.moon.avatar, avatar: props.moon.avatar  } }">РЕДАКТИРОВАТЬ</router-link></button>
      <button class="delete" @click="deleted">Х</button> 
    </div>
      
    <img class="img_card" :src="getImageUrl(props.moon.avatar)" alt="Аватар" />
      
        <div class="info_card">
          <div>
            <p>НАЗВАНИЕ</p>
            <p>СЛОЖНОСТЬ</p>
            <p>ЦЕНА</p>
            <p>КОЛ-ВО ЛУТА</p>
            <p>ПОГОДА</p>
          </div>
      <div >    
          <p>{{ props.moon.name }}</p>
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
import {deleteMoon} from "../api/moon.js";

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

function getImageUrl(avatar) {
    return `http://api.hikilist.ru:7777/public/${avatar}`;
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
  background-color: #D9D9D9;
  height: 20px;
  display: flex;
  align-items: center;
  color: black;
  border:none;
 }
 .delete{
  background-color: #D9D9D9;
  width: 25px;
  height: 25px;
  border-radius: 7px;
  color: black;
  border:none;
  font-size:20px;
  display: flex;
  align-items: center;

 }
</style>