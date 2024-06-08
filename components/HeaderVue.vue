<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between py-6 px-6 md:px-20"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a
          href="#"
          class="-m-1.5 p-1.5"
        >
          <span class="sr-only">Crush</span>
          <img
            class="h-8  object-cover"
            src="~/assets/images/logo.png"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-medium leading-6 text-white"
        >{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
          type="submit"
          class="gap-2 items-center font-semibold leading-6 text-sm flex justify-center rounded-md border border-transparent bg-crush-pink px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >Связаться
          <PhoneXMarkIcon class="h-4 w-4" />
        </button>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="-m-1.5 p-1.5"
          >
            <span class="sr-only">Crush</span>
            <img
              class="h-8 w-auto"
              src="~/assets/images/logo.png"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-wite"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50"
              >{{ item.name }}</a>
            </div>
            <div class="py-6">
              <button
                type="submit"
                class="gap-2 items-center font-semibold leading-6 w-full text-sm flex justify-center rounded-md border border-transparent bg-crush-pink px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >Связаться
                <PhoneXMarkIcon class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PhoneXMarkIcon } from '@heroicons/vue/20/solid'


const navigation = [
  { name: 'Главная', href: '#' },
  { name: 'Почему Crush?', href: '#' },
  { name: 'Преимущества', href: '#' },
  { name: 'Ассортимент', href: '#' },
  { name: 'Контакты', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>