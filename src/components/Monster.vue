<template>
  <div class="card_data">
    <div class="button_card" v-if="role_id==1">
    <button class="redact"><router-link class="router-redact" :to="{ name: 'Redact_monster', params: { id: props.monster.id, name: props.monster.name, healt: props.monster.healt, damage: props.monster.damage, quantity: props.monster.quantity, stun_id: props.monster.stun_id, avatar: props.monster.avatar  } }">РЕДАКТИРОВАТЬ</router-link></button>
    
    <button class="delete" @click="deleted">Х</button>
  </div>
      
      <img class="img_card" :src="getImageUrl(props.monster.avatar)" alt="Аватар" />
        <div class="info_card">
          <div>
            <p>НАЗВАНИЕ</p>
            <p>ЗДОРОВЬЕ</p>
            <p>СИЛА УРОНА</p>
            <p>КОЛ-ВО</p>
            <p>ОГЛУШЕНИЕ</p>
            
          </div>
      <div>    
          
          <p>{{ props.monster.name }}</p>
          <p >{{ props.monster.healt }} </p>
          <p >{{ props.monster.damage }} </p>
          <p>{{ props.monster.quantity }} </p>
          <p>{{ stun}} </p>
          
      </div>
          </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import {deleteMonster} from "../api/monster.js";

const props = defineProps({
  monster: Object
})

const stun_id = props.monster.stun_id;
let stun =0 
switch (stun_id) {
case 1:
stun = "да"
  break;
  case 2:
  stun = "нет"
  break;
}

let role_id = ref(localStorage.getItem('role_id'));
const emit = defineEmits(['delete']);

const deletedMonster = {
id: props.monster.id
}

function getImageUrl(avatar) {
    return `/images/${avatar}`;
}

async function deleted() {
await deleteMonster(deletedMonster);
}
</script>

<style>
  .router-redact{
    text-decoration: none;
    color: black;
  }
</style>