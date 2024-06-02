<script setup>
import 'vueperslides/dist/vueperslides.css'
import {VueperSlide, VueperSlides} from "vueperslides";
import spyCarousel1Image from "/public/images/spy_carousel 1.png"

const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.',
    image: spyCarousel1Image,
    duration: "3000"
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.',
    image: spyCarousel1Image,
    duration: "3000"
  },
  {
    title: 'Slide #3',
    content: 'Slide 3 content.',
    image: spyCarousel1Image,
    duration: "3000"
  }
]
</script>

<template>
  <vueper-slides autoplay>
    <vueper-slide
        v-for="(slide, i) in slides"
        :image="slide.image"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :duration="slide.duration">
    </vueper-slide>
  </vueper-slides>
</template>

<style scoped>

</style>
