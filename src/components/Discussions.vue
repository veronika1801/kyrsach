<template>
 
  <div class="discussions-item">
    <p class="discussions-id">{{ props.discussions.id }}</p> 
    <div class="discussions-descriptions">
      <p >{{ props.discussions.name }}</p>
      <p >{{ props.discussions.user_id  }} </p>
      
    </div> 
   
  </div>

</template>

<script setup>
// import { ref } from "vue";
// import {useStore} from "vuex";
// const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  discussions: Object
  
})


</script>



<style>

.discussions-id{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 65px;
      width: 50px;
      
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