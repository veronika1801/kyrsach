<template>
  <div class="login">
    <form  @submit.prevent="redacted">
    <h1>РЕДАКТИРОВАНИЕ СУЩНОСТИ</h1>
      <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model= "monster.name">
      <input class="input" type="text" placeholder="ЗДОРОВЬЕ" v-model= "monster.healt" required/>
      <input class="input" type="number" placeholder="СИЛА УРОНА" v-model= "monster.damage" required/>
      <input class="input" type="number" placeholder="КОЛ-ВО" v-model= "monster.quantity" required/>
      <p class="form_text">ИМЕЕТСЯ ЛИ ОГЛУШЕНИЕ:</p>
     
     <select class="input"  v-model= "monster.stun_id" >
            <option value="1">да</option>
            <option value="2">нет</option>
            
          </select> 
      
    <div>
      <button class="but_reg" type="submit" >РЕДАКТИРОВАТЬ</button>
      
    </div>
  </form>
  
</div>
</template>

<script setup>
import {ref } from "vue";
import {redactMonster} from "../api/monster.js";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();


const monster = ref({
id: route.params.id,
name: route.params.name,
healt: route.params.healt,
damage: route.params.damage,
quantity: route.params.quantity,
stun_id: route.params.stun_id,

});


async function redacted() {

await redactMonster(monster.value);
router.push('/viewMonster')

}



</script>
<style>
.select{
  width: 400px;
  display: flex;
  margin-left: 100px;
}
.form_text{
display: flex;
margin-left: 100px;

}
</style>