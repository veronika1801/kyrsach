<template>
    <div class="login">
      <form  @submit.prevent="redacted">
        <h1>РЕДАКТИРОВАНИЕ ЛУНЫ</h1>
        <input class="input" type="text"  v-model="moon.name" required/>
        
        <p class="form_text">ВЫБЕРИТЕ СЛОЖНОСТЬ:</p> 
        <select class="input"  v-model="moon.tier_id" >
               <option value="1">тяжелая</option>
               <option value="2">средняя</option>
               <option value="3">легкая</option>
               <option value="4">безопасная</option>
             </select>
         <input class="input" type="number"  v-model="moon.cost" required/>
         <input class="input" type="text"  v-model="moon.number_of_items" required/>
         <input class="input" type="text"  v-model="moon.weather" required/> 
        
      <div>
        <button class="but_reg" type="submit" >РЕДАКТИРОВАТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>
  
  <script setup>
  import {ref } from "vue";
  import {redactMoon} from "../api/moon.js";
  import { useRouter } from "vue-router";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const router = useRouter();
  
  
  const moon = ref({
  id: route.params.id,
  name: route.params.name,
  tier_id: route.params.tier_id,
  cost: route.params.cost,
  number_of_items: route.params.number_of_items,
  weather: route.params.weather,
  
  });
  
  
  async function redacted() {
  
  await redactMoon(moon.value);
  router.push('/viewMoon')
  
  }
  
  
  
  </script>
  <style>
 
  </style>