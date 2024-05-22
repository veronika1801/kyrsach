<template>
    <div class="general">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ НОВОСТИ</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="add_Discussions.name" required/>
        <input class="input" type="text" placeholder="ОПИСАНИЕ" v-model="add_Discussions.description" required/>
         
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
      </div>
    </form>
  </div>
  </template>

<script setup>

import {addDiscussions} from "../api/discussions.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Discussions = {
    name: null,
    description:null,
    
}
async function add() {
 await addDiscussions(add_Discussions);
 router.push('/viewDiscussions')


}


</script>
<style>
 
</style>