<template>
  <div class="box">
    <!-- 欠税公告 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-qsgg">欠税公告</a>
        <a class="et-hero-tab" href="#tab-sscf">涉税处罚公示</a>
        <a class="et-hero-tab" href="#tab-swfzc">税务非正常户公示</a>
        <a class="et-hero-tab" href="#tab-nsxydj">纳税信用等级</a>
        <a class="et-hero-tab" href="#tab-swdj">税务登记</a>
        <a class="et-hero-tab" href="#tab-swxk">税务许可</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-qsgg" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">欠税公告（{{ totalSatpartyQs }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="qsggdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="qsggdesc" type="warning" @click="modMsg(8)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(8)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 行政许可 -->
          <div class="cont">
            <el-table
              :data="SatpartyQs"
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
                width="350"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="公告日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/qsggDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyQs"
              @current-change="handleChangeSatpartyQs"
            />
          </div>
        </div>
      </section>
      <section id="tab-sscf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">涉税处罚公示（{{ totalSatpartyChufa }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="sscfdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="sscfdesc" type="warning" @click="modMsg(9)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(9)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 涉税处罚公示 -->
          <div class="cont">
            <el-table
              :data="SatpartyChufa"
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
                width="350"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="公告日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/sscfDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyChufa"
              @current-change="handleChangeSatpartyChufa"
            />
          </div>
        </div>
      </section>
      <section id="tab-swfzc" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">税务非正常户公示（{{ totalSatpartyFzc }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="swfzcdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="swfzcdesc" type="warning" @click="modMsg(10)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(10)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 税务非正常户公示 -->
          <div class="cont">
            <el-table
              :data="SatpartyFzc"
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
                width="350"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="公告日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/swfzcDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyFzc"
              @current-change="handleChangeSatpartyFzc"
            />
          </div>
        </div>
      </section>
      <section id="tab-nsxydj" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">纳税信用等级（{{ totalSatpartyXin }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="nsxydjdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="nsxydjdesc" type="warning" @click="modMsg(11)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(11)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 纳税信用等级 -->
          <div class="cont">
            <el-table
              :data="SatpartyXin"
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
                width="350"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/xydjDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyXin"
              @current-change="handleChangeSatpartyXin"
            />
          </div>
        </div>
      </section>
      <section id="tab-swdj" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">税务登记（{{ totalSatpartyReg }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="swdjdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="swdjdesc" type="warning" @click="modMsg(12)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(12)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 税务登记 -->
          <div class="cont">
            <el-table
              :data="SatpartyReg"
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
                width="350"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/swdjDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyReg"
              @current-change="handleChangeSatpartyReg"
            />
          </div>
        </div>
      </section>
      <section id="tab-swxk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">税务许可（{{ totalSatpartyXuke }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="swxkdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="swxkdesc" type="warning" @click="modMsg(13)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(13)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 税务许可 -->
          <div class="cont">
            <el-table
              :data="SatpartyXuke"
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
                label="日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/Taxation/swxkDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSatpartyXuke"
              @current-change="handleChangeSatpartyXuke"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  getSatpartyQs,
  getSatpartyChufa,
  getSatpartyFzc,
  getSatpartyXin,
  getSatpartyReg,
  getSatpartyXuke
} from '@/api/Taxation'
import {
  getoneSaid,
  createoneSaid,
  editoneSaid
} from '@/api/JudicialDecisions'
export default {
  data() {
    return {
      qsggdesc: '',
      sscfdesc: '',
      swfzcdesc: '',
      nsxydjdesc: '',
      swdjdesc: '',
      swxkdesc: '',
      isFixed: false,
      scrollHeight: 258,
      entname: '',
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      SatpartyQs: [],
      totalSatpartyQs: 0,
      SatpartyChufa: [],
      totalSatpartyChufa: 0,
      SatpartyFzc: [],
      totalSatpartyFzc: 0,
      SatpartyXin: [],
      totalSatpartyXin: 0,
      SatpartyReg: [],
      totalSatpartyReg: 0,
      SatpartyXuke: [],
      totalSatpartyXuke: 0,
      query1: {
        entName: '',
        phone: '',
        moduleId: '8'
      },
      query2: {
        entName: '',
        phone: '',
        moduleId: '9'
      },
      query3: {
        entName: '',
        phone: '',
        moduleId: '10'
      },
      query4: {
        entName: '',
        phone: '',
        moduleId: '11'
      },
      query5: {
        entName: '',
        phone: '',
        moduleId: '12'
      },
      query6: {
        entName: '',
        phone: '',
        moduleId: '13'
      },
      query8: {
        entName: '',
        phone: '',
        oneSaid: '',
        moduleId: ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query8.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query8.phone = localStorage.getItem('phone')

    // 欠税公告
    getSatpartyQs(this.query).then(res => {
      // console.log(res)
      this.SatpartyQs = res.data.result
      this.totalSatpartyQs = res.data.paging.total
    })
    // 欠税公告留言
    this.query1.entName = localStorage.getItem('entName')
    this.query1.phone = localStorage.getItem('phone')
    getoneSaid(this.query1).then(res => {
      // console.log(res)
      this.qsggdesc = res.data.result.oneSaid
    })
    // 涉税处罚公示
    getSatpartyChufa(this.query).then(res => {
      // console.log(res)
      this.SatpartyChufa = res.data.result
      this.totalSatpartyChufa = res.data.paging.total
    })
    // 涉税处罚公示留言
    this.query2.entName = localStorage.getItem('entName')
    this.query2.phone = localStorage.getItem('phone')
    getoneSaid(this.query2).then(res => {
      // console.log(res)
      this.sscfdesc = res.data.result.oneSaid
    })

    // 税务非正常户公示
    getSatpartyFzc(this.query).then(res => {
      // console.log(res)
      this.SatpartyFzc = res.data.result
      this.totalSatpartyFzc = res.data.paging.total
    })
    // 税务非正常户公示留言
    this.query3.entName = localStorage.getItem('entName')
    this.query3.phone = localStorage.getItem('phone')
    getoneSaid(this.query3).then(res => {
      // console.log(res)
      this.swfzcdesc = res.data.result.oneSaid
    })

    // 纳税信用等级
    getSatpartyXin(this.query).then(res => {
      // console.log(res)
      this.SatpartyXin = res.data.result
      this.totalSatpartyXin = res.data.paging.total
    })
    // 纳税信用等级留言
    this.query4.entName = localStorage.getItem('entName')
    this.query4.phone = localStorage.getItem('phone')
    getoneSaid(this.query4).then(res => {
      // console.log(res)
      this.nsxydjdesc = res.data.result.oneSaid
    })

    // 税务登记
    getSatpartyReg(this.query).then(res => {
      // console.log(res)
      this.SatpartyReg = res.data.result
      this.totalSatpartyReg = res.data.paging.total
    })
    // 税务登记留言
    this.query5.entName = localStorage.getItem('entName')
    this.query5.phone = localStorage.getItem('phone')
    getoneSaid(this.query5).then(res => {
      // console.log(res)
      this.swdjdesc = res.data.result.oneSaid
    })

    // 税务许可
    getSatpartyXuke(this.query).then(res => {
      // console.log(res)
      this.SatpartyXuke = res.data.result
      this.totalSatpartyXuke = res.data.paging.total
    })
    // 税务许可留言
    this.query6.entName = localStorage.getItem('entName')
    this.query6.phone = localStorage.getItem('phone')
    getoneSaid(this.query6).then(res => {
      // console.log(res)
      this.swxkdesc = res.data.result.oneSaid
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 行政许可分页
    handleChangeSatpartyQs(val) {
      this.SatpartyQs = []
      this.query.page = val
      getSatpartyQs(this.query).then(res => {
        this.SatpartyQs = res.data.result
      })
    },
    // 涉税处罚公示分页
    handleChangeSatpartyChufa(val) {
      this.SatpartyChufa = []
      this.query.page = val
      getSatpartyChufa(this.query).then(res => {
        this.SatpartyChufa = res.data.result
      })
    },
    // 税务非正常户公示分页
    handleChangeSatpartyFzc(val) {
      this.SatpartyFzc = []
      this.query.page = val
      getSatpartyFzc(this.query).then(res => {
        this.SatpartyFzc = res.data.result
      })
    },
    // 纳税信用等级分页
    handleChangeSatpartyXin(val) {
      this.SatpartyXin = []
      this.query.page = val
      getSatpartyXin(this.query).then(res => {
        this.SatpartyXin = res.data.result
      })
    },
    // 税务登记分页
    handleChangeSatpartyReg(val) {
      this.SatpartyReg = []
      this.query.page = val
      getSatpartyReg(this.query).then(res => {
        this.SatpartyReg = res.data.result
      })
    },
    // 税务许可分页
    handleChangeSatpartyXuke(val) {
      this.SatpartyXuke = []
      this.query.page = val
      getSatpartyXuke(this.query).then(res => {
        this.SatpartyXuke = res.data.result
      })
    },

    // 添加留言
    addMsg(e) {
      if (e === 8) {
        if (this.qsggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.qsggdesc
          this.query8.moduleId = '8'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 9) {
        if (this.sscfdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sscfdesc
          this.query8.moduleId = '9'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 10) {
        if (this.swfzcdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swfzcdesc
          this.query8.moduleId = '10'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 11) {
        if (this.nsxydjdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.nsxydjdesc
          this.query8.moduleId = '11'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 12) {
        if (this.swdjdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swdjdesc
          this.query8.moduleId = '12'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 13) {
        if (this.swxkdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swxkdesc
          this.query8.moduleId = '13'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
    },
    // 修改留言
    modMsg(e) {
      if (e === 8) {
        if (this.qsggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.qsggdesc
          this.query8.moduleId = '8'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 9) {
        if (this.sscfdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sscfdesc
          this.query8.moduleId = '9'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 10) {
        if (this.swfzcdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swfzcdesc
          this.query8.moduleId = '10'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 11) {
        if (this.nsxydjdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.nsxydjdesc
          this.query8.moduleId = '11'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 12) {
        if (this.swdjdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swdjdesc
          this.query8.moduleId = '12'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 13) {
        if (this.swxkdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.swxkdesc
          this.query8.moduleId = '13'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
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

