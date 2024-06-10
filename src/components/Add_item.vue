<template>
    <div class="general">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ ПРЕДМЕТА</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="add_Item.name" required/>
        <input class="input" type="file" @change="handleFileChange" required /> 
        <p class="form_text">ТИП:</p>
       <select class="input"  v-model="add_Item.type_id" >
            <option value="1">механизм</option>
            <option value="2">оружие</option>
        </select> 
        <input class="input" type="number" placeholder="ЦЕНА" v-model="add_Item.cost" required/>
        <input class="input" type="number" placeholder="ВЕС" v-model="add_Item.weight" required/>
        <p class="form_text">ИМЕЕТ БАТАРЕЮ:</p>
       <select class="input"  v-model="add_Item.presence_of_battery_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
        <p class="form_text">ПРОВОДИТ ТОК:</p>
       <select class="input"  v-model="add_Item.conducts_electricity_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
        </select> 
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
      </div>
    </form>
  </div>
  </template>

<script setup>

import {addItem} from "../api/item.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Item = {
    name: null,
    type_id: null,
    cost: null,
    weight: null,
    presence_of_battery_id: null,
    conducts_electricity_id: null,
    avatar: null,
}

const handleFileChange = (event) => {
  add_Item.avatar = event.target.files[0]; 
};

async function add() {
  await addItem(add_Item);
  router.push('/viewItem')
}
</script>
<style></style>