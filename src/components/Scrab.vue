<template>
    
  <div class="card_data">
  <div class="button_card" v-if="role_id==1">
    <button class="redact"><router-link class="router-redact" :to="{ name: 'Redact_scrab', params: { id: props.scrab.id, name: props.scrab.name, min_cost: props.scrab.min_cost, max_cost: props.scrab.max_cost, weight: props.scrab.weight, conducts_electricity_id: props.scrab.conducts_electricity_id, two_handed_id: props.scrab.two_handed_id  } }">РЕДАКТИРОВАТЬ</router-link></button>
  <button class="delete" @click="deleted">Х</button> 
</div>
    <!-- <p class="img_info">{{ props.scrab.avatar }}</p> -->
    <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
      <div class="info_card">
        <div>
          <p>НАЗВАНИЕ</p>
          <p>МИН ЦЕНА</p>
          <p>МАКС ЦЕНА</p>
          <p>ВЕС</p>
          <p>ПРОВОДИТ ТОК</p>
          <p>ДВУРУЧНЫЙ</p>
        </div>
    <div >    
        <p>{{ props.scrab.name }}</p>
        <p >{{ props.scrab.min_cost }} </p>
        <p >{{ props.scrab.max_cost }} </p>
        <p>{{ props.scrab.weight }} </p>
        <p>{{ electricity }} </p>
        <p>{{ two_handed }} </p>
    </div>
        </div>
</div>
</template>
<script setup>
import { ref } from "vue";
import {deleteScrab} from "../api/scrab.js";
// import {useStore} from "vuex";
// const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
scrab: Object
})
const conducts_electricity_id = props.scrab.conducts_electricity_id;
let electricity =0 
switch (conducts_electricity_id) {
case 1:
electricity = "да"
break;
case 2:
electricity = "нет"
break;
}
const two_handed_id = props.scrab.two_handed_id;
let two_handed =0 
switch (two_handed_id) {
case 1:
two_handed = "две руки"
break;
case 2:
two_handed = "одну ячейку"
break;
}
let role_id = ref(localStorage.getItem('role_id'));
const emit = defineEmits(['delete']);

const deletedScrab = {
id: props.scrab.id
}

async function deleted() {
await deleteScrab(deletedScrab);

}

</script>

<style>

</style>