// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     // ...
//   },
//   mutations: {
//     // ...
//   },
//   actions: {
//     async deleteMoon({ commit }, moonId) {
//       // Выполняем запрос на удаление луны
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/deleteMoon`, moonId, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })

//       // Обновляем список лун в состоянии хранилища
//       commit('UPDATE_MOONS', response.data)
//     }
//   },
//   getters: {
//     // ...
//   }
// })

// export default store