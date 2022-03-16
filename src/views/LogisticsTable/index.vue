<template>
  <div class="body-wrapper">
    <div class="body">
      <el-form ref="form" :model="form" label-position="top" label-width="180px">
        <el-form-item label="企业名称">
          <el-input v-model="form.entname" />
        </el-form-item>
        <el-form-item label="统一社会信用代码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="法人姓名">
          <el-input v-model="form.fr" />
        </el-form-item>
        <el-form-item label="法人身份证号码">
          <el-input v-model="form.id" />
        </el-form-item>
        <el-form-item label="法人手机号">
          <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="企业主体授权书（点击下载）"><span @click.stop.prevent="file1">公司主体授权书（点击下载）</span></el-checkbox>
          </el-checkbox-group>
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
      checkList: [],
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
    this.form.entname = localStorage.getItem('entName')
    this.form.code = localStorage.getItem('CreditCode')
    this.form.fr = '黄郑明'
    this.form.id = '132016196703052389'
    this.form.phone = '13900213870'
    this.$confirm('以下操作为评估该企业物流特征的相关授权，具体内容将生成至企业评估报告或集成的评估系统', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  },
  methods: {
    file1() {
      window.location.href = 'https://api.meirixindong.com/Static/公司主体授权书.docx'
    },
    onSubmit() {
      if (this.checkList.length !== 1) {
        this.$confirm('请先同意授权文件', '', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      } else {
        this.$confirm('您申请进行评估的物流企业相关内容正在生成中，请稍后查看评估结果', '', {
          confirmButtonText: '确定',
          type: 'success'
        }).then(() => {
          window.location.href = 'https://api.meirixindong.com/LogisticsTable/Result'
        })
      }
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
