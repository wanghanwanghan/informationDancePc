<template>
  <div class="box">
    <!-- 央行行政处罚 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-yhcf">央行行政处罚</a>
        <a class="et-hero-tab" href="#tab-yjhcf">银保监会处罚公示</a>
        <a class="et-hero-tab" href="#tab-zjcf">证监处罚公示</a>
        <a class="et-hero-tab" href="#tab-zjxk">证监会许可批复等级</a>
        <a class="et-hero-tab" href="#tab-whjcf">外汇局处罚</a>
        <a class="et-hero-tab" href="#tab-whjxk">外汇局许可</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-yhcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">央行行政处罚</h3>
        <div class="box2">
          <!-- 商标 -->
          <div class="cont">
            <el-table
              :data="Pbcparty"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPbcparty"
              @current-change="handleChangePbcparty"
            />
          </div>
        </div>
      </section>
      <section id="tab-yjhcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">银保监会处罚公示</h3>
        <div class="box2">
          <!-- 银保监会处罚公示 -->
          <div class="cont">
            <el-table
              :data="PbcpartyCbrc"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPbcpartyCbrc"
              @current-change="handleChangePbcpartyCbrc"
            />
          </div>
        </div>
      </section>
      <section id="tab-zjcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">证监处罚公示</h3>
        <div class="box2">
          <!-- 证监处罚公示 -->
          <div class="cont">
            <el-table
              :data="PbcpartyCsrcChufa"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPbcpartyCsrcChufa"
              @current-change="handleChangePbcpartyCsrcChufa"
            />
          </div>
        </div>
      </section>
      <section id="tab-zjxk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">证监会许可批复等级</h3>
        <div class="box2">
          <!-- 证监会许可批复等级 -->
          <div class="cont">
            <el-table
              :data="PbcpartyCsrcXkpf"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPbcpartyCsrcXkpf"
              @current-change="handleChangePbcpartyCsrcXkpf"
            />
          </div>
        </div>
      </section>
      <section id="tab-whjcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">外汇局处罚</h3>
        <div class="box2">
          <!-- 外汇局处罚 -->
          <div class="cont">
            <el-table
              :data="SafeChufa"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSafeChufa"
              @current-change="handleChangeSafeChufa"
            />
          </div>
        </div>
      </section>
      <section id="tab-whjxk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">外汇局许可</h3>
        <div class="box2">
          <!-- 外汇局许可 -->
          <div class="cont">
            <el-table
              :data="SafeXuke"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSafeXuke"
              @current-change="handleChangeSafeXuke"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getPbcparty, getPbcpartyCbrc, getPbcpartyCsrcChufa, getPbcpartyCsrcXkpf, getSafeChufa, getSafeXuke } from '@/api/financialRegulation'
export default {
  data() {
    return {
      isFixed: false,
      scrollHeight: 258,
      entname: '',
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      Pbcparty: [],
      totalPbcparty: 0,
      PbcpartyCbrc: [],
      totalPbcpartyCbrc: 0,
      PbcpartyCsrcChufa: [],
      totalPbcpartyCsrcChufa: 0,
      PbcpartyCsrcXkpf: [],
      totalPbcpartyCsrcXkpf: 0,
      SafeChufa: [],
      totalSafeChufa: 0,
      SafeXuke: [],
      totalSafeXuke: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    // 商标
    getPbcparty(this.query).then(res => {
      // console.log(res)
      this.Pbcparty = res.data.result
      this.totalPbcparty = res.data.paging.total
    })
    // 银保监会处罚公示
    getPbcpartyCbrc(this.query).then(res => {
      // console.log(res)
      this.PbcpartyCbrc = res.data.result
      this.totalPbcpartyCbrc = res.data.paging.total
    })
    // 证监处罚公示
    getPbcpartyCsrcChufa(this.query).then(res => {
      // console.log(res)
      this.PbcpartyCsrcChufa = res.data.result
      this.totalPbcpartyCsrcChufa = res.data.paging.total
    })
    // 证监会许可批复等级
    getPbcpartyCsrcXkpf(this.query).then(res => {
      // console.log(res)
      this.PbcpartyCsrcXkpf = res.data.result
      this.totalPbcpartyCsrcXkpf = res.data.paging.total
    })
    // 外汇局处罚
    getSafeChufa(this.query).then(res => {
      // console.log(res)
      this.SafeChufa = res.data.result
      this.totalSafeChufa = res.data.paging.total
    })
    // 外汇局许可
    getSafeXuke(this.query).then(res => {
      // console.log(res)
      this.SafeXuke = res.data.result
      this.totalSafeXuke = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 商标分页
    handleChangePbcparty(val) {
      this.Pbcparty = []
      this.query.page = val
      getPbcparty(this.query).then(res => {
        this.Pbcparty = res.data.result
      })
    },
    // 银保监会处罚公示分页
    handleChangePbcpartyCbrc(val) {
      this.PbcpartyCbrc = []
      this.query.page = val
      getPbcpartyCbrc(this.query).then(res => {
        this.PbcpartyCbrc = res.data.result
      })
    },
    // 证监处罚公示分页
    handleChangePbcpartyCsrcChufa(val) {
      this.PbcpartyCsrcChufa = []
      this.query.page = val
      getPbcpartyCsrcChufa(this.query).then(res => {
        this.PbcpartyCsrcChufa = res.data.result
      })
    },
    // 证监会许可批复等级分页
    handleChangePbcpartyCsrcXkpf(val) {
      this.PbcpartyCsrcXkpf = []
      this.query.page = val
      getPbcpartyCsrcXkpf(this.query).then(res => {
        this.PbcpartyCsrcXkpf = res.data.result
      })
    },
    // 外汇局处罚分页
    handleChangeSafeChufa(val) {
      this.SafeChufa = []
      this.query.page = val
      getSafeChufa(this.query).then(res => {
        this.SafeChufa = res.data.result
      })
    },
    // 外汇局许可分页
    handleChangeSafeXuke(val) {
      this.SafeXuke = []
      this.query.page = val
      getSafeXuke(this.query).then(res => {
        this.SafeXuke = res.data.result
      })
    }

  }
}
</script>
<style lang="scss" scoped>
.box{
  .et-hero-tabs{
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
    .et-hero-tabs-containerf{
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
        font-size:14px;
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
        font-size:14px;
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
    .et-main{
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
        .cont{
          width:94%;
          // min-height:500px;
          margin:40px;
          border:1px solid #EBEBEB;
        }
      }
    }
  }
}
.box1{
  width: 100%;
  .cont{
    width:94%;
    min-height:500px;
    margin:40px;
    border:1px solid #EBEBEB;
      tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
      td{
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }
      .type1{
        width:100px
      }
      .type2{
        width:200px
      }
      .type3{
        // colspan:'4'
        border-right:none
      }
      .type4{
        border-bottom: none;
      }
    }
  }

}
.box2{
  .cont{
    width:94%;
    // min-height:500px;
    margin:40px;
    border:1px solid #EBEBEB;
  }
}
.cont1{
  padding:40px 0 40px 400px;
  width:94%;
  border:1px solid #EBEBEB;
}
</style>

