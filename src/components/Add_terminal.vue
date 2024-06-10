<template>
    <div class="general">
      <form  @submit.prevent="add">
      <h1>СОЗДАНИЕ КОМАНДЫ</h1>
        <input class="input" type="text" placeholder="КОМАНДА" v-model="add_Terminal.title" required/>
        <input class="input" type="text" placeholder="ОПИСАНИЕ" v-model="add_Terminal.description" required/>
         
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
      </div>
    </form>
  </div>
  </template>

<script setup>

import {addTerminal} from "../api/terminal.js";
import { useRouter } from "vue-router";

const router = useRouter();

const add_Terminal = {
    title: null,
    description: null,
}
async function add() {
  await addTerminal(add_Terminal);
  router.push('/viewTerminal')
}
</script>
<style></style>