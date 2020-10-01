<template>
    <div id="app">
        <!-- <model/> -->
        <profile/>
    </div>
</template>

<script>
// import Model from './testComponent/model.vue'
import Profile from './Profile.vue'
// import ProfileBaseEach from './ProfileBaseEach.vue'
import { required } from 'source/validator/validator.js'


export default {
  components: {
    // Model,
    Profile
  },
  data() {
    return {
      auther: 'samura'
    }
  },
  myOptions: 'App Vue',
  validations() {
    return {
      auther: {
        required
      }
    }
  },
  mounted() {
    // console.log(this.$options)
    console.log('_vuelidate',this._vuelidate)
    console.log('_vuelidate.children',this._vuelidate.children)
    // console.log(this.$name)
    // console.log(this.$myEx)
    // console.log(this.name)
    // console.log(this.$options.computed)
    // console.log(this.$options.computed.name())
  },
  computed: {
    name() {
      return 'samura'
    }
  }
}
</script>