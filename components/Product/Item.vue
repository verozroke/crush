<template>
  <div
    @click="goTo('https://kaspi.kz/shop/search/?text=%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%B8%D0%B2%D1%8B%20Crush&q=%3AavailableInZones%3AMagnum_ZONE1%3Acategory%3ACondoms%3AmanufacturerName%3ACrush&sort=relevance&filteredByCategory=false&sc=')"
    class="group relative isolate py-10"
  >
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
      <div
        class="relative right-1/2 bottom-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div
      class="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 transition-all duration-200 lg:h-80"
    >
      <img
        :src="imgUrl"
        :alt="product.name"
        class="h-full w-full object-contain object-center lg:h-full lg:w-full"
      >
    </div>
    <div class="mt-4">
      <div>
        <h3 class="flex justify-between  text-base lg:text-lg font-bold text-white">
          <a
            target="_blank"
            href="https://kaspi.kz/shop/search/?text=%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%B8%D0%B2%D1%8B%20Crush&q=%3AavailableInZones%3AMagnum_ZONE1%3Acategory%3ACondoms%3AmanufacturerName%3ACrush&sort=relevance&filteredByCategory=false&sc="
          >
            <span
              aria-hidden="true"
              class="absolute inset-0"
            ></span>
            {{ product.name }}
          </a>
          <p class="text-sm lg:text-base font-medium text-crush-pink">{{ product.price }}</p>
        </h3>
        <p class="mt-1 text-sm  text-white">{{ product.type }}</p>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { Product } from '~/types/product';

const props = defineProps<{
  product: Product
}>()

const imgUrl = computed(() => {
  return new URL(`../../assets/images/condoms/${props.product.image}`, import.meta.url).href;
});


</script>

<style scoped></style>