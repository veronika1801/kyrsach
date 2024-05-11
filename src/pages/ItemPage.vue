<template>
    <div class="title">
      <h1>ПРЕДМЕТЫ</h1>
    </div>
        <div class="info">
            <Item v-for="item in item"  :item="item"></Item>
        </div>
</template>
  
  <script setup>
  
  import Item from "../components/Item.vue";
  
  
  import {onMounted, ref} from "vue";
  import {getItem} from "../api/item.js";
  
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
    .moons{
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
    }
    
  </style>