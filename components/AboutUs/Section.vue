<template>
  <div
    id="AboutUs"
    class="relative isolate  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
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
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1
              class="title hidden1 mt-2 text-3xl font-bold tracking-tight flex flex-wrap items-center gap-2 text-white sm:text-5xl"
            >
              <span>{{ $t('about_us.title') }}</span> <a href="#">
                <span class="sr-only">Crush</span>
                <img
                  class="h-11  object-cover"
                  src="~/assets/images/logo.png"
                  alt=""
                />
              </a>
              <span>?</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 p-12 hidden lg:block lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <img
          class=" w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl object-cover ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="~/assets/images/about-us.jpg"
          alt=""
        >
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base lg:text-lg leading-7 text-white lg:max-w-lg">
            <p class="leading-8 title hidden1 text-white">
              {{ $t('about_us.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
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
  let hiddenImageElements = document.querySelectorAll('.image.hidden1')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTitleElements, ...hiddenImageElements]
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
  transform: translateY(0px) translateX(-200px);
}

.title.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>