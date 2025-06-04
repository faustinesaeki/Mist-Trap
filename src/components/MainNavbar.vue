<template>
  <nav class="navbar">
    <div class="navbar_container">
      <ul class="navbar_list">
        <li class="navbar_item">
          <router-link to="/" class="navbar_link">Главная</router-link>
        </li>
        <li class="navbar_item">
          <router-link to="/guides" class="navbar_link">Персонажи</router-link>
        </li>
        <li class="navbar_item">
          <router-link to="/arenas" class="navbar_link">Арены</router-link>
        </li>
        <li class="navbar_item">
          <router-link to="/forum" class="navbar_link">Форум</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>

export default {
  name: 'MainNavbar',
}
</script>

