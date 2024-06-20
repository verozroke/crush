<template>
  <div
    id="Info"
    class="py-10 relative isolate"
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl subtitle hidden1">{{ $t('info.title') }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-16 title hidden1">
            <dt class="text-base font-semibold leading-7 text-crush-pink">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkblue">
                <img
                  class="h-6 w-6 text-white"
                  src="~/assets/images/icons/global.png"
                  alt=""
                >
              </div>
              {{ $t('info.points.1.title') }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ $t('info.points.1.description') }}
            </dd>
          </div>
          <div class="relative pl-16 title hidden1">
            <dt class="text-base font-semibold leading-7 text-crush-pink">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkblue">
                <img
                  class="h-6 w-6 text-white"
                  src="~/assets/images/icons/latex.png"
                  alt=""
                >
              </div>
              {{ $t('info.points.2.title') }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ $t('info.points.2.description') }}
            </dd>
          </div>
          <div class="relative pl-16 title2 hidden1">
            <dt class="text-base font-semibold leading-7 text-crush-pink">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkblue">
                <img
                  class="h-6 w-6 text-white"
                  src="~/assets/images/icons/gel.png"
                  alt=""
                >
              </div>
              {{ $t('info.points.3.title') }}

            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ $t('info.points.3.description') }}
            </dd>
          </div>
          <div class="relative pl-16 title hidden1">
            <dt class="text-base font-semibold leading-7 text-crush-pink">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkblue">
                <img
                  class="h-6 w-6 text-white"
                  src="~/assets/images/icons/smell.png"
                  alt=""
                >
              </div>
              {{ $t('info.points.4.title') }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ $t('info.points.4.description') }}
            </dd>
          </div>
          <div class="relative pl-16 title2 hidden1">
            <dt class="text-base font-semibold leading-7 text-crush-pink">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkblue">
                <img
                  class="h-6 w-6 text-white"
                  src="~/assets/images/icons/secure.png"
                  alt=""
                >
              </div>
              {{ $t('info.points.5.title') }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ $t('info.points.5.description') }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

</template>

<script
  setup
  lang="ts"
>
import { ShieldCheckIcon, PlusIcon, ScaleIcon, ArrowPathIcon, GlobeAltIcon } from '@heroicons/vue/20/solid'

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
  let hiddenSubtitleImageElements = document.querySelectorAll('.subtitle.hidden1')
  let hiddenElements = [...hiddenTitleElements, ...hiddenTitle2Elements, ...hiddenSubtitleImageElements,]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style scoped>
.subtitle.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(200px);
}

.subtitle.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}


.title.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0px) translateX(-200px);
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
  transform: translateY(0px) translateX(200px);
}

.title2.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>