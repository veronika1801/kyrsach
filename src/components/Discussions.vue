<template>
 
  <div class="discussions-item">
    <p class="discussions-id">{{ props.discussions.id }}</p> 
    <div class="discussions-descriptions">
      <p >{{ props.discussions.name }}</p>
      <p >{{ props.discussions.description }} </p>
    </div> 
    <div class="button_card_disc" v-if="role_id==1">
    <button class="terminal-delete" @click="deleted">Х</button>
    <!-- <button class="terminal-redact"><router-link class="router" :to="{ name: 'Redact_discussions', params: { id: props.discussions.id, name: props.discussions.name, user_id: props.discussions.user_id } }">РЕДАКТИРОВАТЬ</router-link></button> -->
    
  </div>
   
  </div>

</template>

<script setup>
import { ref } from "vue";
import {deleteDiscussions} from "../api/discussions.js";

let role_id = ref(localStorage.getItem('role_id'));
const props = defineProps({
  discussions: Object
})
const emit = defineEmits(['delete']);

const deletedDiscussions = {
id: props.discussions.id
}

async function deleted() {
await deleteDiscussions(deletedDiscussions);
}
</script>

<style>

.discussions-id{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 65px;
      width: 50px;
      
  }
  .button_card_disc{
    display: flex;
    justify-content: flex-end;
    
  }
  .discussions-item{
    display: flex;
    border-top: 2px solid #ccc; 
    line-height: 2;
    
  }
  .discussions-descriptions{
    display: flex;
    align-items:flex-start;
    flex-direction: column;
    
  }
 
  
</style>