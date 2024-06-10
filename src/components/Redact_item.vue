<template>
    <div class="general">
      <form  @submit.prevent="redacted">
      <h1>РЕДАКТИРОВАНИЕ ПРЕДМЕТА</h1>
      <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="item.name" required/>
      <input class="input" type="file" @change="handleFileChange" />
        <p class="form_text">ТИП:</p>
       <select class="input"  v-model="item.type_id" >
            <option value="1">механизм</option>
            <option value="2">оружие</option>
        </select> 
        <input class="input" type="number" placeholder="ЦЕНА" v-model="item.cost" required/>
        <input class="input" type="number" placeholder="ВЕС" v-model="item.weight" required/>
        <p class="form_text">ИМЕЕТ БАТАРЕЮ:</p>
       <select class="input"  v-model="item.presence_of_battery_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
        <p class="form_text">ПРОВОДИТ ТОК:</p>
       <select class="input"  v-model="item.conducts_electricity_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
        
      <div>
        <button class="but_reg" type="submit" >РЕДАКТИРОВАТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>
  
<script setup>

import {ref } from "vue";
import {redactItem} from "../api/item.js";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
  
const route = useRoute();
const router = useRouter();
  
const item = ref({
  id: route.params.id,
  name: route.params.name,
  type_id: route.params.type_id,
  cost: route.params.cost,
  weight: route.params.weight,
  presence_of_battery_id: route.params.presence_of_battery_id,
  conducts_electricity_id: route.params.conducts_electricity_id,
  avatar: route.params.avatar
});

const handleFileChange = (event) => {
  item.avatar = event.target.files[0]; 
};

async function redacted() {
  await redactItem(item.value);
  router.push('/viewItem')
}

</script>
  <style>
  .select{
    width: 400px;
    display: flex;
    margin-left: 100px;
  }
  .form_text{
  display: flex;
  margin-left: 100px;
  
  }
  </style>