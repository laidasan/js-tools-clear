<template>
  <div>
      <h1>test model model</h1>
      <label style="display:block;">
          input down input type
         <input type="text" name="typePrors" v-model="inputType">
      </label>
      <cust-input
        :type="inputType"
        class="class"
        v-model="inputContent"
      ></cust-input>
      <test
        v-model="inputContent"
      />
      <div>
        <input type="text" :value="$v.name.$model" @input="onNameInput" style="border-color: #f00;">
      </div>
      <div>
        <input type="text" :value="$v.nameAnoter.$model" @input="onNameInputAnoter">
      </div>
      <div>
        <!-- <input type="text" :value="nameBind" @input="onNameBind"> -->
        <input type="text" v-model="nameBind" @input="onNameBind">
      </div>
      <!-- <div>
        <input type="text" v-model.trim="$v.another.$model">
      </div> -->
      <h6 v-if="$v.name.$error">error</h6>
      <h6 v-if="$v.nameAnoter.$error">error</h6>
      <h6 v-if="$v.nameBind.$error">error</h6>
      <textarea 
        @input="checkTextArea"
      />
      <h6 v-if="!isTextAreaPass">is above maxCount</h6>
  </div>
</template>

<script>
import custInput from 'testComponent/input/input.vue'
import test from './test.vue'
import { required, minLength } from 'vuelidate/lib/validators'
import {
  required as myRequired , 
  spaceCharacter , 
  wordsLimit ,
  createValidator
} from 'source/validator/validator.js'
// console.log(required)
// console.log(minLength)
// console.log(minLength(4))

// const mustString  = must => value => must === value
// const mustSamura = mustString('Samura')

const validationsConfigList = [
  {rule: 'required',validate: myRequired , message:'required' },
  {rule: 'spaceCharacter' , validate: spaceCharacter , message: 'spaceCharacter'},
  {rule: 'wordsLimit' , validate: wordsLimit(60),message:'wordsLimit'}
]

const nameValidations = createValidator(validationsConfigList)


export default {
  name: 'testModelComponent',
  components: {
    custInput,
    test
  },
  data: function() {
    return {
      inputType: 'text',
      inputContent: '',
      name: '',
      nameAnoter:'',
      nameBind: '',
      isTextAreaPass: true
    }
  },
  validations: {
    name: {
      ...nameValidations.validate
    },
    nameAnoter: {
      required,
      minLength: minLength(4)
    },
    nameBind: {
      required,
      minLength: minLength(4)
    },
  },
  methods: {
    clickHandler() {
      console.log('click')
    },
    test(val) {
      console.log('test',val)
      this.inputContent = val
    //   this.inputContent = e.target.value
    },
    test2(e) {
      console.log('test2',e)
    },
    onNameInput(event) {
      const { name: $vNmae } = this.$v
      $vNmae.$model = event.target.value
      // console.log(this.name)
      // console.log($vNmae)
      console.log($vNmae)
      console.warn('error',$vNmae.$error)
      console.warn('minLength',$vNmae.minLength)
      console.warn('required',$vNmae.required)
      console.warn('invalid',$vNmae.$invalid)
      console.warn('dirty',$vNmae.$dirty)
      console.log('\n')
    },
    onNameInputAnoter(event) {
      const { nameAnoter: $nameAnoter } = this.$v
      this.$v.nameAnoter.$touch()
      $nameAnoter.$model = event.target.value
      // console.log(this.name)
      // console.log($nameAnoter)
      console.warn('errorAnother',$nameAnoter.$error)
      console.warn('minLengthAnother',$nameAnoter.minLength)
      console.warn('requiredAnother',$nameAnoter.required)
      console.warn('invalidAnother',$nameAnoter.$invalid)
      console.warn('dirtyAnother',$nameAnoter.$dirty)
      console.log('\n')
    },
    onNameBind(event) {
      const { nameBind: $nameBind } = this.$v
      this.nameBind = event.target.value

      // 如果是像這種 , 綁定的資料不是 $v.[propsName].$model 的話 ,
      // 就需要 touch() 去做驅動 , 否則沒有效果 ,
      // 除了 touch 也可以直接把值設在 model 上,
      // 都是讓 $dirty 去做更新 , 我猜是 $dirty 更新之後 , 會去跑測驗 function => 產出結果（$error,$invalid etc..)
      // $nameBind.$model = event.target.value
      this.$v.nameBind.$touch()

      // 報錯 , $dirty 有被封裝 , 只有 getter有開放出來
      // $nameBind.$dirty = true

      console.warn('errornameBind',$nameBind.$error)
      console.warn('minLengthnameBind',$nameBind.minLength)
      console.warn('requirednameBind',$nameBind.required)
      console.warn('invalidnameBind',$nameBind.$invalid)
      console.warn('dirtynameBind',$nameBind.$dirty)
      console.warn('paramsnameBind',$nameBind.$params.minLength.min)
      console.log('\n')
    },
    checkTextArea(event) {
      const { target: { value: words } } = event
      this.isTextAreaPass = wordsLimit(45)(words)
    }
  },
  
}


// :value="name" -> :value="$v.name.$model"
// validate => this.name

// const val = event.target.value
// this.name = this.$v.name.$model = val
// checkProcess(this.name)
// // this.name = val
// this.

</script>