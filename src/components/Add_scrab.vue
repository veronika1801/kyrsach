<template>
    <div class="login">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ ПРЕДМЕТА</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="add_Scrab.name" required/>
        <input class="input" type="number" placeholder="МИН ЦЕНА" v-model="add_Scrab.min_cost" required/>
        <input class="input" type="number" placeholder="МАКС ЦЕНА" v-model="add_Scrab.max_cost" required/>
        <input class="input" type="number" placeholder="ВЕС" v-model="add_Scrab.weight" required/>
        <p class="form_text">ПРОВОДИТ ТОК:</p>
       <select class="input"  v-model="add_Scrab.conducts_electricity_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
        <p class="form_text">ДВУРУЧНЫЙ:</p>
       <select class="input"  v-model="add_Scrab.two_handed_id" >
            <option value="1">две руки</option>
            <option value="2">одну ячейку</option>
        </select> 
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
      </div>
    </form>
  </div>
  </template>

<script setup>

import {addScrab} from "../api/scrab.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Scrab = {
    name: null,
    min_cost: null,
    max_cost: null,
    weight: null,
    conducts_electricity_id: null,
    two_handed_id: null,
    

}
async function add() {
 
 await addScrab(add_Scrab);
 router.push('/viewScrab')

}


</script>
<style>
 
</style>