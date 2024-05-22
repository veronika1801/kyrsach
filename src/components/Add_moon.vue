<template>
    <div class="general">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ ЛУНЫ</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="add_Moon.name" required/>
        
       <p class="form_text">ВЫБЕРИТЕ СЛОЖНОСТЬ:</p> 
       <select class="input"  v-model="add_Moon.tier_id" >
              <option value="1">тяжелая</option>
              <option value="2">средняя</option>
              <option value="3">легкая</option>
              <option value="4">безопасная</option>
            </select>
        <input class="input" type="number" placeholder="ЦЕНА" v-model="add_Moon.cost" required/>
        <input class="input" type="text" placeholder="КОЛ-ВО ПРЕДМЕТОВ" v-model="add_Moon.number_of_items" required/>
        <input class="input" type="text" placeholder="ПОГОДА" v-model="add_Moon.weather" required/>
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>

<script setup>

import {addMoon} from "../api/moon.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Moon = {
    name: null,
    tier_id: null,
    cost: null,
    number_of_items: null,
    weather: null,

}
async function add() {
 
 await addMoon(add_Moon);
 router.push('/viewMoon')

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