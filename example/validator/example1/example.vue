<template>
  <div>
    <ul>
      <li>必填</li>
      <li>不能是空白字元</li>
      <li>字數 12 以內 (換行算兩個字）</li>
    </ul>
      <div>
        <input 
          type="text" 
          :value="$v.name.$model" 
          @input="onNameInput"
          :class="{'input--error': $v.name.$error}"
          >
      </div>
      <h6 v-if="$v.name.$error" class="error">error</h6>
  </div>
</template>

<script>
import {
  required, 
  spaceCharacter , 
  wordsLimit ,
  createValidator
} from 'source/validator/validator.js'

const validationsConfigList = [
  {rule: 'required',validate: required , message:'required' },
  {rule: 'spaceCharacter' , validate: spaceCharacter , message: 'spaceCharacter'},
  {rule: 'wordsLimit' , validate: wordsLimit(12),message:'wordsLimit'}
]

const nameValidations = createValidator(validationsConfigList)


export default {
  name: 'exampleOne',
  data: function() {
    return {
      name: '',
    }
  },
  mounted() {
    // console.warn(this.$v.name.$dirty)
    console.log('_vuelidate',this._vuelidate)
  },
  validations: {
    name: {
      ...nameValidations.validate
    },
  },
  methods: {
    onNameInput(event) {
      const { name: $vNmae } = this.$v
      $vNmae.$model = event.target.value
      console.log(this.$v)
      console.log($vNmae)
      console.warn('error',$vNmae.$error)
      console.warn('required',$vNmae.required)
      console.warn('invalid',$vNmae.$invalid)
      console.warn('dirty',$vNmae.$dirty)
      console.log('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    padding-left: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-color: #0aa;
    &:focus {
      outline: none;
    }
  }
  .error {
    font-size: 24px;
    letter-spacing: 1px;
    color: #f11111;
    margin-top: 0;
    margin-bottom: 0;
    
  }
  .input--error {
    border-color: #f11111;
  }
</style>