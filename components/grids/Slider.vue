<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.post"
    :theme="$siteConfig.posts.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <slider-card
        :title="item.title"
        :link="`/${item.slug}`"
        :image="item.featureImage"
      />
    </template>
  </resource-grid>
</template>

<script>
import SliderCard from '~/components/cards/SliderCard'
export default {
  name: 'Slider',
  components: { SliderCard },
  props: {
    perRow: { type: Number, default: 1 },
    number: { type: Number, default: 1 },
    order: { type: String, default: 'DESC' },
    // category: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // },
    exclude: { type: String, default: '' }
  }
}
</script>
