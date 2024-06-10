<template>
    <div class="general">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ МОНСТРА</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="add_Monster.name" required/>
        <input class="input" type="file" @change="handleFileChange" required /> 
        <input class="input" type="text" placeholder="ЗДОРОВЬЕ" v-model="add_Monster.healt" required/>
        <input class="input" type="number" placeholder="СИЛА УРОНА" v-model="add_Monster.damage" required/>
        <input class="input" type="number" placeholder="КОЛ-ВО" v-model="add_Monster.quantity" required/>
        <p class="form_text">ИМЕЕТСЯ ЛИ ОГЛУШЕНИЕ:</p>
       
       <select class="input" v-model="add_Monster.stun_id" >
              <option  value="1">да</option>
              <option  value="2">нет</option>
              
            </select> 
        
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>

<script setup>

import {addMonster} from "../api/monster.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Monster = {
  name: null,
  healt: null,
  damage: null,
  quantity: null,
  stun_id: null,
  avatar: null,
}
const handleFileChange = (event) => {
  add_Monster.avatar = event.target.files[0]; 
};

async function add() {
  await addMonster(add_Monster);
  router.push('/viewMonster')

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