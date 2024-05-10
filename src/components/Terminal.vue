<script setup>

import {useStore} from "vuex";
const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  terminal: Object
})

</script>

<template>
    <div class="terminal-item">
      <p class="terminal-id">{{ props.terminal.id }}</p>  
      <p class="terminal-title">{{ props.terminal.title }}</p>
      <p class="terminal-description">{{ props.terminal.description }} </p>
    </div>
  </template>

<style>
  .terminal-item{
    display: flex;
    border-top: 2px solid #ccc; 
    line-height: 2;
    justify-content: space-between;
  }

  .terminal-title{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 65px;
    width: 450px;
    color: #0cf415;;
  }

  .terminal-description{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: justify;
    min-height: 65px;
    width: 600px;
  }

  .terminal-id{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 65px;
      width: 50px;
      
  }
</style>