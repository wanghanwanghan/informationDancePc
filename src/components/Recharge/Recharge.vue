<template>
  <div>
    <div class="cont">
      <div class="cont-t">
        <div v-for="(item,index) in list" :key="index" class="money">
          <el-button type="primary" plain style="width:150px;height:200px" @click="pay(item.id)">
            <div class="name">{{ item.money }}元</div>
            <div class="desc">{{ item.desc }}</div>
            <div v-if="item.money === '50.00'" class="descZ">可速览深度信息</div>
            <div v-if="item.money === '200.00'" class="descZ">可下载速览报告</div>
            <div v-if="item.money === '500.00'" class="descZ">可下载商调报告</div>
            <div v-if="item.money === '1000.00'" class="descZ">可下载尽调报告</div>
          </el-button>
        </div>
      </div>

      <div class="cont-b">
        <div class="title">支付方式</div>
        <div class="Zway">
          <div class="weixin com" @click="Scancode(1)">
            <img src="../../assets/wei.png" alt="" style="diaplay:block;width:50px;height:50px;margin:0 30px">
            <span class="wenzi">微信支付</span>
          </div>
          <div class="zhifubao com" @click="Scancode(2)">
            <img src="../../assets/zhi.png" alt="" style="diaplay:block;width:40px;height:40px;margin:0 30px 0 35px">
            <span class="wenzi">支付宝支付</span>
          </div>
        </div>
      </div>

      <!-- 扫描二维码 -->
      <el-dialog
        :title="title"
        :visible.sync="dialogVisibl"
        width="30%"
        :before-close="handleC"
      >
        <div id="qrcode" ref="qrCodeUrl"/>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { goods, Sando, check } from '@/api/article'
import QRCode from 'qrcodejs2'

export default {
  name: 'Recharge',
  data() {
    return {
      query: {
        phone: ''
      },
      phone: '',
      list: [],
      dialogVisible: false,
      dialogVisibl: false,
      query1: {
        phone: '',
        type: '',
        payConfType: 'xd',
        payWay: ''
      },
      title: '',
      query2: {
        phone: '',
        orderId: ''
      }
    }
  },
  created() {
    this.query.phone = this.query1.phone = this.query2.phone = this.phone = localStorage.getItem('phone')
    goods(this.query).then(res => {
      //   console.log(res)
      this.list = res.data.result
    })
  },
  mounted() {
    this.$confirm('您可联系官方客服开通不限企业量的年度专业版账号 400 068 7266', '推荐提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
    }).catch(() => {
    })
  },
  methods: {
    pay(e) {
      //   console.log(e)
      this.query1.type = e
    },
    confirm() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    Scancode(e) {
      if (e === 1) {
        if (this.query1.type === '') {
          this.$message({
            message: '请选择充值金额',
            type: 'warning'
          })
        } else {
          this.dialogVisibl = true
          // console.log('微信支付')
          this.title = '请使用微信扫码支付'
          this.query1.payWay = 'wx_scan'
          Sando(this.query1).then(res => {
            // console.log(res)
            const text = res.data.result.payObj
            const orderId = res.data.result.orderId
            this.query2.orderId = orderId
            new QRCode(this.$refs.qrCodeUrl, {
              text: text, // 需要转换为二维码的内容
              width: 200,
              height: 200,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            })
          })
          var _this = this
          var time = setInterval(function() {
            check(_this.query2).then(res => {
              // console.log(res)
              if (res.data.code === 200) {
                this.dialogVisibl = false
                clearInterval(time)
                this.$message({
                  message: '充值成功，请使用相关付费模块即可',
                  type: 'success'
                })
              }
            })
          }, 1000)
        }
      }
      if (e === 2) {
        if (this.query1.type === '') {
          this.$message({
            message: '请选择充值金额',
            type: 'warning'
          })
        } else {
          this.dialogVisibl = true
          // console.log('支付宝支付')
          this.title = '请使用支付宝扫码支付'
          this.query1.payWay = 'ali_scan'
          Sando(this.query1).then(res => {
            //   console.log(res)
            const text = res.data.result.payObj
            new QRCode(this.$refs.qrCodeUrl, {
              text: text, // 需要转换为二维码的内容
              width: 200,
              height: 200,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            })
          })
          var _this1 = this
          var time1 = setInterval(function() {
            check(_this1.query2).then(res => {
              // console.log(res)
              if (res.data.code === 200) {
                this.dialogVisibl = false
                clearInterval(time1)
                this.$message({
                  message: '充值成功，请使用相关付费模块即可',
                  type: 'success'
                })
              }
            })
          }, 1000)
        }
      }
    },
    handleC(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          document.getElementById('qrcode').innerHTML = ''
          this.$router.go(0)
          done()
        })
        .catch(_ => {
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.cont {
  width: 70%;
  margin: 80px auto;
  display: flex;
  flex-wrap: wrap;

  .cont-t {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .money {
      // display: flex;
      // justify-content: space-around;
      // margin:20px 82px;
      .name {
        font-size: 18px;
        margin-bottom: 10px;
      }

      .desc {
        margin-top: 15px;
        font-size: 14px;
      }

      .descZ {
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }

  .cont-b {
    width: 100%;

    .title {
      margin-top: 35px;
    }

    .Zway {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }

}

.com {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 25px 0;
  border: 1px solid #D7DAE2;
  border-radius: 4px
}

.wenzi {
  font-size: 16px;
  margin-right: 40px;
}

.com:hover {
  cursor: pointer
}

#qrcode {
  display: inline-block;
  margin-left: 80px;
  margin-bottom: 35px;
  // img {
  //     display: block;
  //     width: 200px;
  //     height: 200px;
  //     // background-color: #fff; //设置白色背景色
  //     // padding: 6px; // 利用padding的特性，挤出白边
  //     // box-sizing: border-box;
  // }
}
</style>
