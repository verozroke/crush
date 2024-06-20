<template>
  <button
    @click="switchLocale"
    class="p-0 flex items-center justify-center w-12 h-12 z-10 fixed bottom-5 right-5 bg-crush-pink bg-opacity-100 rounded-full hover:bg-opacity-75 hover:cursor active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
  >
    <span class="text-white w-6 h-6 inline-block font-bold uppercase">{{ locale }}</span>
  </button>
</template>

<script
  setup
  lang="ts"
>
import { LanguageIcon } from '@heroicons/vue/20/solid'
const { locale, setLocale } = useI18n()


const switchLocale = () => setLocale(locale.value === 'ru' ? 'kz' : 'ru')

</script>

<style scoped></style>