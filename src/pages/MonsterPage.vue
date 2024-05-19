<template>
    <div class="title">
      <h1>СУЩНОСТИ</h1>
      <div class="monster_button">
      <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_monster">ДОБАВИТЬ</router-link></button>
      <button class="add" ><router-link class="router" to="/searchMonster">ПОИСК</router-link></button>
    </div>
    
    </div>

        <div class="info">
            <Monster v-for="monster in monster"  :monster="monster"></Monster>
        </div>
</template>
  
  <script setup>
  
  import Monster from "../components/Monster.vue";
  
 
  import {onMounted, ref} from "vue";
  import {getMonster} from "../api/monster.js";
  let role_id = ref(localStorage.getItem('role_id'));
  const monster = ref([]);
  
  const renderMonster = async () => {
    try {
        monster.value = await getMonster();
    } catch (error) {
      console.error("Error rendering monster:", error);
    }
  };
  
 
        
  
  onMounted(async () => {
    await renderMonster();
   
  });
  </script>
  
  <style>
    .monster_button{
      display: flex;
      flex-direction: column;
      
    }
  </style>