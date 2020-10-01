<template>
    <p>{{ name }}</p>
</template>
<script>
import { PBase }  from './PBase.js'

export const PEach = PBase.extend({
  data() {
    return {
      PEach: 'P Each'
    }
  },
  mounted() {
    console.log(this.$options)
  }
})
</script>