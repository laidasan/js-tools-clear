<template>
    <input type="text" :value="localValue" @input="$emit('localInput',$event.target.value)">
</template>

<script>
export default {
  model: {
    prop: 'localValue',
    event: 'localInput'
  },
  props: {
    localValue: {
      type: String,
      default: ''
    }
  }
}
</script>