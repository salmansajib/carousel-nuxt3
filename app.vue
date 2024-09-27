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

const { currentImage, nextImage, prevImage, currentIndex, totalImages } =
  useCarousel(images);
</script>

<template>
  <div
    class="bg-slate-950 text-gray-50 min-h-screen flex items-center justify-center py-5"
  >
    <div
      class="relative w-full max-w-[95%] md:max-w-[800px] h-[500px] mx-auto rounded-lg overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        :src="currentImage"
        alt="carousel image"
      />
      <button
        class="absolute bg-gray-50/20 hover:bg-gray-50/50 rounded-full p-2 top-1/2 -translate-y-1/2 left-5 transition-colors group"
        @click="prevImage"
      >
        <ChevronsLeft class="text-slate-50 group-hover:text-slate-950" />
      </button>
      <button
        class="absolute bg-gray-50/20 rounded-full p-2 top-1/2 -translate-y-1/2 right-5 transition-colors group"
        @click="nextImage"
      >
        <ChevronsRight class="text-slate-50 group-hover:text-slate-950" />
      </button>
    </div>
  </div>
</template>
