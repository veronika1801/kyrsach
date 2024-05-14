<template>
  <div class="terminal-item">
    <p class="terminal-id">{{ props.terminal.id }}</p>  
    <p class="terminal-title">{{ props.terminal.title }}</p>
    <p class="terminal-description">{{ props.terminal.description }} </p>
    <!-- <p class="terminal-delete">X</p> -->
    <div class="button_card_terminal" v-if="role_id==1">
    <button class="terminal-delete" @click="deleted">Х</button>
    <button class="terminal-redact"><router-link class="terminal_redact" to="">РЕДАКТИРОВАТЬ</router-link></button>
  </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import {deleteTerminal} from "../api/terminal.js";
// import {useStore} from "vuex";
// const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  terminal: Object
})
let role_id = ref(localStorage.getItem('role_id'));
const emit = defineEmits(['delete']);

const deletedTerminal = {
id: props.terminal.id
}

async function deleted() {
await deleteTerminal(deletedTerminal);

}

</script>



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
  .terminal-delete{
    width: 50px;
    color: red;
    background-color: #232323; 
    padding-top: 40px;
    font-size: 20px;
  }
  .terminal-redact{
    background-color: #232323; 
    padding-top: 40px;
    
  }
  .terminal_redact{
    color: white;
    text-decoration: none;
  }
  .button_card_terminal{
    display: flex;
    gap: 10px;
    align-items: center;
    padding-bottom: 65px;
  }
</style>