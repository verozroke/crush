<template>
  <div class="relative isolate py-10">
    <div
      class="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Обратная связь</h2>
      <p class="mt-2 text-lg leading-8 font-medium text-crush-pink">Оставьте нам ваши контактные данные и мы свяжемся с
        вами!.</p>
    </div>
    <form
      action="#"
      method="POST"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white"
          >Ваше ФИО</label>
          <div class="mt-2.5">
            <input
              v-model="name"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              placeholder="Введите ваше ФИО."
              class="block w-full rounded-md border-0 px-3.5 py-2 text-darkblue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-white"
          >Email</label>
          <div class="mt-2.5">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Введите ваш email. Пр. example@example.com"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-darkblue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-medium leading-6 text-white"
          >Номер телефона</label>
          <div class="relative mt-2.5">
            <input
              v-model="phone"
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              placeholder="Введите ваш номер телефона. Пр. +77XXXXXYYZZ"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-darkblue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-medium leading-6 text-white"
          >Ваш запрос</label>
          <div class="mt-2.5">
            <textarea
              v-model="message"
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          @click="sendToSheets"
          class="gap-2 items-center font-semibold leading-6 w-full text-sm flex justify-center rounded-md border border-transparent bg-crush-pink px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >Связаться
          <PhoneXMarkIcon class="h-4 w-4" />
        </button>
      </div>
    </form>
  </div>

</template>

<script
  setup
  lang="ts"
>
import { PhoneXMarkIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')

const clear = () => {
  name.value = ''
  phone.value = ''
  email.value = ''
  message.value = ''
}

const sendToSheets = async (e: any) => {
  e.preventDefault()
  if (!name.value || !message.value || !phone.value || !email.value) {
    alert('Поля не должны быть пустыми.')
    return
  }

  if (!isPhone(phone.value)) {
    alert('Введите номер телефона по примеру. Пример: +77123456789')
    return
  }

  if (!isEmail(email.value)) {
    alert('Введите почту корректно!')
    return
  }

  try {
    const { data } = await axios.postForm('https://script.google.com/macros/s/AKfycbyhIi5Or0jKmsWWV7dCTHOa12-kMHnS5jvZiwRTTgHKLIHlwQTux47Zh360HirC1-i44Q/exec', {
      fullName: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value
    })

    // on success
    alert(data)
    clear()
  } catch (error: any) {
    alert(error || error.message || 'Произошла ошибка')
  }

}


</script>

<style scoped></style>