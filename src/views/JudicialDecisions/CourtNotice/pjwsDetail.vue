<template>
  <div class="box">
    <div v-if="detail.length === 0" class="box2">
      暂无相关信息
    </div>
    <div v-if="detail.length !== 0" class="box2">
      <h3>{{ detail[0].title }}</h3>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>案号：</span><span>{{ detail[0].caseNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>承办单位：</span><span>{{ detail[0].court }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span>审判：</span><span>{{ detail[0].judge }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span>审判依据：</span><span>{{ detail[0].yiju }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span>审判结果：</span><span>{{ detail[0].judgeResult }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>案由：</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>人员：</span>
        </el-col>
      </el-row>
      <div v-for="(item,index) in detail[0].partys" :key="index">
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>{{ item.caseCauseT }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span> {{ item.partyTitleT }} : {{ item.pname }} </span>
          </el-col>
        </el-row>
      </div>
      <!-- <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span v-html="detail[0].body" />
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>
<script>
import { getCpwsDetail } from '@/api/JudicialDecisions'
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
      detail: []
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.query.entName = localStorage.getItem('entName')
    this.query.id = this.$route.params.id
    this.query.phone = localStorage.getItem('phone')
    getCpwsDetail(this.query).then(res => {
      // console.log(res)
      if (res.data.code === 210) {
        this.$confirm(res.data.msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.query.pay = 1
          getCpwsDetail(this.query).then(res => {
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
                this.$router.push('./login')
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

