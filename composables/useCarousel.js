export function useCarousel(imageArray, autoPlayInterval = 1000) {
  const currentIndex = ref(0);
  const images = ref(imageArray);
  const isAutoPlaying = ref(false);
  const isHovering = ref(false);
  let autoPlayTimer = null;

  const totalImages = computed(() => images.value.length);
  const currentImage = computed(() => images.value[currentIndex.value]);

  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % totalImages.value;
  };

  const prevImage = () => {
    currentIndex.value =
      (currentIndex.value - 1 + totalImages.value) % totalImages.value;
  };

  const startAutoPlay = () => {
    if (!isAutoPlaying.value) {
      isAutoPlaying.value = true;
      autoPlayTimer = setInterval(nextImage, autoPlayInterval);
    }
  };

  const stopAutoPlay = () => {
    if (isAutoPlaying.value) {
      isAutoPlaying.value = false;
      clearInterval(autoPlayTimer);
    }
  };

  const toggleAutoPlay = () => {
    isAutoPlaying.value ? stopAutoPlay() : startAutoPlay();
  };

  const handleMouseEnter = () => {
    isHovering.value = true;
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    isHovering.value = false;
    startAutoPlay();
  };

  onMounted(() => {
    startAutoPlay();
  });

  onUnmounted(() => {
    stopAutoPlay();
  });

  return {
    currentImage,
    nextImage,
    prevImage,
    currentIndex,
    totalImages,
    isAutoPlaying,
    stopAutoPlay,
    toggleAutoPlay,
    handleMouseEnter,
    handleMouseLeave,
  };
}
