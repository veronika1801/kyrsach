<template>
    <div class="general">
      <form @submit.prevent="register" >
      <h1>РЕГИСТРАЦИЯ</h1>
        <input class="input" type="text" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" v-model="userRegister.login" required/>
        <input class="input" type="password" placeholder="ПАРОЛЬ" v-model="userRegister.password" required/>
      <div>
        <button class="but_reg" type="submit">РЕГИСТРАЦИЯ</button>
        
      </div>
    </form>
    <p >{{ error  }}</p>
  </div>
  </template>

<script setup>

import { ref } from 'vue';
import {registerUser} from "../api/registration.js";
import { useRouter } from "vue-router";

const error = ref(null);
const router = useRouter();

const userRegister = {
  login: null,
  password: null,
}

async function register() {
  const { token, error: registrationError } = await registerUser(userRegister);
  if (token) {
  router.push('/');
  } else {
  error.value = registrationError;
  }
}
</script>

<style scoped>
form{
    display:flex;
    flex-direction: column;
    gap:48px;
      
  }


.input{
  border-radius: 20px;
  height: 30px;
  width: 400px;
  margin-left: 250px;
  color: rgb(66, 66, 66);
 
}
.but_reg{
  display: flex;
  justify-content: start;
  margin-left: 250px;
  justify-content: center;
  text-decoration: none;
  color:  white;
  

 
}
input::placeholder{
  padding-left: 13px;
  color: rgb(66, 66, 66);
}
</style>