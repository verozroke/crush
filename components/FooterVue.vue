<template>
  <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-white font-medium">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-sm font-medium leading-6 text-white"
      >{{ item.name }}</a>
    </nav>

    <div class="flex justify-center space-x-5">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/telegram.png" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
      </a>
      <a
        href="https://messenger.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
      </a>
    </div>
    <p class="text-center text-white font-medium">&copy; 2024 Crush. Все права защищены.</p>
  </footer>
</template>

<script
  setup
  lang="ts"
>
const navigation = [
  { name: 'Главная', href: '#' },
  { name: 'Почему Crush?', href: '#' },
  { name: 'Преимущества', href: '#' },
  { name: 'Ассортимент', href: '#' },
  { name: 'Контакты', href: '#' },
]
</script>

<style scoped></style>