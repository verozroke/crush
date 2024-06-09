<template>
  <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-white font-medium">
      <a
        v-for="item in navigation"
        :key="item.name"
        class="text-sm font-medium leading-6 text-white"
        @click="scrollDown(item.href)"
      >{{ item.name }}</a>
    </nav>

    <p class="text-center text-white font-medium">&copy; 2024 Crush. Все права защищены.</p>
  </footer>
</template>

<script
  setup
  lang="ts"
>



function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID) ?? document.createElement('div')
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const navigation = [
  { name: 'Главная', href: 'Hero' },
  { name: 'Почему Crush?', href: 'AboutUs' },
  { name: 'Преимущества', href: 'Info' },
  { name: 'Ассортимент', href: 'Product' },
  { name: 'Контакты', href: 'Social' },
]
</script>

<style scoped></style>