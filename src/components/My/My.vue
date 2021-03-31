<template>
  <div>
    <div class="cont">
      <div>
        <span>账号：</span> <span>{{ phone }}</span>
      </div>
      <div class="contt">
        <div class="list" style="display: flex;justify-content:space-between;">
          <span>余额</span><span style="color:red;margin-right:30px">￥{{ result.money }}</span>
        </div>
        <router-link to="/Rechargerecord">
          <div class="list">
            <span>充值记录</span>
          </div>
        </router-link>
        <router-link to="/Consumptionrecord">
          <div class="list">
            <span>消费记录</span>
          </div>
        </router-link>
        <router-link to="/Reviewprogress">
          <div class="list">
            <span>审核进度</span>
          </div>
        </router-link>
        <div class="list" style="display: flex;justify-content:space-between;">
          <span>客服</span><span style="color:#409EFF;margin-right:30px">400 068 7266</span>
        </div>
        <el-button type="primary" style="width:100%" @click="out">退出登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { list } from '@/api/article'
export default {
  name: 'My',
  data() {
    return {
      query: {
        phone: ''
      },
      phone: '',
      result: ''
    }
  },
  created() {
    this.query.phone = this.phone = localStorage.getItem('phone')
    list(this.query).then(res => {
    //   console.log(res)
      this.result = res.data.result.userInfo
    })
  },
  methods: {
    out() {
      this.$confirm('是否退出登陆状态?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        localStorage.clear()
        this.$router.go(0)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cont{
  width:60%;
  margin:30px auto;
  .contt{
      margin-left:30px;
      .list{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 20px 0;
        padding-left:30px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
      }
      .list:hover{
        cursor:pointer
      }
  }
}
</style>
