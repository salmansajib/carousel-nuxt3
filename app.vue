<script setup>
import { useCarousel } from "./composables/useCarousel";
import { ChevronsRight, ChevronsLeft } from "lucide-vue-next";

const images = [
  "/images/geranimo-qzgN45hseN0-unsplash.jpg",
  "/images/johannes-plenio-hvrpOmuMrAI-unsplash.jpg",
  "/images/luca-bravo-ESkw2ayO2As-unsplash.jpg",
  "/images/lukasz-szmigiel-2ShvY8Lf6l0-unsplash.jpg",
  "/images/marita-kavelashvili-ugnrXk1129g-unsplash.jpg",
];

const {
  currentImage,
  nextImage,
  prevImage,
  currentIndex,
  totalImages,
  handleMouseEnter,
  handleMouseLeave,
} = useCarousel(images, 4000);

const goToImage = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="bg-slate-900 min-h-screen flex items-center justify-center py-5">
    <div
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      class="relative w-full max-w-[95%] md:max-w-[800px] h-[500px] mx-auto rounded-lg overflow-hidden outline outline-[3px] outline-green-200"
    >
      <img
        class="w-full h-full object-cover"
        :src="currentImage"
        :key="currentImage"
        alt="carousel image"
      />

      <button
        class="absolute bg-gray-50/20 hover:bg-gray-50 rounded-full p-2 top-1/2 -translate-y-1/2 left-5 transition-colors group"
        @click="prevImage"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <ChevronsLeft class="text-slate-50 group-hover:text-slate-950" />
      </button>
      <button
        class="absolute bg-gray-50/20 hover:bg-gray-50 rounded-full p-2 top-1/2 -translate-y-1/2 right-5 transition-colors group"
        @click="nextImage"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <ChevronsRight class="text-slate-50 group-hover:text-slate-950" />
      </button>
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2">
        <button
          v-for="(dot, index) in totalImages"
          @click="goToImage(index)"
          :key="index"
          class="inline-block size-[10px] mx-1 rounded-full hover:bg-slate-50/70"
          :class="index === currentIndex ? 'bg-slate-50' : 'bg-slate-50/50'"
        ></button>
      </div>
    </div>
  </div>
</template>
