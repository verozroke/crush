<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
  <div
    id="Product"
    class="relative isolate mx-auto py-10"
  >
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div class="mx-auto mb-16 text-center">
      <h2 class="subtitle hidden1 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ $t('product.title') }}
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
      <ProductItem
        class="subtitle hidden1"
        v-for="product in products"
        :key="product.id"
        :product
      />
    </div>
  </div>

</template>

<script
  setup
  lang="ts"
>
import type { Product } from '~/types/product'
import productsData from '~/assets/data/products.json'

const { t } = useI18n()

const products = computed<Product[]>(() => [
  {
    "id": 1,
    "name": "Crush Classic",
    "type": t('product.products.classic'),
    "price": "3 " + t('shtuk'),
    "image": "crush-classic-3.png"
  },
  {
    "id": 2,
    "name": "Crush Dotted",
    "type": t('product.products.dotted'),
    "price": "3 " + t('shtuk'),
    "image": "crush-dotted-3.png"
  },
  {
    "id": 3,
    "name": "Crush Ultra",
    "type": t('product.products.ultra'),
    "price": "3 " + t('shtuk'),
    "image": "crush-ultra-3.png"
  },
  {
    "id": 4,
    "name": "Crush Long Time",
    "type": t('product.products.long-time'),
    "price": "3 " + t('shtuk'),
    "image": "crush-longtime-3.png"
  },
  {
    "id": 5,
    "name": "Crush Ribbed",
    "type": t('product.products.ribbed'),
    "price": "3 " + t('shtuk'),
    "image": "crush-ribbed-3.png"
  },
  {
    "id": 6,
    "name": "Crush Classic",
    "type": t('product.products.classic'),
    "price": "12 " + t('shtuk'),
    "image": "crush-classic-12.png"
  },
  {
    "id": 7,
    "name": "Crush Dotted",
    "type": t('product.products.dotted'),
    "price": "12 " + t('shtuk'),
    "image": "crush-dotted-12.png"
  },
  {
    "id": 8,
    "name": "Crush Ultra",
    "type": t('product.products.ultra'),
    "price": "12 " + t('shtuk'),
    "image": "crush-ultra-12.png"
  },
  {
    "id": 9,
    "name": "Crush Long Time",
    "type": t('product.products.long-time'),
    "price": "12 " + t('shtuk'),
    "image": "crush-longtime-12.png"
  },
  {
    "id": 10,
    "name": "Crush Ribbed",
    "type": t('product.products.ribbed'),
    "price": "12 " + t('shtuk'),
    "image": "crush-ribbed-12.png"
  }
])

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
  let hiddenTitleElements = document.querySelectorAll('.subtitle.hidden1')
  let hiddenElements = [...hiddenTitleElements,]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)


</script>

<style scoped>
.subtitle.hidden1 {
  opacity: 0;
  transition: all 2s;
  filter: blur(20px);
  transform: translateY(200px);
}

.subtitle.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>