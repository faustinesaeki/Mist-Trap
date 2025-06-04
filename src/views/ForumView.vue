<template>
  <div class="main_window">
  <a href="/"><img src="/img/Group 13.png" alt="" id="main_pic"></a>  
  <MainNavbar />
    <br>
    <div class="form-container">
      <h2 class="form-title">Регистрация</h2>
      <form class="registration-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input type="text" id="username" v-model="formData.username" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
        <div class="form-group">
          <label for="confirm-password">Подтвердите пароль</label>
          <input type="password" id="confirm-password" v-model="formData.confirmPassword" required>
        </div>
        <button type="submit" class="submit-btn">Зарегистрироваться</button>
      </form>
  </div>
</div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'

export default {
  name: 'ForumView',
  components: {MainNavbar},
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    submitForm() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('Пароли не совпадают!')
        return
      }

      fetch('https://jsonplaceholder.typicode.com/users',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(res => res.json())
      .then(() => alert('Регистрация успешна'))
      .catch(err => console.error(err))
    }
  }
}
</script>


