<template>
  <div>
    <!-- Background overlay -->
    <div
      v-if="modelValue"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      @click="closeOnOverlay && close()"
    ></div>

    <!-- Dialog window -->
    <div
      v-if="modelValue"
      class="fixed z-50 inset-0 flex justify-center items-center p-4"
    >
      <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg relative">
        <!-- Close button -->
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          @click="close"
        >
          ✕
        </button>
        <!-- SLOT where your form goes -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  closeOnOverlay?: boolean
}>()

const emit = defineEmits(["update:modelValue"])

const close = () => emit("update:modelValue", false)
</script>
