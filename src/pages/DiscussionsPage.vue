
<template>
  <div class="title">
    <h1>ОБСУЖДЕНИЯ</h1>
    <button class="add" v-if="setToken"><router-link class="router" to="/Add_discussions">СОЗДАТЬ ТЕМУ</router-link></button>
  </div>
  
  <div class="test">
    
   <div class="discussion">
      <Discussions v-for="discussions in discussions"  :discussions="discussions"></Discussions>
    </div>
  </div>
 
  
</template>
  
  <script setup>
  
  import Discussions from "../components/Discussions.vue";
  
  
  import {onMounted, ref} from "vue";
  import {getDiscussions} from "../api/discussions.js";
  let setToken = ref(localStorage.getItem('token'));
  const discussions = ref([]);
  
  const renderDiscussions = async () => {
    try {
      discussions.value = await getDiscussions();
    } catch (error) {
      console.error("Error rendering new:", error);
    }
  };
  
  onMounted(async () => {
    await renderDiscussions();
  });
  </script>
  
  <style>
    .discussion{
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
 
    
  </style>