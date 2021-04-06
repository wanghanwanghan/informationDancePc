<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <h3>{{ detail.Title }}</h3>
        </el-col>
      </el-row>
      <span class="cont" v-html="detail.Context" />
    </div>
  </div>
</template>
<script>
import { getJudicialSaleListDetail } from '@/api/JudicialDecisions'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: '',
        pay: 0
      },
      detail: ''
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.query.entName = localStorage.getItem('entName')
    this.query.id = this.$route.params.id
    this.query.phone = localStorage.getItem('phone')
    getJudicialSaleListDetail(this.query).then(res => {
    //   console.log(res)
      if (res.data.code === 210) {
        this.$confirm(res.data.msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.query.pay = 1
          getJudicialSaleListDetail(this.query).then(res => {
            // console.log(res)
            if (res.data.code === 220) {
              this.$confirm('余额不足，是否前往充值？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                // this.$message({
                //   type: 'success',
                //   message: '删除成功!'
                // })
                this.$router.push('/login')
                localStorage.setItem('activeName', 'third')
              }).catch(() => {
                // this.$message({
                //   type: 'info',
                //   message: '已取消删除'
                // })
                this.$router.go(-1)
              })
            } else {
              this.detail = res.data.result
            }
          })
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
          this.$router.go(-1)
        })
      } else {
        this.detail = res.data.result
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.cont{
    margin:30px 10px
}
</style>

