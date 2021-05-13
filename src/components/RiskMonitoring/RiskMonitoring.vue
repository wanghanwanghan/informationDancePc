<template>
  <!-- style="HEIGHT: 140;OVERFLOW: scroll; scrollbar-3dlight-color:#595959; scrollbar-arrow-color:#FFFFFF; scrollbar-base-color:#CFCFCF; scrollbar-darkshadow-color:#FFFFFF; scrollbar-face-color:#CFCFCF; scrollbar-highlight-color:#FFFFFF; scrollbar-shadow-color:#595959" -->
  <div class="app-container">
    <img @click="jumpBack" class="panel-image" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg"
         alt="">
    <div class="panel-heading">
      <div class="panel-title"><h3>风险动态</h3></div>
      <div><span style="font-size: 12px">基于公开信息分析生成，仅供参考，并不代表任何明示，暗示之观点或保证</span></div>
    </div>
    <div class="panel-body">
      <div class="left">
        <!-- 公司列表 -->
        <div class="leftQ">
          <el-button type="primary" plain class="title" size="mini">监控企业</el-button>
          <el-select v-model="value" placeholder="请选择" style="width:240px" @change="choose">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.entName"
              :value="item.entName"
            />
          </el-select>
          <span class="set" @click="showM">设置风险提示阈值</span>
        </div>
        <!-- 监控分类 -->
        <div class="leftFL">
          <el-button type="primary" plain class="title" size="mini">监控分类</el-button>
          <div
            v-for="(item,index) in fxfl"
            :key="item.index"
            :class="{activefxfl:index_fxfl === index}"
            @click="changefxfl(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 风险等级 -->
        <div class="leftF">
          <el-button type="primary" plain class="title" size="mini">风险等级</el-button>
          <div
            v-for="(item,index) in fxdj"
            :key="item.index"
            :class="{active:index_fxdj === index}"
            @click="change(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 风险类型 -->
        <div v-if="show_fxlx" class="leftL">
          <el-button type="primary" plain class="title" size="mini">风险类型</el-button>
          <div
            v-for="(item,index) in fxlx"
            :key="item.index"
            :class="{activefxlx:index_fxlx === index}"
            @click="changefxlx(index,item)"
          >{{ item }}
          </div>
        </div>
        <el-dialog
          title="设置短信提示风险阈值"
          :visible.sync="dialogVisible"
          width="50%"
        >
          <div class="yzts">
            <el-button type="primary" plain class="Kbtn">司法风险阈值</el-button>
            <el-input-number v-model="num1" :min="0" :max="10" label="描述文字"/>
          </div>
          <div class="yzts">
            <el-button type="primary" plain class="Kbtn">工商风险阈值</el-button>
            <el-input-number v-model="num2" :min="0" :max="10" label="描述文字"/>
          </div>
          <div class="yzts">
            <el-button type="primary" plain class="Kbtn">管理风险阈值</el-button>
            <el-input-number v-model="num3" :min="0" :max="10" label="描述文字"/>
          </div>
          <div class="yzts">
            <el-button type="primary" plain class="Kbtn">经营风险阈值</el-button>
            <el-input-number v-model="num4" :min="0" :max="10" label="描述文字"/>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="tijiaoY">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 争议动态 -->
        <div v-if="show_zyfdt" class="leftZ">
          <el-button type="primary" plain class="title" size="mini">争议动态</el-button>
          <div
            v-for="(item,index) in zyfdt"
            :key="item.index"
            :class="{activezydt:index_zyfdt === index}"
            @click="changezydt(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 司法风险 -->
        <div v-if="show_sffx" class="leftS">
          <el-button type="primary" plain class="title" size="mini">司法风险</el-button>
          <div
            v-for="(item,index) in sffx"
            :key="item.index"
            :class="{activesffx:index_sffx === index}"
            @click="changesffx(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 工商风险 -->
        <div v-if="show_gsfx" class="leftG">
          <el-button type="primary" plain class="title" size="mini">工商风险</el-button>
          <div
            v-for="(item,index) in gsfx"
            :key="item.index"
            :class="{activegsfx:index_gsfx === index}"
            @click="changegsfx(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 管理风险 -->
        <div v-if="show_glfx" class="leftGL">
          <el-button type="primary" plain class="title" size="mini">管理风险</el-button>
          <div
            v-for="(item,index) in glfx"
            :key="item.index"
            :class="{activeglfx:index_glfx === index}"
            @click="changeglfx(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 经营风险 -->
        <div v-if="show_jyfx" class="leftJ">
          <el-button type="primary" plain class="title" size="mini">经营风险</el-button>
          <div
            v-for="(item,index) in jyfx"
            :key="item.index"
            :class="{activejyfx:index_jyfx === index}"
            @click="changejyfx(index,item)"
          >{{ item }}
          </div>
        </div>
        <!-- 时间选择 -->
        <div class="leftSJ">
          <el-button type="primary" plain class="title" size="mini">时间选择</el-button>
          <div
            v-for="(item,index) in sjxz"
            :key="item.index"
            :class="{activesjxz:index_sjxz === index}"
            @click="changesjxz(index,item)"
          >{{ item }}
          </div>
          <!-- <span class="block">
            <el-date-picker
              v-model="RQ"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </span> -->
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="panel panel-info myShadowFather" style="margin-top: 30px">
      <el-table :data="list" border fit highlight-current-row style="width: 100%;margin-top:20px;">

        <el-table-column width="350" align="center" label="企业名称">
          <template slot-scope="{row}">
            <span>{{ row.entName }}</span>
          </template>
        </el-table-column>

        <el-table-column width="96" align="center" label="风险等级">
          <template slot-scope="{row}">
            <span>{{ levelToWord(row.level) }}</span>
          </template>
        </el-table-column>

        <el-table-column width="200" align="center" label="风险说明">
          <template slot-scope="{row}">
            <span>{{ row.desc }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="风险内容">
          <template slot-scope="{row}">
            <span v-html="row.content">{{ row.content }}</span>
          </template>
        </el-table-column>

        <el-table-column width="200" align="center" label="更新时间">
          <template slot-scope="{row}">
            <span>{{ row.updated_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <!--        <el-table-column align="center" label="操作" class-name="small-padding fixed-width">-->
        <!--          <template>-->
        <!--            <el-button type="success" size="mini" class="ckxq">-->
        <!--              查看详情-->
        <!--            </el-button>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalsupervisor"
        @current-change="handleChangesupervisor"
      />
    </div>
  </div>
</template>
<script>
import { supervisor, supervisorLimit, supervisorLimitT } from '@/api/article'
import { parseTime } from '@/utils/index'

export default {
  name: 'RiskMonitoring',
  props: {
    entName: {
      type: String,
      default: ''
    }
  },
  filters: {
    parseTime: parseTime
  },
  mounted() {
    this.value = this.entName
    this.query.phone = localStorage.getItem('phone')
    this.query1.phone = localStorage.getItem('phone')
    this.query2.phone = localStorage.getItem('phone')
    this.query.entName = this.entName
    this.query1.entName = this.entName
    this.query2.entName = this.entName
    supervisor(this.query).then(res => {
      this.list = res.data.result.detail
      this.totalsupervisor = res.data.paging.total
      this.options = res.data.result.entList
    })
  },
  data() {
    return {
      options: [],
      value: '',

      fxfl: ['全部', '争议方动态', '合作方动态'],//title
      index_fxfl: 0,

      fxdj: ['全部', '高风险', '风险', '警示', '提示', '利好'],//level
      index_fxdj: 0,

      fxlx: ['全部', '司法风险', '工商风险', '管理风险', '经营风险'],//type
      index_fxlx: 0,
      show_fxlx: false,

      zyfdt: ['全部', '股东变更', '注销/吊销', '行政处罚', '开庭公告', '失信被执行人', '被执行人', '裁判文书', '新闻舆情'],//typeDetail
      index_zyfdt: 0,
      show_zyfdt: false,

      sffx: ['全部', '股权冻结', '法院公告', '查封冻结扣押'],//typeDetail
      index_sffx: 0,
      show_sffx: false,

      gsfx: ['全部', '工商变更', '实际控制人变更', '最终受益人变更', '对外投资', '主要成员'],//typeDetail
      index_gsfx: 0,
      show_gsfx: false,

      glfx: ['全部', '严重违法', '环保处罚', '税收违法', '欠税公告', '海关处罚', '一行两会'],//typeDetail
      index_glfx: 0,
      show_glfx: false,

      jyfx: ['全部', '经营异常', '动产抵押', '土地抵押', '股权出质', '股权质押', '对外担保'],//typeDetail
      index_jyfx: 0,
      show_jyfx: false,

      sjxz: ['全部', '近7天', '近30天', '今年'],//timeRange
      index_sjxz: 0,

      RQ: '',
      list: [],
      totalsupervisor: 0,
      dialogVisible: false,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      query1: {
        phone: '',
        entName: ''
      },
      query2: {
        phone: '',
        entName: '',
        sf: '',
        gs: '',
        gl: '',
        jy: ''
      },
      query: {
        phone: '',
        entName: '',
        title: '',
        level: '',
        type: '',
        typeDetail: '',
        timeRange: '',
        page: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    jumpBack() {
      this.$router.go(-1)
    },
    levelToWord(num) {
      if (num === 1) {
        return '高风险'
      }
      if (num === 2) {
        return '风险'
      }
      if (num === 3) {
        return '警示'
      }
      if (num === 4) {
        return '提示'
      }
      if (num === 5) {
        return '利好'
      }
    },
    // 风险分类
    changefxfl(index, item) {
      this.index_fxfl = index
      this.query.title = item
      this.query.level = ''
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
      this.show_zyfdt = false
      this.show_fxlx = false
      this.show_sffx = false
      this.show_gsfx = false
      this.show_glfx = false
      this.show_jyfx = false
      if (item === '争议方动态') {
        this.show_zyfdt = true
        this.show_fxlx = false
        this.show_sffx = false
        this.show_gsfx = false
        this.show_glfx = false
        this.show_jyfx = false
        this.query.type = '争议方动态'
        this.query.typeDetail = '全部'
      }
      if (item === '合作方动态') {
        this.show_zyfdt = false
        this.show_fxlx = true
        this.query.type = '合作方动态'
        this.query.typeDetail = '全部'
      }
    },
    // 风险等级
    change(index, item) {
      this.index_fxdj = index
      this.query.level = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 风险类型
    changefxlx(index, item) {
      this.index_fxlx = index
      this.query.type = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
      if (item === '司法风险') {
        this.show_sffx = true
        this.show_gsfx = false
        this.show_glfx = false
        this.show_jyfx = false
      }
      if (item === '工商风险') {
        this.show_sffx = false
        this.show_gsfx = true
        this.show_glfx = false
        this.show_jyfx = false
      }
      if (item === '管理风险') {
        this.show_sffx = false
        this.show_gsfx = false
        this.show_glfx = true
        this.show_jyfx = false
      }
      if (item === '经营风险') {
        this.show_sffx = false
        this.show_gsfx = false
        this.show_glfx = false
        this.show_jyfx = true
      }
    },
    // 争议动态
    changezydt(index, item) {
      this.index_zyfdt = index
      this.query.title = '争议方动态'
      this.query.type = '争议方动态'
      this.query.typeDetail = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 司法风险
    changesffx(index, item) {
      this.index_sffx = index
      this.query.typeDetail = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 工商风险
    changegsfx(index, item) {
      this.index_gsfx = index
      this.query.typeDetail = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 管理风险
    changeglfx(index, item) {
      this.index_glfx = index
      this.query.typeDetail = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 经营风险
    changejyfx(index, item) {
      this.index_jyfx = index
      this.query.typeDetail = item
      this.query.page = 1
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 时间选择
    changesjxz(index, item) {
      this.index_sjxz = index
      this.query.page = 1
      if (item === '近7天') {
        this.query.timeRange = 7
        supervisor(this.query).then(res => {
          this.list = res.data.result.detail
          this.totalsupervisor = res.data.paging.total
        })
      }
      if (item === '近30天') {
        this.query.timeRange = 30
        supervisor(this.query).then(res => {
          this.list = res.data.result.detail
          this.totalsupervisor = res.data.paging.total
        })
      }
      if (item === '今年') {
        this.query.timeRange = 365
        supervisor(this.query).then(res => {
          this.list = res.data.result.detail
          this.totalsupervisor = res.data.paging.total
        })
      }
    },
    // 下拉框变化
    choose(e) {
      this.query.entName = e
      this.query1.entName = e
      this.query2.entName = e
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
        this.totalsupervisor = res.data.paging.total
      })
    },
    // 分页
    handleChangesupervisor(val) {
      this.list = []
      this.query.page = val
      supervisor(this.query).then(res => {
        this.list = res.data.result.detail
      })
    },
    // 展示阈值页面
    showM() {
      this.dialogVisible = true
      supervisorLimit(this.query1).then(res => {
        this.num1 = res.data.result.sf
        this.num2 = res.data.result.gs
        this.num3 = res.data.result.gl
        this.num4 = res.data.result.jy
      })
    },
    // 提交阈值
    tijiaoY() {
      this.dialogVisible = false
      this.query2.sf = this.num1
      this.query2.gs = this.num2
      this.query2.gl = this.num3
      this.query2.jy = this.num4
      supervisorLimitT(this.query2).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .panel-image {
    margin-top: -15px;
    width: 150px;
    cursor: pointer;
  }

  .panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    div {
      margin-right: 30px;

      .panel-title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 500;
        font-size: 12px;
        color: inherit;
      }
    }
  }

  .panel-body {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    .left {
      width: 70%;
      min-height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .leftQ {
        display: flex;
        flex-direction: row;

        .set {
          display: block;
          width: 125px;
          height: 40px;
          font-size: 12px;
          color: #fff;
          background: #FFA500;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          margin-left: 20px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftFL {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          font-size: 12px;
          margin-right: 20px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer
        }

        .activefxfl {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftF {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          font-size: 12px;
          margin-right: 20px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer
        }

        .active {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .yzts {
        margin: 25px 25px 25px 80px;

        .Kbtn {
          margin-right: 170px
        }
      }

      .leftL {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 12px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
          cursor: pointer
        }

        .activefxlx {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftS {
        display: flex;
        justify-content: start;

        div {
          width: 98px;
          height: 40px;
          font-size: 12px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer
        }

        .activesffx {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftZ {
        display: flex;
        justify-content: start;

        div {
          width: 98px;
          height: 40px;
          font-size: 12px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer
        }

        .activezydt {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftG {
        display: flex;
        justify-content: start;

        div {
          width: 115px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 12px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
          font-size: 12px;
        }

        .activegsfx {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftGL {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 12px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
          font-size: 12px;
        }

        .activeglfx {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftJ {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 12px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
          font-size: 12px;
        }

        .activejyfx {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }
      }

      .leftSJ {
        display: flex;
        justify-content: start;

        div {
          width: 80px;
          height: 40px;
          color: #409EFF;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 12px;
        }

        div:hover {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
          font-size: 12px;
        }

        .activesjxz {
          color: #fff;
          background: #409EFF;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 12px;
        }

        .title {
          margin-right: 20px;
        }

        .block {
          display: block;

          .el-date-editor {
            width: 255px
          }

          .el-date-editor:hover {
            background: none;
            width: 255px
          }
        }
      }
    }

    .right {
      width: 30%;
      min-height: 350px;
    }
  }
}
</style>
