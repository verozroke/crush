<template>
  <div class="py-10 relative isolate">
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
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Конкурентные преимущества</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div class="relative flex flex-col items-center pb-20">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-crush-pink">
            <GlobeAltIcon class="h-6 w-6 text-white" />
          </div>
          <dt class="text-base font-semibold leading-7 text-center text-white">
            Максимальная безопасность и
            защита
          </dt>
          <dd class="mt-2 text-base leading-7 text-white text-center">
            Надежность и комфорт это про них. Презервативы CRUSH обеспечивают максимальную защиту во время секса
          </dd>
        </div>
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-crush-pink">
                <ArrowPathIcon class="h-6 w-6 text-white" />
              </div>
              Натуральный латекс
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              Сделаны из натурального латекса. Гипоаллергенные, не сдавливают.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-crush-pink">
                <PlusIcon class="h-6 w-6 text-white" />
              </div>
              С гелем-смазкой
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              Во всех презервативах CRUSH есть силиконовый гель-смазка, обеспечивает превосходное скольжение и
              отсутствие дискомфорта.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-crush-pink">
                <ScaleIcon class="h-6 w-6 text-white" />
              </div>
              Без неприятного запаха
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              У других презервативов есть характерный неприятный запах. Он
              появляется из-за жирных кислот в составе растения гевея, из которого изготавливается латекс. Презервативы
              CRUSH - пахнут лучше!
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-crush-pink">
                <ShieldCheckIcon class="h-6 w-6 text-white" />
              </div>
              Максимальная безопасность и
              защита
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              Надежность и комфорт это про них. Презервативы CRUSH обеспечивают максимальную защиту во время секса
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

</script>

<style scoped></style>