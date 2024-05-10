<template>
    <div class="login">
      <form @submit.prevent="submitForm">
      <h1>ВХОД</h1>
        <input class="input" type="text" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" v-model="userLogin.login" required/>
        <input class="input" type="password" placeholder="ПАРОЛЬ" v-model="userLogin.password" required/>
      <div class="actions">
        <button class="but_reg" type="submit">ВОЙТИ</button>
        
      </div>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
  </template>

  <script setup>
  
  import { useRouter } from 'vue-router';
  import { log } from '../api/login.js';

  
  const router = useRouter();

  const userLogin = {
  login: null,
  password: null,
}
  
  async function submitForm() {
  
    await log(userLogin);
    router.push('/')
}
 


  </script>

  <style>
  form{
    display:flex;
    flex-direction: column;
    gap:48px;
      
  }
 
.input{
  border-radius: 20px;
  height: 30px;
  width: 400px;
  margin-left: 100px;
}
.but_reg{
  display: flex;
  justify-content: start;
  margin-left: 100px;
  padding: 8px;
  justify-content: center;
}
input::placeholder{
  padding-left: 13px;
  color: rgb(66, 66, 66);
}
  </style>