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
  },
  methods: {
    onSubmit() {
      this.$confirm('授权成功', '', {
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
