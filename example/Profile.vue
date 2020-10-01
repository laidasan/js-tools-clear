<template>
  <p>{{ myValue }}</p>
</template>

<script>
import ProfileBase from './ProfileBase.vue'
// import ProfileBaseEach from './ProfileBaseEach.vue'
export default {
  extends: ProfileBase,
  //   mixins: [ProfileBaseEach],
  beforeCreate() {
    // console.log(this.$options)
  },
  mounted() {
    console.log('Profile')
    // console.log(this.$options)
    // console.log(this.desc)
    // console.log(this.myDesc)
  },
  data() {
    return {
      myValue: 'this is myValue mySlef'
    }
  },
}

// extend 只能有一個 
// mixin 可以有很多個
// minin 自己的鉤子與執行是最後一個 , 其餘則為陣列中的順序 , 所子有重複的 data etc .. 自己的會覆蓋過去
// extend 也是 , 自己的會最後才執行
</script>

