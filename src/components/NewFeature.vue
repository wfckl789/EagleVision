<template>
  <div>
    <button type="button" @click="addTagIntoMap">addTagIntoMap</button>
    <button type="button" @click="addGmIntoSet">addGmIntoSet</button>
    <p v-for="(item, index) in all_tag_map"
        :key="item"
    >index: {{ index }} set: {{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "NewFeature",
  props: {
    new_msg: String
  },
  data () {
    return {
      all_tag_map: new Map(),
      tag_set_1: new Set(),
      tag_list: ['world', 'team'],
    }
  },
  methods: {
    addTagIntoMap () {
      let temp = new Set()
      temp.add('world_gm')
      this.all_tag_map.set(this.tag_list[0], temp)
    },
    addGmIntoSet () {
      this.tag_set_1.add('gm1').add('gm2')
      // this.all_tag_map.set(this.tag_list[0], this.tag_set_1)
    },
  },
}
</script>

<style scoped>

</style>