<template>
  <div>
    <div style="width: 99%;padding:0px 0.5% ">
      <el-form :inline="true" :model="form" class="user-search">
        <div>
          <el-form-item>
            <el-input v-model="form.searchText" placeholder="根据企业名称，经营范围，业务商品等进行搜索" style="width: 450px">
              <el-button
                slot="append"
                icon="el-icon-search"
                style="background-color:#3b70f6;color: #FFFFFF;"
                @click="submit"
              >搜索
              </el-button>
            </el-input>
            <el-button style="background-color:#3b70f6;color: #FFFFFF;" @click="daoChu">优企导出</el-button>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="企配分搜索">
            <span slot="label">
              企配分搜索
              <el-tooltip placement="top">
                <div slot="content">
                  企配分是指以优企特征为基准参考，信动客动通过自有算法计算全国企业经营规模、国标行业、成立年限、经营地域四个维度与优企特征基准参考的差异度，按照差异度越小企配分越高的原则，生成了较高匹配度的高价值企业群体。
                </div>
                <i class="el-icon-warning" style="color: orange" />
              </el-tooltip>
            </span>
            <el-select
              v-model="search_cond.qpf"
              size="small"
              placeholder="请选择"
              filterable
              allow-create
              reserve-keyword
              multiple
              clearable
              @change="getData(1)"
            >
              <el-option v-for="(v,k) in score_range" :key="k" :value="k" :label="v" />
            </el-select>
          </el-form-item>
          <el-form-item label="经营规模">
            <el-select
              v-model="search_cond.jygm"
              placeholder="请选择"
              size="small"
              multiple
              clearable
              @change="getData(1)"
            >
              <el-option v-for="(v,k) in ying_shou_range" :key="k" :value="k" :label="v" />
            </el-select>
          </el-form-item>
          <el-form-item label="国标行业">
            <el-cascader
              ref="nicid_ref"
              class="search-table-input"
              :options="nicid"
              :props="{multiple: true}"
              :show-all-levels="false"
              :filterable="true"
              collapse-tags
              clearable
              @change="getCheckedNodesNicid"
            />
          </el-form-item>
          <el-form-item label="成立年限">
            <el-select
              v-model="search_cond.clnx"
              size="small"
              multiple
              clearable
              @change="getData(1)"
            >
              <el-option v-for="(v,k) in establish_yeasr_range" :key="k" :value="k" :label="v" />
            </el-select>
          </el-form-item>
          <el-form-item label="经营地域">
            <el-cascader
              ref="address_ref"
              class="search-table-input"
              :options="address"
              :props="{multiple: true}"
              :show-all-levels="false"
              :filterable="true"
              collapse-tags
              clearable
              @change="getCheckedNodesRegionid"
              @close="closeAddressCheckedNodes"
            />
          </el-form-item>
        </div>
      </el-form>
      <div>
        <el-table
          v-loading="loading"
          :data="listData"
          highlight-current-row
          border
          element-loading-text="拼命加载中"
          style="width: 100%;"
          @selection-change="selectChange"
        >
          <el-table-column align="center" type="selection" width="60" label="全选" />
          <el-table-column label="内容" align="center">
            <template slot-scope="scope">
              <div style="width: 1200px;text-align: left;min-height: 30px;max-height: 300px ">
                <div style="float: left;width: 110px;height: 90px" v-html="scope.row.logo" />
                <div style="float: left;width: 1000px;height: 100%;">
                  <div style="width: 100%; height: 30px ;  margin-bottom: 10px;">
                    <div style="float:left;font-size: 22px;font-weight: bold;padding: 6px 30px 0px 0px;">{{ scope.row.entName }}</div>
                    <div style="float:left;background-color: #f68495;color: white;padding: 3px 10px;border-radius: 5px;font-size: 12px;font-weight: bold;">企配分{{ scope.row.score }}</div>
                  </div>
                  <div>
                    <div>
                      <div style="float:left;width: 300px">营收规模：{{ scope.row.ying_shou_gui_mo_cname }}</div>
                      <div style="float:left;width: 300px">团队人数：{{ scope.row.tuan_dui_ren_shu }}人</div>
                      <div style="float:left;width: 300px">成立年限：{{ scope.row.found_years_nums }}年</div>
                    </div>
                    <div>
                      <div style="float:left;width: 500px">地域：{{ scope.row.DOM }}</div>
                      <!--                      <div style="float:left;width: 300px">荣誉资质：{{ scope.row.ent_name }}</div>-->
                    </div>
                  </div>
                </div>
              </div>

            </template>
          </el-table-column>
        </el-table>
        <Pagination :child-msg="pageparm" @callFather="callFather" />
      </div>
    </div>
  </div>
</template>

<script>
// import Pagination from '../../../components/Pagination'
// import Pagination from '../../../../components/Pagination'
// import {
  // exportRecommendedCompanys,
  // getRecommendCompanys,
  // getRecommendSearchOption,
  // recommendedCompanysExportLists
// } from '../../../../api/userMG'
// import { nicid } from '../../../data/nicid'
// import { address } from '../../../data/address'
import {Pagination} from "element-ui";
import {address} from "@/data/address";
import {nicid} from "@/data/nicid";

export default {
  name: 'KeDong',
  components: {
    Pagination
  },
  data() {
    return {
      ying_shou_range: '',
      score_range: '',
      establish_yeasr_range: '',
      nicid: nicid,
      address: address,
      form: {
        clnx: '',
        jygm: '',
        qpf: '',
        basic_nicid: '',
        basic_regionid: '',
        phone: localStorage.getItem('phone'),
        page: 1,
        pageSize: 10
      },
      listData: [],
      selectdata: '',
      loading: false,
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
      search_cond: {
        basic_nicid: '',
        basic_regionid: '',
        clnx: '',
        jygm: '',
        qpf: ''
      }
    }
  },
  created() {
    this.getData()
    this.getOption()
  },
  methods: {
    getOption() {
      // getRecommendSearchOption({ phone: localStorage.getItem('phone') }).then(res => {
      //   if (res.data.code == 200) {
      //     const data = res.data.result
      //     this.ying_shou_range = data.ying_shou_range
      //     this.score_range = data.score_range
      //     this.establish_yeasr_range = data.establish_yeasr_range
      //   }
      // })
    },
    submit() {
      this.getData(1)
    },
    getData(page) {
      this.form.page = page
      this.form.qpf = JSON.stringify(this.search_cond.qpf)
      this.form.jygm = JSON.stringify(this.search_cond.jygm)
      this.form.clnx = JSON.stringify(this.search_cond.clnx)
      this.form.basic_nicid = JSON.stringify(this.search_cond.basic_nicid)
      this.form.basic_regionid = JSON.stringify(this.search_cond.basic_regionid)
      // getRecommendCompanys(this.form).then(res => {
      //   if (res.data.code == 200) {
      //     const data = res.data.result
      //     data.forEach((v, k) => {
      //       const short_name = v.short_name
      //       // console.log(short_name)
      //       // console.log(short_name.length)
      //       var img = "<div class='zishu4a' v-show=''>" + short_name + '</div>'
      //       if (short_name.length == 2) {
      //         img = "<div class='zishu2a'>" + short_name + '</div>'
      //       }
      //       if (short_name.length == 4) {
      //         img = "<div class='zishu4a'>" + short_name + '</div>'
      //       }
      //       if (short_name.length == 3) {
      //         img = "<div class='zishu3a'>" + short_name + '</div>'
      //       }
      //       if (short_name.length == 5) {
      //         img = "<div class='zishu5a'>" + short_name + '</div>'
      //       }
      //       if (short_name.length == 6) {
      //         img = "<div class='zishu6a'>" + short_name + '</div>'
      //       }
      //       if (short_name.length == 7) {
      //         img = "<div class='zishu7a'>" + short_name + '</div>'
      //       }
      //       const IMG = new Image()
      //       IMG.src = 'https://img-mrxd.oss-cn-beijing.aliyuncs.com/ent-log-hd-saic-202208' + v.logo
      //       IMG.onload = function() {
      //         data[k].logo = '<img style="width:90px;height:90px" src="' + 'https://img-mrxd.oss-cn-beijing.aliyuncs.com/ent-log-hd-saic-202208' + v.logo + '"/>'
      //       }
      //
      //       IMG.onerror = function() {
      //         data[k].logo = img
      //       }
      //     })
      //
      //     this.listData = data
      //     this.pageparm.currentPage = this.form.page
      //     this.pageparm.pageSize = this.form.pageSize
      //     this.pageparm.total = res.data.paging.total
      //     // console.log(this.listData)
      //   }
      // })
    },
    selectChange(val) {
      this.selectdata = val
    },
    daoChu() {
      this.$confirm('最多可以导出100家企业，更多近似优企查看权限请联系客服，客服电话：4000687266', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '导出'
      }).then(() => {
        // 导出代码
        const parms = {
          ids: ''
        }

        const len = this.selectdata
        const ids = []
        if (len != 0) {
          for (let i = 0; i < len.length; i++) {
            ids.push(len[i].id)
          }
          parms.ids = ids.join(',')
          parms.phone = localStorage.getItem('phone')
          // exportRecommendedCompanys(parms).then(res => {
          //   if (res.data.code != 200) {
          //     this.$message.error(res.data.msg)
          //   } else {
          //     this.doDownload(res.data.result)
          //   }
          // })
        } else {
          // exportRecommendedCompanys(this.form).then(res => {
          //   if (res.data.code != 200) {
          //     this.$message.error(res.data.msg)
          //   } else {
          //     this.doDownload(res.data.result)
          //   }
          // })
        }
      }).catch((err) => {
        this.$message({
          type: 'info',
          message: err
        })
      })
    },
    doDownload(file_path) {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.style.height = '0'
      iframe.src = 'https://api.meirixindong.com' + file_path
      console.log(iframe.src)
      document.body.appendChild(iframe) //
      setTimeout(() => {
        iframe.remove()
      }, 5 * 60 * 1000)
    },
    callFather(parm) {
      this.form.page = parm.currentPage
      this.form.pageSize = parm.pageSize
      this.getData(this.form.page)
    },
    getCheckedNodesNicid(val) {
      this.search_cond.basic_nicid = ''
      if (val.length > 0) {
        let nicid = this.$refs.nicid_ref.getCheckedNodes(true)
        if (nicid[0]) {
          let nicid_str = ''
          nicid.forEach(item => {
            nicid_str += item.value + ','
          })
          nicid = nicid_str.trim()
        } else {
          nicid = ''
        }
        this.search_cond.basic_nicid = nicid
        this.getData(1)
      }
    },
    getCheckedNodesRegionid(val) {
      this.search_cond.basic_regionid = ''
      if (val.length > 0) {
        let address = this.$refs.address_ref.getCheckedNodes(true)
        if (address[0]) {
          let address_str = ''
          address.forEach(item => {
            address_str += item.value + ','
          })
          address = address_str.trim()
        } else {
          address = ''
        }
        this.search_cond.basic_regionid = address
        this.getData(1)
      }
    },
    closeAddressCheckedNodes() {
      this.search_cond.basic_regionid = ''
    }

  }
}
</script>

<style >
.zishu1a, .zishu2a {
  width: 90px;
  height: 90px;
  line-height: 56px;
  text-align: center;
  padding: 43px 0px;
  background-color: #faab72;
  border-radius: 10px;
  font-size: 55px;
  letter-spacing: 7px;
}

.zishu4a {
  background-color: #8fc1e4;
  width: 90px;
  height: 90px;
  font-size: 34px;
  letter-spacing: 2px;
  line-height: 34px;
  text-align: center;
  padding: 10px 7px;
  border-radius: 10px;
}

.zishu3a {
  background-color: #9d9def;
  width: 90px;
  height: 90px;
  font-size: 34px;
  letter-spacing: 2px;
  line-height: 34px;
  text-align: center;
  padding: 10px 7px;
  border-radius: 10px;
}

.zishu5a {
  width: 90px;
  height: 90px;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 38px;
  text-align: center;
  padding-top: 10px;
  background-color: #13af08;
  border-radius: 10px;
}

.zishu6a {
  width: 90px;
  height: 90px;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 38px;
  text-align: center;
  padding-top: 10px;
  background-color: #40eecd;
  border-radius: 10px;
}

.zishu7a, .zishu8a {
  font-size: 19px;
  width: 90px;
  height: 90px;
  letter-spacing: 2px;
  line-height: 35px;
  text-align: center;
  padding-top: 10px;
  background-color: #8fc1e4;
  border-radius: 10px;
}

.zishu9a, .zishu10a {
  width: 90px;
  height: 90px;
  font-size: 21px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #8fc1e4;
  border-radius: 10px;
}
</style>
