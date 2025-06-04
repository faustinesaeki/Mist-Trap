<template>

  <div class="main_window">
    <a href="/"><img src="/img/Group 13.png" alt="" id="main_pic"></a>
    <MainNavbar />
    <br><div class="inner_window">
      <h1 class="welcome_text">Добро пожаловать на Mist Trap!</h1>
      <h2 class="main_text">
        Игровые сообщества для видеоигр в жанре "файтинг" достаточно развиты в США и других странах, пока в России жанр только недавно начал набирать заслуженную популярность благодаря выходу новых игр в популярных сериях - Mortal Kombat, Guity Gear, Street Fighter, и конечно, Tekken. <br><br>
        К сожалению, новые части часто вытесянют старые, несмотря на то, что прошлая итерация серии в техническом плане была более совершенна. <br><br>
        Именно поэтому мы решили создать небольшой угол на просторах Интернета, где русскоязычные игроки в файтинги смогут узнать что-то новое и научиться играть в Tekken 7. <br><br>
        Tekken 7 - прекрасная игра, которая достаточно хорошо себя показывает и на сегодняшний день как в казуальном, так и в соревновательном плане. К сожалению, большая часть обучающих видео про механики игры, а также уроков по игре на том или ином персонаже (иногда в формате документов) на английском языке. Это так или иначе ограничивает количество игроков, которые могли бы заинтересоваться серией, попробовать что-то новое и изучить достаточно глубокие и разнообразные механики. Некоторые персонажи достаточно простые, чтобы научиться играть на них интуитивно, но существует огромное количество ньюансов или скрытых преимуществ, о которых умалчивается во внутриигровом обучении и которые игроки находят абсолютно случайно, забывая через пару секунд и задаваясь вопросом: "А каким образом я вообще это сделал?" <br><br>
        Мы хотели бы собрать достаточно полную библиотеку информации по игре, которую мы очень любим, а также делиться нашим (возможно, в какой-то мере детским) интересом с другими, кто любит видеоигры также, как и мы. <br><br>
        На сайте присутствует вкладка с персонажами, аренами, а также форум, где игроки могут делиться информацией, предлагать улучшения для сайта или просто обсуждать что-то стороннее в рамках законодательства РФ. <br><br>
        Вся информация на сайте будет обновляться по мере её нахождения.
      </h2>
    </div>

    <RandomUser />

    <div class="toggle-container">
      <button @click="toggleDisplay" class="toggle-display-btn">
        {{ isFormVisible ? 'Скрыть' : 'Показать' }} форму
      </button>
      <button @click="toggleExistence" class="toggle-remove-btn">
        {{ formExists ? 'Удалить' : 'Создать' }} форму
      </button>
    </div>

    <CharacterForm v-if="formExists" v-show="isFormVisible" />
  </div>
</template>

<script>
import CharacterForm from '@/components/CharacterForm.vue'
import RandomUser from '@/components/RandomUser.vue'
import MainNavbar from '@/components/MainNavbar.vue'
export default {
  name: 'HomeView',
  components: { CharacterForm, RandomUser, MainNavbar },
  data() {
    return {
      isFormVisible: true,
      formExists: true
    }
  },
  methods: {
    toggleDisplay() {
      this.isFormVisible = !this.isFormVisible
    },
    toggleExistence() {
      this.formExists = !this.formExists
      if (!this.formExists) {
        this.isFormVisible = false
      } else {
        this.isFormVisible = true
      }
    }
  }
}
</script>