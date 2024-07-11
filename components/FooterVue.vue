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

    <p class="text-center text-white font-medium">ТОО ФАРМАКОМ БИН 980940004651. Все права защищены.</p>
    <NuxtImg
      src="/cert.png"
      @click="openCertificate"
      class="w-40 opacity-50 mx-auto hover:opacity-100 hover:scale-110 transition-all"
    />
  </footer>
</template>

<script
  setup
  lang="ts"
>

const { t } = useI18n()

const openCertificate = () => {
  const link = document.createElement('a')
  link.href = '/cert.png'
  link.target = "_blank"
  link.click()
}

function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID) ?? document.createElement('div')
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const navigation = computed(() => [
  { name: t('header.home'), href: 'Hero' },
  { name: t('header.about_us'), href: 'AboutUs' },
  { name: t('header.info'), href: 'Info' },
  { name: t('header.product'), href: 'Product' },
  { name: t('header.social'), href: 'Social' },
])

</script>

<style scoped></style>