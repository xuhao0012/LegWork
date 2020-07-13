<!--  -->
<template>
<div class='addrelease'>
  <header id="addrl">
    <div id="back"><i class="iconfont iconfanhui" @click="back()"></i></div>
  </header>
  <cube-form
  :model="model"
  :options="options"
  @validate="validateHandler"
  @submit="submitHandler">
    <cube-form-group>
      <cube-form-item :field="fields[0]"></cube-form-item>
      <cube-form-item :field="fields[1]"></cube-form-item>
      <cube-form-item :field="fields[2]"></cube-form-item>
      <cube-button @click="showDatePicker()" :inline="true">选择</cube-button>
      <cube-form-item :field="fields[3]"></cube-form-item>
      <cube-form-item :field="fields[4]"></cube-form-item>
      <cube-form-item :field="fields[5]"></cube-form-item>
      <cube-form-item :field="fields[6]"></cube-form-item>
      <cube-form-item :field="fields[7]"></cube-form-item>
    </cube-form-group>
  </cube-form>
</div>
</template>

<script>
export default {
  data() {
    // const that = this;
    return {
      thistime: new Date().toLocaleDateString(),
      thisyear: null,
      thismonth: null,
      thisday: null,
      validity: {},
      valid: undefined,
      model: {
        title: '',
        radioValue: '',
        dateValue: '',
        textareaValue: '',
        uploadValue: [],
        money: 0,
      },
            fields: [
              {
                type: 'input',
                modelKey: 'title',
                label: '标题',
                props: {
                  placeholder: '请输入',
                  clearable: true
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'radio-group',
                modelKey: 'radioValue',
                label: '类别',
                props: {
                  options: ['校园代取', '校园代购', '小单兼职','校外跑腿','寻物启事','失物招领']
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'input',
                modelKey: 'dateValue',
                label: '截止日期',
                props:{
                  readonly: true
                },
                events:{
                  focus:()=>{
                    this.showDatePicker()
                  }
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'textarea',
                modelKey: 'textareaValue',
                label: '描述',
                rules: {
                  required: true
                },
                props:{
                  placeholder: '请输入',
                  remain: true,
                },
                // debounce validate
                // if set to true, the default debounce time will be 200(ms)
                debounce: 100
              },
              {
                type: 'input',
                modelKey: 'money',
                label: '酬金',
                rules: {
                  required: true,
                  type: 'number',
                  min: 0,
                  max: 1000
                }
              },
              {
                type: 'upload',
                modelKey: 'uploadValue',
                label: '上传图片',
                events: {
                  'file-removed': (...args) => {
                    console.log('file removed', args)
                  }
                },
                rules: {
                  required: false,
                  uploaded: (val) => {
                    return Promise.all(val.map((file, i) => {
                      return new Promise((resolve, reject) => {
                        if (file.uploadedUrl) {
                          return resolve()
                        }
                        // fake request
                        setTimeout(() => {
                          if (i % 2) {
                            reject(new Error())
                          } else {
                            file.uploadedUrl = 'uploaded/url'
                            resolve()
                          }
                        }, 1000)
                      })
                    })).then(() => {
                      return true
                    })
                  }
                },
                messages: {
                  uploaded: '上传失败'
                }
              },
              {
                type: 'submit',
                label: '提交'
              },
              {
                type: 'reset',
                label: '重置'
              }
            ],
      options: {
        scrollToInvalidField: true,
        layout: 'classic' // classic fresh
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      console.log(2323)
      //console.log('submit', e)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      //console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    // resetHandler() {
    //   console.log('reset', e)
    // },
    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: '日期选择',
          min: new Date(this.thisyear,this.thismonth-1,this.thisday),
          max: new Date(2050, 12, 31),
          value: new Date(this.thisyear,this.thismonth-1,this.thisday),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker.show()
    },
    selectHandle(date, selectedVal) {
      this.$createDialog({
        type: 'warn',
        content: `<h2>选择完成<h2> <br/> - 日期: ${date} <br/> `,
        icon: 'cubeic-alert'
      }).show()
      this.model.dateValue=selectedVal.join('-')
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: '已取消',
        time: 1000
      }).show()
    },
    ymd(s){
      var arr = s.split('/')
      this.thisyear = arr[0]
      this.thismonth = arr[1]
      this.thisday = arr[2]
    },
    back(){
      this.$router.go(-1)
    }
  },
  mounted(){
    this.ymd(this.thistime)
    this.model.dateValue=this.thisyear+'-'+this.thismonth+'-'+this.thisday
  }
}
</script>
<style>
  .cube-radio-group{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  .cube-picker-confirm{
    color: #3eb8b4;
  }
  .cube-picker-confirm:active{
    color: #3ec8c4;
  }
  #addrelease h2{
    text-align: center;
  }
  #addrl{
    background-color: #3eb8b4;
    height: 45px;
    text-align: left;
  }
  #back{
    margin-left: 12px;
    padding-top: 10px;
  }
  #back i{
    font-size: 1.4rem;
    color: white;
  }
</style>