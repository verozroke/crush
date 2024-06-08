<template>
  <div class="relative isolate font-formular px-6 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
    <div class="mx-auto flex flex-col justify-center items-center max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <a
          href="#"
          class="m-6 h-24 flex justify-center"
        >
          <span class="sr-only">Crush</span>
          <img
            class="h-12 md:h-24 object-cover"
            src="~/assets/images/logo-500.png"
            alt=""
          />
        </a>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Find your
          <div class="text-crush-pink">crush</div>
        </h1>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            class="gap-2 items-center font-semibold leading-6 text-base flex justify-center rounded-md border border-transparent bg-crush-pink px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >Купить сейчас
            <CreditCardIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { CreditCardIcon } from '@heroicons/vue/20/solid'

</script>

<style scoped></style>