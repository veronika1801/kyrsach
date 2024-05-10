 <template>
    <div class="card_data">
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
  const store = useStore();
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const props = defineProps({
    moon: Object
  })
  
  </script>

<style>
    .card_data {
    background-color: #D9D9D9;
    border-radius: 20px;
    
   }
</style>