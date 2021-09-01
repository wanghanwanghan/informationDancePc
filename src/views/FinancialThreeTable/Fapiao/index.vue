<template>
  <div class="body-wrapper">
    <div class="body">
      <el-form ref="form" :model="form" label-position="top" label-width="180px">
        <el-form-item label="企业名称">
          <el-input v-model="form.entname"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="法人姓名">
          <el-input v-model="form.fr"></el-input>
        </el-form-item>
        <el-form-item label="法人身份证号码">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="法人手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即授权</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      form: {
        entname: '',
        code: '',
        fr: '',
        id: '',
        phone: ''
      }
    }
  },
  computed: {},
  mounted() {
    this.$confirm('以下授权操作为需调取企业发票信息用于企业深度评估使用场景的模拟演示，具体内容将生成至企业评估报告或集成的客户评估系统，且原则上仅用于终端客户为持牌金融机构的应用场景', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  },
  methods: {
    onSubmit() {
      this.$confirm('您的授权已完成，请于20个工作日后登录贵方与每日信动合作集成的评估系统查看结果', '', {
        confirmButtonText: '确定',
        type: 'success'
      })
    },
    onCancel() {
      this.form.entname = ''
      this.form.code = ''
      this.form.fr = ''
      this.form.id = ''
      this.form.phone = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.body-wrapper {
  width: 100%;

  .body {
    margin: 150px auto 0 auto;
    width: 500px;
  }
}
</style>
