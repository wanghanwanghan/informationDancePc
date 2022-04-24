<template>
  <div>
    <section id="tab-nsxydj" class="et-slide" style="min-height:100px;">
      <h3 style="margin-left:20px;">纳税信用等级（{{ totalSatpartyXin }}）</h3>
      <div class="box2">
        <!-- 纳税信用等级 -->
        <div class="cont" style="overflow: scroll;height: 550px; ">
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
                <el-button type="primary" size="mini" @click="handleDetail(scope.row.entryId)">查看详情</el-button>
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
    <el-dialog
      :title="detail.title"
      :visible.sync="satpartyXinDialogVisible"
      z-index="100"
      width="50%">
      <div class="box">
        <table>
          <tr>
            <td style="width: 100px">公司名称：</td>
            <td>{{ detail.pname }}}</td>
          </tr>
          <tr>
            <td>评级机构：</td>
            <td>{{ detail.authority }}</td>
          </tr>
          <tr>
            <td>等级：</td>
            <td>{{ detail.eventResult }}</td>
          </tr>
          <tr>
            <td>纳税人ID：</td>
            <td>{{ detail.taxpayerId }}</td>
          </tr>
          <tr>
            <td>内容：</td>
            <td>{{ detail.body }}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="satpartyXinDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getSatpartyXin, getSatpartyXinDetail} from '@/api/Taxation'

export default {
  name: 'SheShuiInfo',
  data() {
    return {
      satpartyXinDialogVisible: false,
      title: '',
      SatpartyXin: [],
      totalSatpartyXin: 0,
      nsxydjdesc: '',
      entname: '',
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      query1: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: ''
      },
      detail: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    // 纳税信用等级
    getSatpartyXin(this.query).then(res => {
      if (res.data.result.length > 0) {
        res.data.result.forEach(item => {
          item.entryId = item.entryId.split('@')[0]
        })
        this.SatpartyXin = res.data.result
        this.totalSatpartyXin = res.data.paging.total
      } else {
        this.SatpartyXin = []
        this.totalSatpartyXin = 0
      }
    })
  },
  methods: {
    handleChangeSatpartyXin(val) {
      this.SatpartyXin = []
      this.query.page = val
      getSatpartyXin(this.query).then(res => {
        this.SatpartyXin = res.data.result
      })
    },
    handleDetail(id) {
      this.query1.entName = localStorage.getItem('entName')
      this.query1.id = id
      this.query1.phone = localStorage.getItem('phone')
      getSatpartyXinDetail(this.query1).then(res => {
        //   console.log(res)
        this.satpartyXinDialogVisible = true
        this.detail = res.data.result[0]
      })
    }
  }
}
</script>

<style scoped>

</style>
