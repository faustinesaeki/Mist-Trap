<template>
  <form @submit.prevent="checkCharacter" class="character-form" v-if="formExists" :style="{ display: isFormVisible ? 'block' : 'none' }">
    <input v-model="characterName" placeholder="Введите имя персонажа (например: Kazuya)" class="character-input" />
    <button type="submit" class="check-character-btn">Проверить персонажа</button>
  </form>
</template>

<script>
export default {
  name: 'CharacterForm',
  data() {
    return {
      characterName: '',
      characters: [
        'Akuma', 'Alisa', 'Anna', 'Armor King', 'Asuka', 'Bob', 'Bryan',
        'Claudio', 'Devil Jin', 'Dragunov', 'Eddy', 'Eliza', 'Fahkumram',
        'Feng', 'Ganryu', 'Geese', 'Gigas', 'Heihachi', 'Hwoarang', 'Jack-7',
        'Jin', 'Josie', 'Julia', 'Katarina', 'Kazumi', 'Kazuya', 'King',
        'Kuma', 'Kunimitsu', 'Lars', 'Law', 'Lee', 'Lei', 'Leo', 'Leroy',
        'Lidia', 'Lili', 'Lucky Chloe', 'Marduk', 'Master Raven', 'Miguel',
        'Negan', 'Nina', 'Noctis', 'Panda', 'Paul', 'Shaheen', 'Steve',
        'Xiaoyu', 'Yoshimitsu', 'Zafina'
      ],
      isFormVisible: true,
      formExists: true
    }
  },
  methods: {
    checkCharacter() {
      if (this.characters.includes(this.characterName)) {
        alert(`Персонаж "${this.characterName}" есть в Tekken 7!`)
      } else {
        alert(`Персонажа "${this.characterName}" нет в базе.`)
      }
    }
  }
}
</script>

