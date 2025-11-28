<template>
  <div class="bg-darkblue overflow-x-hidden">
    <div class="flex flex-col max-w-[1400px] px-5 mx-auto min-h-screen">
      <LocaleFAB />
      <FormFab />
      <HeaderVue />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <FooterVue />
    </div>
  </div>
</template>
