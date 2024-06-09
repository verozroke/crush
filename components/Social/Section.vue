<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div
    id="Social"
    class="relative isolate py-16 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg text-gray-300">
          <h2 class="title hidden1 text-3xl font-bold tracking-tight text-white sm:text-4xl mb-5">Наши социальные сети и
            контакты.
          </h2>
          <div class="title hidden1 flex items-center gap-2"><b>Instagram: </b> <a
              target="_blank"
              class="hover:underline underline-offset-2"
              href="https://www.instagram.com/crush.kz.official?igsh=anoyNWhxOHRyanFw"
            >@crush.kz.official</a></div>
          <div class="title hidden1 flex items-center gap-2"><b>Tiktok: </b> <a
              target="_blank"
              class="hover:underline underline-offset-2"
              href="https://www.tiktok.com/@crush.kz?_t=8n21YxBKBgY&_r=1"
            >@crush.kz</a></div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="title2 hidden1 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <PhoneIcon class="h-6 w-6 text-white" />
            </div>
            <dt class="title2 hidden1 mt-4 font-semibold text-white">Номер телефона</dt>
            <dd class="title2 hidden1 mt-2 leading-7 text-white">Наш номер связи: <b>+7-777-000-88-07</b></dd>
          </div>
          <div class="flex flex-col items-start">
            <div class=" title2 hidden1 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <EnvelopeIcon class="h-6 w-6 text-white" />
            </div>
            <dt class="title2 hidden1 mt-4 font-semibold text-white">Email</dt>
            <dd class="title2 hidden1 mt-2 leading-7 text-white">Наша электронная почта: <b>info@crush.kz</b></dd>
          </div>
        </dl>
      </div>
    </div>
    <div
      class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
  </div>

</template>

<script
  setup
  lang="ts"
>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

setTimeout(() => {
  let hiddenTitleElements = document.querySelectorAll('.title.hidden1')
  let hiddenTitle2Elements = document.querySelectorAll('.title2.hidden1')
  let hiddenElements = [...hiddenTitleElements, ...hiddenTitle2Elements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style scoped>
.title.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0) translateX(-200px);
}

.title.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}


.title2.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0) translateX(200px);
}

.title2.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>