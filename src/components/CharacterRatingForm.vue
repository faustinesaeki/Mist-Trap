<template>
  <div class="post-form-container">
    <h3>Оцените персонажа</h3>
    <form @submit.prevent="submitRating">
      <input type="text" v-model="ratingForm.name" placeholder="Имя персонажа" required>
      <input type="number" v-model.number="ratingForm.rating" min="1" max="5" placeholder="Оценка (1–5)" required>
      <button type="submit" class="submit-btn">Отправить</button>
    </form>

    <div id="response-message" v-if="message" :class="{ success: isSuccess, error: !isSuccess }">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterRatingForm',
  data() {
    return {
      ratingForm: {
        name: '',
        rating: null
      },
      message: '',
      isSuccess: false
    }
  },
  methods: {
    submitRating() {
      const name = this.ratingForm.name.trim();
      const rating = this.ratingForm.rating;

      if (!name || !rating || rating < 1 || rating > 5) {
        this.message = 'Введите корректные имя и оценку (1–5)';
        this.isSuccess = false;
        return;
      }

      fetch('https://jsonplaceholder.typicode.com/posts',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, rating })
      })
        .then(res => res.json())
        .then(data => {
          console.log('Данные отправлены:', data);
          this.message = `Спасибо за оценку "${name}"!`;
          this.isSuccess = true;
        })
        .catch(err => {
          console.error('Ошибка:', err);
          this.message = 'Ошибка при отправке данных';
          this.isSuccess = false;
        });
    }
  }
}
</script>

