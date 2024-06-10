<template>
    <div class="general">
      <form  @submit.prevent="redacted">
      <h1>РЕДАКТИРОВАНИЕ ТЕРМИНАЛА</h1>
      <input class="input" type="text" placeholder="КОМАНДА" v-model="terminal.title" required/>
        <input class="input" type="text" placeholder="ОПИСАНИЕ" v-model="terminal.description" required/> 
        
      <div>
        <button class="but_reg" type="submit" >РЕДАКТИРОВАТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>
  
<script setup>

import {ref } from "vue";
import {redactTerminal} from "../api/terminal.js";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
  
const route = useRoute();
const router = useRouter();
  
const terminal = ref({
  id: route.params.id,
  title: route.params.title,
  description: route.params.description,
});

async function redacted() {
  await redactTerminal(terminal.value);
  router.push('/viewTerminal')
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