<template>

  <div class="main_window">
  <a href="/"><img src="/img/Group 13.png" alt="" id="main_pic"></a>
  <MainNavbar />
    <div class="inner_window">
      <h1>Персонажи Tekken 7 в алфавитном порядке</h1>

      <div class="char_container">
        <!-- A-G -->
        <div class="char_column">
          <h2>A-G</h2>
          <ul class="char_list">
            <li v-for="char in charsAtoG" :key="char.name">
              <img :src="char.image" :alt="char.name" width="60">
              {{ char.name }}
            </li>
          </ul>
        </div>

        <div class="char_column">
          <h2>H-L</h2>
          <ul class="char_list">
            <li v-for="char in charsHtoL" :key="char.name">
              <img :src="char.image" :alt="char.name" width="60">
              {{ char.name }}
            </li>
          </ul>
        </div>

        <div class="char_column">
          <h2>M-Z</h2>
          <ul class="char_list">
            <li v-for="char in charsMtoZ" :key="char.name">
              <img :src="char.image" :alt="char.name" width="60">
              {{ char.name }}
            </li>
          </ul>
        </div>
      </div>
      <CharacterRatingForm/>
    </div>
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
import CharacterRatingForm from '@/components/CharacterRatingForm.vue'
export default {
  name: 'GuidesView',
  components: {
    MainNavbar,
    CharacterRatingForm
  },
  data() {
    return {
      allCharacters: [
        { name: 'Akuma', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MRX.png'  },
        { name: 'Alisa Bosconovitch', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ASA.png'  },
        { name: 'Anna Williams', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ANN.png'  },
        { name: 'Armor King', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_AKI.png'  },
        { name: 'Asuka Kazama', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ASK.png'  },
        { name: 'Bob', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_BOB.png'  },
        { name: 'Bryan Fury', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_BRY.png'  },
        { name: 'Claudio Serafino', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ITA.png'  },
        { name: 'Devil Jin', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_DVJ.png'  },
        { name: 'Dragunov', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_DRA.png'  },
        { name: 'Eddy Gordo', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_EDD.png'  },
        { name: 'Eliza', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ELZ.png'  },
        { name: 'Fahkumram', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_NSC.png'  },
        { name: 'Feng Wei', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_FEN.png'  },
        { name: 'Ganryu', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_GAN.png'  },
        { name: 'Geese', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MRY.png'  },
        { name: 'Gigas', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_CRZ.png'  },
        { name: 'Heihachi Mishima', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_HEI.png'  },
        { name: 'Hwoarang', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_HWO.png'  },
        { name: 'Jack-7', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_JAC.png'  },
        { name: 'Jin Kazama', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_JIN.png'  },
        { name: 'Josie Rizal', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MUT.png'  },
        { name: 'Julia Chang', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_JUL.png'  },
        { name: 'Katarina Alves', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LTN.png'  },
        { name: 'Kazumi Mishima', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_KZM.png'  },
        { name: 'Kazuya Mishima', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_KAZ.png'  },
        { name: 'King', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_KIN.png'  },
        { name: 'Kuma', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_KUM_1.png'  },
        { name: 'Kunimitsu', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_KNM.png'  },
        { name: 'Lars Alexandersson', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LAR.png'  },
        { name: 'Marshall Law', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LAW.png'  },
        { name: 'Lee Chaolan', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LEE_1.png'  },
        { name: 'Lei Wulong', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LEI.png'  },
        { name: 'Leo Kliesen', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LEO.png'  },
        { name: 'Leroy Smith', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_NSB.png'  },
        { name: 'Lidia Sobieska', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_NSD.png'  },
        { name: 'Lili', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_LIL.png'  },
        { name: 'Lucky Chloe', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_DNC.png'  },
        { name: 'Marduk', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MAR.png'  },
        { name: 'Master Raven', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_FRV.png'  },
        { name: 'Miguel Caballero Rojo', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MIG.png'  },
        { name: 'Negan', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_NSA.png'  },
        { name: 'Nina Williams', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_NIN.png'  },
        { name: 'Noctis Lucis Caelum', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_MRZ.png'  },
        { name: 'Panda', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_PAN_1.png'  },
        { name: 'Paul Phoenix', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_PAU.png'  },
        { name: 'Shaheen', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ARB.png'  },
        { name: 'Steve Fox', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_STE.png'  },
        { name: 'Xiaoyu', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_XIA.png'  },
        { name: 'Yoshimitsu', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_YOS.png'  },
        { name: 'Zafina', image: 'https://tekkenwarehouse.com/wp-content/uploads/2024/03/CS_CH_PANEL_ZAF.png'  }
      ],
      ratingForm: {
        name: '',
        rating: null
      },
      message: '',
      isSuccess: false,
      isFormVisible: true,
      formExists: true
    }
  },
  computed: {
    charsAtoG() {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      return this.allCharacters.filter(char => letters.includes(char.name[0]))
    },
    charsHtoL() {
      const letters = ['H', 'I', 'J', 'K', 'L']
      return this.allCharacters.filter(char => letters.includes(char.name[0]))
    },
    charsMtoZ() {
      const letters = ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      return this.allCharacters.filter(char => letters.includes(char.name[0]));
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
