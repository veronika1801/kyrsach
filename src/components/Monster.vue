<template>
    <div class="card_data">
        <!-- <p class="img_info">{{ props.moon.avatar }}</p> -->
        <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
          <div class="info_card">
            <div>
              <p>НАЗВАНИЕ</p>
              <p>ЗДОРОВЬЕ</p>
              <p>СИЛА УРОНА</p>
              <p>КОЛ-ВО</p>
              <p>ОГЛУШЕНИЕ</p>
              <p>ЛУНА</p>
            </div>
        <div >    
            <p>{{ props.monster.name }}</p>
            <p >{{ props.monster.healt }} </p>
            <p >{{ props.monster.cost }} </p>
            <p>{{ props.monster.quantity }} </p>
            <p>{{ props.monster.stun_id }} </p>
            <p>{{ props.monster.moons_id }} </p>
        </div>
            </div>
    </div>
  </template>
  <script setup>

  import {useStore} from "vuex";
  const store = useStore();
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const props = defineProps({
    monster: Object
  })
  
  </script>

<style>
    .card_data {
    background-color: #D9D9D9;
    border-radius: 20px;
    background-color: #D9D9D9;
    border-radius: 20px;
    display: flex;
    justify-content: end;
    width: 350px;
    flex-direction: column;
    
   }
</style>