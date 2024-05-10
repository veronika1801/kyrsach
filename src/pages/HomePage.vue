<template>
    <div class="home">
      <h1 >ГЛАВНАЯ</h1>
      <div class="info_home">
        <div class="text_home">
          <p class="text">
            Добро пожаловать на сайте, посвященному игре “LETHAL COMPANY”. 
  Здесь вы найдете все, что связано с игрой, а также проведете  время, общаясь и делясь информацией с другими пользователями. 
          </p>
          <p class="text">
            “LETHAL COMPANY” - кооперативная компьютерная игра в жанре хоррок. Управляемые персонажи - сотрудники компании, посещают  заброшенные промышленные луны, где им угрожают разного рода опасности. В каждой игровой сессии игроки разыскивают металлолом в комплексах, пытаясь донести его до корабля. 
          </p>
          <div class="navigations">
              <button class="navigation"><router-link class="router" to="/viewMoon">ЛУНЫ</router-link></button>
              <button class="navigation"><router-link  to=""></router-link>ПРЕДМЕТЫ</button>
              <button class="navigation"><router-link class="router" to="/viewMonster">СУЩНОСТИ</router-link></button>
              <button class="navigation"><router-link class="router" to="/viewTerminal">ТЕРМИРНАЛ</router-link></button>
              <button class="navigation"><router-link  to=""></router-link>ЛОМ</button>
          </div>
        </div>
        <div class="card_home">
          <img class="img_card" src="../assets/img/Lethal_Company_cover.jpg" alt="">
          <div class="info_card">
            <div >
              <p>РАЗРАБОТЧИК</p>
              <p>ДАТА ВЫПУСКА</p>
              <p>ЖАНР</p>
              <p>РЕЖИМ ИГРЫ</p>
              <p>ЯЗЫК ИГРЫ</p>
            </div>
            <div >
              <p>Zeekerss</p>
              <p>24 октября 2023</p>
              <p>ужасы, выживание</p>
              <p>кооперативный</p>
              <p>английский</p>
            </div>
          </div>
        </div>
      </div>
      
  
    </div>
  </template>
  <style>
  .text { 
    border-bottom: 2px solid #ccc; 
    padding-top: 65px;
    padding-bottom: 65px; 
    line-height: 2;
   }
   
   h1{
    display: flex;
    margin: 60px 0;
   }
   .text_home {
    width: 600px;
    margin-left:100px;
    text-align: left;
    
   }
   
   .card_home {
    background-color: #D9D9D9;
    border-radius: 20px;
    margin-top: 90px;
    display: flex;
    justify-content: end;
    width: 350px;
    flex-direction: column;
   }
   .info_home{
    display: flex;
    gap: 160px;
    
    
   }
   .img_card{
    width: 350px;
    height: 380px;
    /* margin-top: 20px; */
    border-radius: 20px;
   }
   .info_card{
    display: flex;
    color: black;
    gap: 100px;
    text-align: left;
    padding-left: 20px;
    
    line-height: 1.5;
   }
   .navigations {
    display: flex;
    gap: 20px;
    padding-top: 40px;
    
  }
  
  .navigation {
    background-color:	#D9D9D9;
    border-radius:20px;
    color: black;
    border: none;
    height:30px;
    width:100px ;
    
  }
  
  .navigation:nth-child(even) {
    margin-top: 60px;
  }
  </style>
  