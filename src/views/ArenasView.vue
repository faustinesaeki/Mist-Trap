<template>

  <div class="main_window">
  <a href="/"><img src="/img/Group 13.png" alt="" id="main_pic"></a>
  <MainNavbar /><br>
    <div class="inner_window">
      <h1>Арены в Tekken 7</h1>
      <button @click="toggleArenas" class="submit-btn">
        {{ showArenas ? 'Скрыть' : 'Показать' }} арены
      </button>
      <div v-show="showArenas" class="char_container">
        <div v-for="arena in arenas" :key="arena.id" class="char_column">
          <img :src="arena.image" :alt="arena.name" class="arena_list">
          <h3>{{ arena.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MainNavbar from '@/components/MainNavbar.vue';

export default {
  name: 'ArenasView',
  components: {MainNavbar},
  data() {
    return {
      showArenas: true,
      arenas: [
        { id: 1, name: "Mishima Dojo", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_00.png"  },
        { id: 2, name: "Forgotten Realm", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_01.png"  },
        { id: 3, name: "Jungle Outpost", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_02.png"  },
        { id: 4, name: "Arctic Snowfall", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_03.png"  },
        { id: 5, name: "Twilight Conflict", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_04.png"  },
        { id: 6, name: "Dragon's Nest", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_05.png"  },
        { id: 7, name: "Souq", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_06.png"  },
        { id: 8, name: "Devil's Pit", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_07.png"  },
        { id: 9, name: "Mishima Building", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_08.png"  },
        { id: 10, name: "Abandoned Temple", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_09.png"  },
        { id: 11, name: "Duomo Di Sirio", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_10.png"  },
        { id: 12, name: "Arena", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_11.png"  },
        { id: 13, name: "G-Corp, Helipad", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_12.png"  },
        { id: 14, name: "Brimstone & Fire", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_14.png"  },
        { id: 15, name: "Precipice of Fate", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_15.png"  },
        { id: 16, name: "Violet Systems", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_16.png"  },
        { id: 17, name: "Kinder Gym", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_19.png"  },
        { id: 18, name: "Infinite Azure", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_20.png"  },
        { id: 19, name: "Geometric Plane", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_21.png"  },
        { id: 20, name: "Howard Estate", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_23.png"  },
        { id: 21, name: "Hammerhead", image: "https://tekkenwarehouse.com/wp-content/uploads/2024/03/SS_ST_RND_24.png"  }
      ]
    }
  },
  methods: {
    toggleArenas() {
      this.showArenas = !this.showArenas
    }
  }
}
</script>

