<template>
    <div class="title">
      <h1>ПРЕДМЕТЫ</h1>
      <div class="monster_button">
      <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_item">ДОБАВИТЬ</router-link></button>
      <button class="add" @click="sortItems">СОРТИРОВАТЬ </button>
      
      </div>
    </div>
        <div class="info">
            <Item v-for="item in item"  :item="item"></Item>
        </div>
</template>
  
<script setup>
  
import Item from "../components/Item.vue";
import {onMounted, ref, computed} from "vue";
import {getItem} from "../api/item.js";

let role_id = ref(localStorage.getItem('role_id'));
const item = ref([]);
  
const renderItem = async () => {
  try {
    item.value = await getItem();
  } catch (error) {
    console.error("Error rendering item:", error);
  }
};
  
onMounted(async () => {
  await renderItem();
});

const sortedItems = computed(() => {
    return [...item.value].sort((a, b) => b.weight - a.weight); 
});

const sortItems = () => {
  item.value = sortedItems.value; 
};
</script>
  
  <style>
 
    
  </style>