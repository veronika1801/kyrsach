<template>
    <div class="general">
      <form  @submit.prevent="redacted">
      <h1>РЕДАКТИРОВАНИЕ ПРЕДМЕТА</h1>
      <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="scrab.name" required/>
      <input class="input" type="file" @change="handleFileChange" />
        <input class="input" type="number" placeholder="МИН ЦЕНА" v-model="scrab.min_cost" required/>
        <input class="input" type="number" placeholder="МАКС ЦЕНА" v-model="scrab.max_cost" required/>
        <input class="input" type="number" placeholder="ВЕС" v-model="scrab.weight" required/>
        <p class="form_text">ПРОВОДИТ ТОК:</p>
       <select class="input"  v-model="scrab.conducts_electricity_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
        <p class="form_text">ДВУРУЧНЫЙ:</p>
       <select class="input"  v-model="scrab.two_handed_id" >
            <option value="1">две руки</option>
            <option value="2">одну ячейку</option>
        </select>  
        
      <div>
        <button class="but_reg" type="submit" >РЕДАКТИРОВАТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>
  
<script setup>

import {ref } from "vue";
import {redactScrab} from "../api/scrab.js";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
  
const route = useRoute();
const router = useRouter();
  
  
const scrab = ref({
  id: route.params.id,
  name: route.params.name,
  min_cost: route.params.min_cost,
  max_cost: route.params.max_cost,
  weight: route.params.weight,
  conducts_electricity_id: route.params.conducts_electricity_id,
  two_handed_id: route.params.two_handed_id,
  avatar: route.params.avatar
});

const handleFileChange = (event) => {
  scrab.avatar = event.target.files[0]; 
};

async function redacted() {
  await redactScrab(scrab.value);
  router.push('/viewScrab')
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