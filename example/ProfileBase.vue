<template>
    <p>{{ desc }}</p>
</template>


<script>
export default {
  mounted() {
    console.log('ProfileBase')
  },
  data() {
    return {
      desc: 'this is test information in ProfileBase',
      myValue: 'this is myValue in Base'
    }
  }
}
</script>
