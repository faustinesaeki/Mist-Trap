# Mist-Trap

### (Vue.js, Vue Router, CSS)

**Link:** https://6866915b7824c03cdecfee66--hilarious-cranachan-3f1ddb.netlify.app/

Web application for some fan web-site about Tekken 7 on Vue.js idk

- src/components - re-used components for pages (navbar, random user, character rating form, character search)
- src/views - pages
- src/assets - style, logo, etc.

## Components

##### CharacterForm.vue
For checking the character if it is in the game or not (in our case -- an array of names). Returns an alert on the page.
isFormVisible/isFormExists - variables that can toggle the visibility or existence of a button on the page.

##### CharacterRatingForm.vue
Form for rating the character. Checks the input of the name and correct rating (1-5), sending the data on a test API using "POST" method.

##### RandomUser.vue
Fetches random data about user from a test API and displays it on the page in a container.

##### MainNavbar.vue
Main navbar for navigating pages using router-links.

## Views

##### ArenasView.vue
A gallery of arenas in Tekken 7, with a button on top that can hide or show them on the page. Controlled by a variable showArenas.

##### ForumView.vue
A registration form for the forum that isn't really working. But it's able to fetch data to a placeholder API, but nothing else past it.

##### GuidesView.vue
Displays characters of Tekken 7, sorted by the first letter of their name, down bellow on the page there is a form for rating the character.

##### HomeView.js
Main page, with welcome text, connected component for random user and characters

---
# Mist-Trap
Веб-приложение по сайтику про Теккен 7 на Vue.js

- src/components — переиспользуемые компоненты для страниц (навигационная панель, случайный пользователь, форма оценки персонажа, поиск персонажа)
- src/views — страницы
- src/assets — стили, логотип и т.д.

## Компоненты
##### CharacterForm.vue
Форма для проверки наличия персонажа в игре (в нашем случае — массив имён). Выводит всплывающее уведомление на странице.
isFormVisible / isFormExists — переменные, которые управляют видимостью или существованием кнопки на странице.

##### CharacterRatingForm.vue
Форма для оценки персонажа. Проверяет ввод имени и корректность оценки (1-5), отправляет данные на тестовый API с помощью метода "POST".

##### RandomUser.vue
Получает случайные данные о пользователе с тестового API и отображает их на странице в контейнере.

##### MainNavbar.vue
Основная навигационная панель для перехода между страницами с использованием router-links.

## Страницы (Views)
ArenasView.vue
Галерея арен из Tekken 7, с кнопкой сверху, которая может скрывать или показывать арены на странице. Управление осуществляется через переменную showArenas.

##### ForumView.vue
Форма регистрации на форуме, которая пока не работает по назначению. Она способна отправлять данные на тестовый API, но дальнейшая обработка не реализована.

##### GuidesView.vue
Отображает персонажей Tekken 7, отсортированных по первой букве их имени. Ниже на странице есть форма для оценки персонажа.

##### HomeView.vue
Главная страница с приветственным текстом, подключёнными компонентами случайного пользователя и информации о персонажах.

