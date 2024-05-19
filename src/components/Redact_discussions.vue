<!-- <template>
    <div class="login">
      <form  @submit.prevent="redacted">
      <h1>СОЗДАНИЕ ТЕМЫ</h1>
        <input class="input" type="text" placeholder="НАЗВАНИЕ" v-model="discussions.name" required/>
        <input class="input" type="text" placeholder="ОПИСАНИЕ" v-model="discussions.description" required/>
         
      <div>
        <button class="but_reg" type="submit">ДОБАВИТЬ</button>
      </div>
    </form>
  </div>
  </template>

<script setup>
  import {ref } from "vue";
  import {redactDiscussions} from "../api/discussions.js";
  import { useRouter } from "vue-router";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const router = useRouter();
  
  
  const discussions = ref({
  id: route.params.id,
  name: route.params.name,
  user_id: route.params.user_id,
  
  });
  
  
  async function redacted() {
  
  await redactDiscussions(discussions.value);
  router.push('/viewDiscussions')
  
  }
<style>
 
</style> -->