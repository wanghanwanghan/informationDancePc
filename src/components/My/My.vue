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
        <router-link to="/SearchHistroy">
          <div class="list">
            <span>筛选条件</span>
          </div>
        </router-link>

        <div class="list" style="display: flex;justify-content:space-between;">
          <span>客服</span><span style="color:#409EFF;margin-right:30px">400 068 7266</span>
        </div>
        <div class="list" @click="modify_user_password">
          <span>修改密码</span>
        </div>
        <el-button type="primary" style="width:100%" @click="out">退出登录</el-button>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="modify_user_password_dialog"
      width="30%">
      <div style="width: 80%;margin-left: 40px;">
        <el-input :style="{margin:'10px'}" v-model="pwd_saki" placeholder="新密码" show-password></el-input>
        <el-input :style="{margin:'10px'}" v-model="pwd_saki_confirm" placeholder="确认新密码" show-password></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modify_user_password_dialog = false">取 消</el-button>
        <el-button type="primary" @click="doModify">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { list } from '@/api/article'
import { setUserPassword } from '@/api/article'

export default {
  name: 'My',
  data() {
    return {
      query: {
        phone: ''
      },
      phone: '',
      result: '',
      modify_user_password_dialog: false,
      pwd_saki: '',
      pwd_saki_confirm: ''
    }
  },
  created() {
    this.query.phone = this.phone = localStorage.getItem('phone')
    list(this.query).then(res => {
      this.result = res.data.result.userInfo
    })
  },
  methods: {
    modify_user_password() {
      this.modify_user_password_dialog = !this.modify_user_password_dialog
    },
    doModify() {
      if (this.pwd_saki.length > 0 && this.pwd_saki_confirm.length > 0) {
        setUserPassword({
          phone: localStorage.getItem('phone'),
          pwd_saki: this.pwd_saki,
          pwd_saki_confirm: this.pwd_saki_confirm
        }).then(res => {
          if (res.data.code === 200) {
            this.modify_user_password_dialog = false
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
          } else {
            console.log(res.data)
          }
        })
      } else {
        alert('密码格式错误')
      }
    },
    out() {
      this.$confirm('是否退出登录状态?', '提示', {
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
    },
    number_format(number, decimals, dec_point, thousands_sep) {
      /*
          * 参数说明：
      　　 * number：要格式化的数字
      　　 * decimals：保留几位小数
      　　 * dec_point：小数点符号
      　　 * thousands_sep：千分位符号
       */
      number = (number + '').replace(/[^0-9+-Ee.]/g, '')
      let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
          let k = Math.pow(10, prec)
          return '' + Math.ceil(n * k) / k
        }

      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
      let re = /(-?\d+)(\d{3})/
      while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2')
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
      }
      return s.join(dec)
    }
  }
}
</script>
<style lang="scss" scoped>
.cont {
  width: 60%;
  margin: 30px auto;

  .contt {
    margin-left: 30px;

    .list {
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin: 20px 0;
      padding-left: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .list:hover {
      cursor: pointer
    }
  }
}
</style>
