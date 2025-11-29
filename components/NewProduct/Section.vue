<template>
  <div
    id="NewProduct"
    class="relative isolate  px-6 pb-24 pt-0 lg:overflow-visible lg:px-0"
  >
    <div
      class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div
      class="absolute rotate-[90deg] left-1/2 bottom-0 -z-10 -translate-x-1/2 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div class="mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
      <div class="w-full flex flex-col ">
        <h1
          class="title2 hidden2 mt-2 text-3xl font-bold tracking-tight flex lg:flex-row flex-col justify-center lg:justify-start lg:flex-wrap items-center gap-2 text-white sm:text-5xl"
        >
          <a href="#">
            <span class="sr-only">Crush</span>
            <img
              class="h-11  object-cover"
              src="~/assets/images/logo.png"
              alt=""
            />
          </a>
          <span>{{ $t('new.cool.title') }}</span>
        </h1>
        <h2 class="title2 hidden2 mt-2 text-xl font-bold tracking-tight text-sky-400 sm:text-3xl">

        </h2>
        <div class="mt-6 flex justify-center lg:block ">
          <div class="max-w-xl text-lg leading-7 text-white">
            <p class="title2 hidden2 leading-8   text-white">
              {{ $t('new.cool.about1') }} <br>
              {{ $t('new.cool.about2') }}
            </p>
          </div>
        </div>
        <h2 class="title2 hidden2 mt-10 text-lg font-bold tracking-tight text-white">
          <ul
            type="disc"
            class="list-disc list-inside"
          >
            <li>{{ $t('new.cool.l1') }}</li>
            <li>{{ $t('new.cool.l2') }}</li>
            <li>{{ $t('new.cool.l3') }}</li>
            <li>{{ $t('new.cool.l4') }}</li>
            <li>{{ $t('new.cool.l5') }}</li>
          </ul>
        </h2>
      </div>
      <div class="image2 hidden1 relative flex-row h-fit items-end">
        <img
          class="w-[400px] max-w-[400px] object-cover"
          src="~/assets/images/new/cool.png"
          alt=""
        >
      </div>
    </div>
    <div class="mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between">
      <div class="image hidden1 hidden lg:flex w-full h-fit items-end">
        <img
          class="w-[400px] max-w-[400px] object-cover"
          src="~/assets/images/new/aloe.png"
          alt=""
        >
      </div>
      <div class="w-full text-center lg:text-right flex flex-col ">
        <h1
          class="title2 hidden2 mt-2 text-3xl font-bold tracking-tight flex lg:flex-row flex-col justify-center lg:justify-end lg:flex-wrap items-center gap-2 text-white sm:text-5xl"
        >
          <a href="#">
            <span class="sr-only">Crush</span>
            <img
              class="h-11  object-cover"
              src="~/assets/images/logo.png"
              alt=""
            />
          </a>
          <span>Алоэ Вера</span>
        </h1>
        <!-- <h2 class="title hidden1 mt-2 text-xl font-bold tracking-tight text-lime-400 sm:text-3xl">
          Натуральная нежность и Забота
        </h2> -->
        <div class="title hidden1 mt-6">
          <div class="text-lg leading-7 text-white">
            <p class="leading-8  text-white">
              {{ $t('new.aloe.about1') }} <br>
              {{ $t('new.aloe.about2') }}
            </p>
          </div>
        </div>
        <h2 class="mt-10 text-lg font-bold tracking-tight text-white ">
          <ul
            id="strange-ul"
            type="disc"
            class="title hidden1 list-disc list-inside"
          >
            <li>{{ $t('new.aloe.l1') }}</li>
            <li>{{ $t('new.aloe.l2') }}</li>
            <li>{{ $t('new.aloe.l3') }}</li>
            <li>{{ $t('new.aloe.l4') }}</li>
            <li>{{ $t('new.aloe.l5') }}</li>
          </ul>
        </h2>
      </div>
      <div class="image hidden1 flex lg:hidden lg:justify-normal justify-center w-full h-fit items-end">
        <img
          class="w-[400px] max-w-[400px] object-cover"
          src="~/assets/images/new/aloe.png"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  // let hiddenSubtitleElements = document.querySelectorAll('.hero__subtitle.hidden')
  let hiddenTitleElements = document.querySelectorAll('.title.hidden1')
  let hiddenTitle2Elements = document.querySelectorAll('.title2.hidden2')
  let hiddenImageElements = document.querySelectorAll('.image.hidden1')
  let hiddenImage2Elements = document.querySelectorAll('.image2.hidden1')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTitleElements, ...hiddenImageElements, ...hiddenTitle2Elements, ...hiddenImage2Elements]
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
  transform: translateY(0px) translateX(200px);
}

.title2.hidden2 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0px) translateX(-200px);
}

.image.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0px) translateX(-200px);
}



.image2.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0px) translateX(200px);
}


.title.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}

.title2.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}

.image.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}

.image2.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}


#strange-ul {
  direction: ltr;
}

/* На больших экранах включить RTL */
@media (min-width: 1024px) {
  #strange-ul {
    direction: rtl;
  }
}
</style>