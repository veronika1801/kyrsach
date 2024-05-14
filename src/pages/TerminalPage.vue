<template>
  <div class="title">
    <h1>ТЕРМИНАЛ</h1>
    <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_terminal">ДОБАВИТЬ</router-link></button>
  </div>
  <div class="test">
    <div class="terminal">
        <div class="name">
            <p>КОМАНДА</p>
            <p>ОПИСАНИЕ</p>
        </div>
      <Terminal v-for="terminal in terminal" :key="terminal.id" :terminal="terminal"></Terminal>
  </div>
</div>
</template>

<script setup>

import Terminal from "../components/Terminal.vue";


import {onMounted, ref} from "vue";
import {getTerminal} from "../api/terminal.js";
let role_id = ref(localStorage.getItem('role_id'));
const terminal = ref([]);

const renderTerminal = async () => {
  try {
    terminal.value = await getTerminal();
  } catch (error) {
    console.error("Error rendering terminal:", error);
  }
};

onMounted(async () => {
  await renderTerminal();
});
</script>

<style>
  .test{
    display: flex;
    justify-content: center;
  }
  .terminal{
    display: flex;
    flex-direction: column;
    width: 1000px;
  }

  .name{
  display: flex;
  justify-content: space-around; 
  border-top: 2px solid #ccc; 
  line-height: 2;
  }
  
</style>