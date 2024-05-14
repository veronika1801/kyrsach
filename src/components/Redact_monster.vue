<!-- <template>
    <div class="login">
      <form  @submit.prevent="redact">
      <h1>СОЗДАНИЕ СУЩНОСТИ</h1>
        <input type="text" v-model= "props.monster.name">
        <input class="input" type="text"  v-model= "props.monster.healt" required/>
        <input class="input" type="number"  v-model= "props.monster.damage" required/>
        <input class="input" type="number"  v-model= "props.monster.quantity" required/>
        <p class="form_text">ИМЕЕТСЯ ЛИ ОГЛУШЕНИЕ:</p>
       
       <select class="select"  v-model= "props.monster.stun_id" >
              <option value="1">да</option>
              <option value="2">нет</option>
              
            </select> 
        
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
        
      </div>
    </form>
    
  </div>
  </template>

<script setup>

import {redactMonster} from "../api/monster.js";
import { useRouter } from "vue-router";
import {redactedMonster} from "../components/Monster.vue";

const router = useRouter();

const props = defineProps({
  monster: Object
})

async function redact() {
 
 await redactMonster();
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
</style> -->