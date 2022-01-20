<template>
  <div>
    <div v-if="showNav1">
      <div class="nav">
        <span>客服电话：400 068 7266</span>
        <el-button style="margin-right:25px" type="primary" size="medium" @click="open">登录</el-button>
        <el-button style="margin-right:25px" type="primary" size="medium" @click="open1">注册</el-button>

        <!-- 登录 -->
        <el-dialog :visible.sync="dialogFormVisible">
          <div class="title">登录</div>
          <el-form ref="ruleForm" :model="ruleForm" label-position="left" :rules="rules" label-width="100px"
                   style="width: 400px; margin-left:50px;">
            <el-form-item label="账号" prop="name">
              <el-input v-model="ruleForm.name"/>
            </el-form-item>
            <el-tabs v-model="loginActive">
              <el-tab-pane label="密码登录" name="first">
                <el-form-item label="密码" prop="user_password">
                  <el-input v-model="ruleForm.user_password" show-password/>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="手机验证码登录" name="second">
                <el-form-item label="验证码" prop="password">
                  <div class="pas">
                    <div>
                      <el-input v-model="ruleForm.password"/>
                    </div>
                    <div class="pas-r">
                      <el-button v-show="show" type="primary" @click="getCode">获取验证码</el-button>
                      <el-button v-show="!show" type="primary" disabled class="count">{{ count }} s</el-button>
                    </div>
                  </div>
                </el-form-item>
              </el-tab-pane>
            </el-tabs>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">
              取消
            </el-button>
            <el-button type="primary" @click="login('ruleForm')">
              登录
            </el-button>
          </div>
        </el-dialog>

        <!-- 注册 -->
        <el-dialog :visible.sync="dialogFormVisibl">
          <div class="title">注册
            <div style="color:#ccc">
              （如已在 信动智调 小程序注册可直接登录）
            </div>
          </div>
          <el-form ref="ruleFormR" :model="ruleFormR" :rules="rulesR" label-position="left" label-width="100px"
                   style="width: 400px; margin-left:50px;">
            <el-form-item label="手机号" prop="zphone">
              <el-input v-model="ruleFormR.zphone"/>
            </el-form-item>
            <el-form-item label="姓名" prop="namez">
              <el-input v-model="ruleFormR.namez"/>
            </el-form-item>
            <el-form-item label="单位名称" prop="danz">
              <el-input v-model="ruleFormR.danz"/>
            </el-form-item>
            <el-form-item label="密码" prop="user_password">
              <el-input v-model="ruleFormR.user_password"/>
            </el-form-item>
            <el-form-item label="验证码" prop="zpassword">
              <div class="pas">
                <div>
                  <el-input v-model="ruleFormR.zpassword"/>
                </div>
                <div class="pas-r">
                  <el-button v-show="showz" type="primary" @click="getCodez">获取验证码</el-button>
                  <el-button v-show="!showz" type="primary" disabled class="count">{{ countz }} s</el-button>
                </div>
              </div>
            </el-form-item>

          </el-form>
          <el-checkbox v-model="checked">
            <span v-if="checked === true" style="margin:0">已阅读并同意</span>
            <span v-if="checked === false" style="margin:0">阅读并同意</span>
          </el-checkbox>
          <span style="color:#409EFF" class="yhxy" @click="toYhxy">《用户服务协议》</span>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisibl = false">
              取消
            </el-button>
            <el-button type="primary" @click="reg('ruleFormR')">
              注册
            </el-button>
          </div>
        </el-dialog>
      </div>
      <HomeCont/>
    </div>
    <div v-if="showNav2">
      <div class="navL">
        <!-- {{ activeName }} -->
        <el-tabs v-model="activeName" style="width:95%;margin:0 auto" @tab-click="handleClick">
          <el-tab-pane label="首页" name="first">
            <HomeCont/>
          </el-tab-pane>
          <el-tab-pane label="我的下载" name="second">
            <DownLoad/>
          </el-tab-pane>
          <el-tab-pane label="充值" name="third">
            <Recharge/>
          </el-tab-pane>
          <el-tab-pane label="风险监控" name="fourth">
            <RiskMonitoringList></RiskMonitoringList>
          </el-tab-pane>
          <el-tab-pane label="我的" name="fifth">
            <My/>
          </el-tab-pane>
          <el-tab-pane label="SCRM" name="crm">
            <CrmIndex/>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCont from '@/components/HomeCont/HomeCont'
import DownLoad from '@/components/download/DownLoad'
import RiskMonitoring from '@/components/RiskMonitoring/RiskMonitoring'
import RiskMonitoringList from '@/components/RiskMonitoring/RiskMonitoringList'
import My from '@/components/My/My'
import Recharge from '@/components/Recharge/Recharge'
import CrmIndex from '@/components/Crm/CrmIndex'
import { getCodes, Login, Zreg } from '@/api/article'
import { getBeneficiary } from '@/api/EnterpriseBackground'

export default {
  name: 'Nav',
  components: {
    HomeCont,
    DownLoad,
    RiskMonitoring,
    RiskMonitoringList,
    My,
    Recharge,
    CrmIndex
  },
  data() {
    var checkname = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('账号不能为空'))
      }
      var reg_tel = /^[1][3,4,5,7,8,9][0-9]{9}$/
      // console.log(value)
      if (!reg_tel.test(value)) {
        return callback(new Error('请输入正确的账号'))
      }
      callback()
    }
    var checkpassword = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('验证码不能为空'))
      }
      callback()
    }
    var checkzphone = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('手机号不能为空'))
      }
      var reg_tel = /^[1][3,4,5,7,8,9][0-9]{9}$/
      // console.log(value)
      if (!reg_tel.test(value)) {
        return callback(new Error('请输入正确的账号'))
      }
      callback()
    }
    var checknamez = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('姓名不能为空'))
      }
      if (value.length < 2) {
        return callback(new Error('请输入真实正确的姓名'))
      }
      callback()
    }
    var checkdanz = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('单位名称不能为空'))
      }
      if (value.length < 6) {
        return callback(new Error('请输入真实正确的单位名称'))
      }
      callback()
    }
    var checkzpassword = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('验证码不能为空'))
      }
      callback()
    }
    return {
      loginActive: 'first',
      checked: false,
      ruleForm: {
        name: '',
        password: '',
        user_password: ''
      },
      ruleFormR: {
        zphone: '',
        namez: '',
        danz: '',
        zpassword: '',
        user_password: ''
      },
      showNav1: true,
      showNav2: true,
      dialogFormVisible: false,
      dialogFormVisibl: false,
      password: '',
      name: '',
      zphone: '',
      zpassword: '',
      showz: true,
      show: true,
      count: '',
      countz: '',
      namez: '',
      danz: '',
      timer: null,
      timerz: null,
      query: {
        phone: '',
        type: 'login'
      },
      query1: {
        phone: '',
        vCode: ''
      },
      activeName: 'first',
      query2: {
        phone: '',
        type: 'reg'
      },
      query3: {
        username: '',
        phone: '',
        company: '',
        vCode: ''
      },
      rules: {
        name: [
          { required: true, validator: checkname, trigger: 'blur' }
        ]
        //password: [
        //  { required: true, validator: checkpassword, trigger: 'blur' }
        //]
      },
      rulesR: {
        zphone: [
          { required: true, validator: checkzphone, trigger: 'blur' }
        ],
        namez: [
          { required: true, validator: checknamez, trigger: 'blur' }
        ],
        danz: [
          { required: true, validator: checkdanz, trigger: 'blur' }
        ],
        zpassword: [
          { required: true, validator: checkzpassword, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // console.log(this.$route.query.activeName)
    if (this.$route.query.activeName === undefined) {
      this.activeName = 'first'
    } else {
      this.activeName = this.$route.query.activeName
    }

    this.activeName = localStorage.getItem('activeName')

    const token = localStorage.getItem('token')
    if (token) {
      this.showNav1 = false
      this.showNav2 = true
    } else {
      this.$confirm('请先登录后再查询', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      this.showNav1 = true
      this.showNav2 = false
    }
  },
  methods: {
    open() {
      this.dialogFormVisible = true
    },
    open1() {
      this.dialogFormVisibl = true
    },
    getCode() {
      this.query.phone = this.ruleForm.name
      getCodes(this.query).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.$message({
            message: '发送成功，请注意查收',
            type: 'success'
          })
        }
      })
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    getCodez() {
      this.query2.phone = this.ruleFormR.zphone
      getCodes(this.query2).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.$message({
            message: '发送成功，请注意查收',
            type: 'success'
          })
        }
      })
      const TIME_COUNT = 60
      if (!this.timerz) {
        this.countz = TIME_COUNT
        this.showz = false
        this.timerz = setInterval(() => {
          if (this.countz > 0 && this.countz <= TIME_COUNT) {
            this.countz--
          } else {
            this.showz = true
            clearInterval(this.timerz)
            this.timerz = null
          }
        }, 1000)
      }
    },
    reg(formName) {
      if (this.checked === false) {
        this.$message({
          message: '请勾选用户服务协议',
          type: 'warning'
        })
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.query3.username = this.ruleFormR.namez
            this.query3.phone = this.ruleFormR.zphone
            this.query3.company = this.ruleFormR.danz
            this.query3.vCode = this.ruleFormR.zpassword
            this.query3.password = this.ruleFormR.user_password
            Zreg(this.query3).then(res => {
              // console.log(res)
              if (res.data.code !== 200) {
                this.$confirm(res.data.msg, '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // });
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // });
                })
              } else {
                this.$notify({
                  title: '成功',
                  message: '注册成功',
                  type: 'success'
                })
                localStorage.setItem('token', res.data.result.token)
                localStorage.setItem('phone', res.data.result.phone)
                this.showNav1 = false
                this.showNav2 = true
                this.dialogFormVisibl = false
                localStorage.setItem('activeName', 'first')
                this.$router.go(0)
              }
            })
          } else {
            // console.log('error submit!!')
            return false
          }
        })
      }
    },
    login(formName) {
      // console.log(formName)
      // console.log(this.$refs)
      // console.log(this.$refs[formName])
      // console.log(this.$refs[formName].validate)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var local = localStorage.getItem('token')
          if (local === null) {
            this.query1.phone = this.ruleForm.name
            this.query1.vCode = this.ruleForm.password
            this.query1.password = this.ruleForm.user_password
            Login(this.query1).then(res => {
              if (res.data.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '登录成功',
                  type: 'success'
                })
                localStorage.setItem('token', res.data.result.newToken)
                localStorage.setItem('phone', res.data.result.phone)
                this.showNav1 = false
                this.showNav2 = true
                this.dialogFormVisible = false
                localStorage.setItem('activeName', 'first')
                this.$router.go(0)
              } else {
                this.$notify.error({
                  title: '错误',
                  message: '登录失败'
                })
                this.dialogFormVisible = false
              }
            })
          } else {
            this.query1.phone = this.ruleForm.name
            this.query1.vCode = this.ruleForm.password
            this.query1.password = this.ruleForm.user_password
            Login(this.query1).then(res => {
              // console.log(res)
              if (res.data.result.newToken !== res.data.result.token) {
                this.$notify({
                  title: '成功',
                  message: '登录成功',
                  type: 'success'
                })
                localStorage.setItem('token', res.data.result.newToken)
                localStorage.setItem('phone', res.data.result.phone)
                this.showNav1 = false
                this.showNav2 = true
                this.dialogFormVisible = false
                localStorage.setItem('activeName', 'first')
                this.$router.go(0)
              } else {
                this.$notify.error({
                  title: '错误',
                  message: '登录失败'
                })
                this.dialogFormVisible = false
              }
            })
          }
        } else {
          console.log(222)
          return false
        }
      })
    },
    handleClick(tab, event) {
      // console.log(tab, event)
      // console.log(tab.name)
      localStorage.setItem('activeName', tab.name)
    },
    toYhxy() {
      window.open('https://api.meirixindong.com/Static/pc_user.pdf', '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  height: 37px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  line-height: 37px;

  span {
    margin-right: 20px;
  }

  .title {
    color: #242424;
    text-align: center;
    font-size: 16px;
    padding: 24px 0;
  }

  .pas {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .pas-r {
    margin-left: 10px;
  }
}

.navL {
  height: 37px;
  width: 100%;
  margin-top: 20px;
}

.yhxy:hover {
  cursor: pointer;
}
</style>
