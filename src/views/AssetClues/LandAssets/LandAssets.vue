<template>
  <div class="box">
    <!-- 土地资产类 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <a class="et-hero-tab" href="#tab-jb">土地资产类</a>
        <a class="et-hero-tab" href="#tab-gd">设备资产类</a>
        <span class="et-hero-tab-slider"/>
      </div>
    </section>
    <main class="et-main">
      <section id="tab-jb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">土地资产类</h3>
        <div class="box2">
          <!-- 土地资产类 -->
          <div class="cont">
            <div v-if="show1">暂无相关信息</div>
            <div v-if="!show1" class="clic">
              <span style="margin:20px 0">该企业有潜在土地资产线索</span>
              <div>
                <el-button type="primary" style="margin:20px 10px" @click="toQf">土地转让</el-button>
                <el-button type="primary" style="margin:20px 10px" @click="toQf">土地公示</el-button>
                <el-button type="primary" style="margin:20px 10px" @click="toDb">土地抵押</el-button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tab-gd" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">设备资产类</h3>
        <div class="box2">
          <!-- 设备资产类 -->
          <div class="cont">
            <div v-if="show2">暂无相关信息</div>
            <div v-if="!show2" class="clic">
              <span style="margin:20px 0">该企业有潜在可生产****的生产线设备资产线索</span>
              <el-button type="primary" style="margin:20px 0" @click="toProduct">点击查看</el-button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getAssetLeads, getProductStandard } from '@/api/article'

export default {
  data() {
    return {
      isFixed: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: ''
      },
      show1: false,
      show2: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    getAssetLeads(this.query).then(res => {
      // console.log(res)
      if (res.data.result.LandPublishList === 0 && res.data.result.LandPurchaseList === 0 && res.data.result.LandTransferList === 0) {
        this.show1 = true
      }
    })
    getProductStandard(this.query).then(res => {
      // console.log(res)
      const arr = res.data.result
      if (arr.length > 0) {
        this.show2 = false
      }
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    toProduct() {
      this.$router.push({ path: '../MainProducts/MainProducts' })
    },
    toQf() {
      this.$router.push({ path: '../EnterpriseDevelopment/FinancingHistory' })
    },
    toDb() {
      this.$router.push({ path: '../guaranteedMortgage/EquityPledge' })
    }

  }
}
</script>
<style lang="scss" scoped>
.box {
  .et-hero-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    width: 100%;
    height: 51px;
    position: relative;
    background: #eee;
    text-align: center;
    // padding: 0 2em;
    .et-hero-tabs-containerf {
      display: flex;
      flex-direction: row;
      /* position: absolute; */
      bottom: 0;
      width: 85%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;
      position: fixed;
      top: 0px;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container {
      display: flex;
      flex-direction: row;
      /* position: absolute; */
      bottom: 0;
      width: 100%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container--top {
      position: fixed;
      top: 0;
    }

    .et-main {
      .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        background: #eee;
        text-align: center;
        padding: 0 2em;

        .cont {
          width: 94%;
          // min-height:500px;
          margin: 40px;
          border: 1px solid #EBEBEB;
        }
      }
    }
  }
}

.box1 {
  width: 100%;

  .cont {
    width: 94%;
    min-height: 500px;
    margin: 40px;
    border: 1px solid #EBEBEB;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      td {
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }

      .type1 {
        width: 100px
      }

      .type2 {
        width: 200px
      }

      .type3 {
        // colspan:'4'
        border-right: none
      }

      .type4 {
        border-bottom: none;
      }
    }
  }

}

.box2 {
  .cont {
    width: 94%;
    // min-height:500px;
    margin: 40px;
    border: 1px solid #EBEBEB;

    .clic {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.cont1 {
  padding: 40px 0 40px 400px;
  width: 94%;
  border: 1px solid #EBEBEB;
}
</style>
