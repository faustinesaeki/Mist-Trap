<template>
  <div id="random-user" class="api-output">
    <h2>🎲 Случайный пользователь</h2>
    <p v-if="user"><strong>Имя:</strong> {{ user.name }}</p>
    <p v-if="user"><strong>Email:</strong> <a :href="'mailto:' + user.email">{{ user.email }}</a></p>
    <p v-if="user"><strong>Город:</strong> {{ user.address.city }}</p>
    <p v-if="user"><strong>Компания:</strong> {{ user.company.name }}</p>
    <p v-if="error" style="color:red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'RandomUser',
  data() {
    return {
      user: null,
      error: ''
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(users => {
        const randomIndex = Math.floor(Math.random() * users.length)
        this.user = users[randomIndex]
      })
      .catch(err => {
        this.error = 'Не удалось загрузить данные.'
        console.error(err)
      })
  }
}
</script>
