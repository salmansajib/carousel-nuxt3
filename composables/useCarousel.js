import { ref, computed } from "vue";

export function useCarousel(imageArray) {
  const currentIndex = ref(0);
  const images = ref(imageArray);

  const totalImages = computed(() => images.value.length);
  const currentImage = computed(() => images.value[currentIndex.value]);

  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % totalImages.value;
  };

  const prevImage = () => {
    currentIndex.value =
      (currentIndex.value - 1 + totalImages.value) % totalImages.value;
  };

  return {
    currentImage,
    nextImage,
    prevImage,
    currentIndex,
    totalImages,
  };
}
