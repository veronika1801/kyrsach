<template>
  <div class="card_data">
  <div class="button_card" v-if="role_id==1">
    <button class="redact"><router-link class="router-redact" :to="{ name: 'Redact_item', params: { id: props.item.id, name: props.item.name, type_id: props.item.type_id, cost: props.item.cost, weight: props.item.weight, presence_of_battery_id: props.item.presence_of_battery_id, conducts_electricity_id: props.item.conducts_electricity_id, avatar: props.item.avatar  } }">РЕДАКТИРОВАТЬ</router-link></button>
    <button class="delete" @click="deleted">Х</button>
  </div>
      <img class="img_card" :src="getImageUrl(props.item.avatar)" alt="Аватар" />
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
          <p >{{ type }} </p> 
          <p >{{ props.item.cost }} </p>
          <p>{{ props.item.weight }} </p>
          <p>{{ battery }} </p>
          <p>{{ electricity }} </p>
      </div>
          </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {deleteItem} from "../api/item.js";

const props = defineProps({
  item: Object
})

const type_id = props.item.type_id;
let type =0 
switch (type_id) {
case 1:
type = "механизм"
  break;
  case 2:
  type = "оружие"
  break;
}

const presence_of_battery_id = props.item.presence_of_battery_id;
let battery =0 
switch (presence_of_battery_id) {
case 1:
battery = "да"
  break;
  case 2:
  battery = "нет"
  break;
}

const conducts_electricity_id = props.item.conducts_electricity_id;
let electricity =0 
switch (conducts_electricity_id) {
case 1:
electricity = "да"
  break;
  case 2:
  electricity = "нет"
  break;
}

let role_id = ref(localStorage.getItem('role_id'));
const emit = defineEmits(['delete']);

const deletedItem = {
id: props.item.id
}

function getImageUrl(avatar) {
    return `/images/${avatar}`;
}

async function deleted() {
await deleteItem(deletedItem);
}
</script>

<style></style>