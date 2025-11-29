<template>
  <div>
    <HeroSection />
    <AboutUsSection />
    <InfoSection />
    <!-- <div class="image hidden1 new-text  mt-20 flex justify-center items-center">
      <span
        class="border-2 border-white text-5xl rounded-full text-white px-6 py-2 font-bold"
        style="background-color: #FF00FF;"
      >НОВИНКА!</span>
    </div> -->
    <NewProductSection />
    <ProductSection />
    <SocialSection />
    <FormSection />
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
  let hiddenImageElements = document.querySelectorAll('.image.hidden1')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenImageElements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>


<style scoped>
.image.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(0px) translateY(200px);
}

.image.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>