 <template>
    <div class="card_data">
      <div class="button_card">
        <button class="redact">РЕДАКТИРОВАТЬ</button>
        <button class="delete" @click="deleteMoon">Х</button>
      </div>
        <!-- <p class="img_info">{{ props.moon.avatar }}</p> -->
        <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
          <div class="info_card">
            <div>
              <p>НАЗВАНИЕ</p>
              <p>СЛОЖНОСТЬ</p>
              <p>ЦЕНА</p>
              <p>КОЛ-ВО ПРЕДМЕТОВ</p>
              <p>ПОГОДА</p>
            </div>
        <div >    
            <p>{{ props.moon.name }}</p>
            <!-- заменить таблицу с tier_id -->
            <p >{{ props.moon.tier_id }} </p>
            <p >{{ props.moon.cost }} </p>
            <p>{{ props.moon.number_of_items }} </p>
            <p>{{ props.moon.weather }} </p>
        </div>
            </div>
    </div>
  </template>
  <script setup>

  import {useStore} from "vuex";
 
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const props = defineProps({
    moon: Object
  })
  const emit = defineEmits(['delete']);
  const deleteMoon = () => {
  emit('delete', props.moon.id);
};

  
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
   .button_card{
    display: flex;
    justify-content: end;
    padding: 15px;
    gap: 15px;
    align-items: center;
    
   }
   .redact{
    background-color: #9B9B9B;
    height: 20px;
    display: flex;
    align-items: center;
    color: white
   }
   .delete{
    background-color: #9B9B9B;
    width: 25px;
    height: 25px;
    border-radius: 7px;
    color: white
   }
</style>