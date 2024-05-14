<template>
    <div class="title">
      <h1>ПРЕДМЕТЫ</h1>
      <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_item">ДОБАВИТЬ</router-link></button>
    </div>
        <div class="info">
            <Item v-for="item in item"  :item="item"></Item>
        </div>
</template>
  
  <script setup>
  
  import Item from "../components/Item.vue";
  
  
  import {onMounted, ref} from "vue";
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
  </script>
  
  <style>
  
    
  </style>