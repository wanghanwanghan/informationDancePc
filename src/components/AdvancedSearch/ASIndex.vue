<template>
  <div class="bg" style="background: #F5F8FA;padding-bottom: 20px">
    <img src="../../assets/souke.png" style="width: 100%;height: 430px;position: absolute;z-index: 1">
    <div style="line-height: 200px;width: 1200px;margin: auto;position: relative;height: 200px;z-index: 10;color: white;text-align: center;font-size: 40px;font-family: PingFang;font-weight: bold;">智能行业获客 技术提供方</div>
    <div style="width: 1200px;margin: auto;position: relative;z-index: 10;">
      <div class="search-wrapper">
        <el-input id="search_input" v-model="search_val" placeholder="请根据企业名称，经营范围，业务商品等关键词内容搜索" class="input-with-select">
          <el-select slot="prepend" v-model="search_type">
            <el-option label="智能搜索" value="1" />
          </el-select>
          <el-button slot="append" icon="el-icon-search" style="color: #FFFFFF;" @click="submit">立即搜索</el-button>
        </el-input>
        <el-button style="width:13%;background-color: #10C334; margin-left: 1%; margin-top: 10px;  border-color: #409EFF;color: #FFF;height: 60px;font-size: 18px" @click="saveParamDialog">保存筛选条件</el-button>
      </div>
<!--      <div style="margin-top: 20px;width: 100%;height: 200px;background-color: #FFFFFF;border: 1px solid #DFDFDF;border-radius: 5px;">-->
<!--        <div-->
<!--          style="width: 1140px;margin: 15px 30px;height: 41px;font-size: 24px;border-bottom: 1px solid #dcdfe6;display: inline-flex;"-->
<!--        >-->
<!--          热门应用-->
<!--        </div>-->
<!--        <div style="width: 100%;height: 76px;    margin-top: 20px;">-->
<!--          <div style="width: 33%;float: left">-->
<!--            <img-->
<!--              src="../../assets/1.jpg"-->
<!--              style="width: 170px;height: 75px;margin: 0px 110px;"-->
<!--              @click="searchQiyeVisible=true"-->
<!--            >-->
<!--          </div>-->
<!--          <div style="width: 33%;float: left">-->
<!--            <img src="../../assets/2.jpg" style="width: 170px;height: 75px;margin: 0px 110px;">-->
<!--          </div>-->
<!--          <div style="width: 33%;float: right">-->
<!--            <img src="../../assets/3.jpg" style="width: 170px;height: 75px;margin: 0px 110px;">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="cond-wrapper" style="background-color: white;margin-top: 10px;border-radius: 5px;border: 1px solid #DFDFDF;">
        <div v-bind="optionCheckBox" class="cond-up" @change="handleChange_option">
          <Cond
            v-for="(item,index) of list"
            :id="item.id"
            :key="index"
            :type="item.type"
            :title="item.title"
            :desc="item.desc"
            :list="item.list"
            @set-value="setValue"
          />
        </div>
        <div v-show="show.cond_down" class="cond-down">
          <table class="search-table" cellspacing="15" style="width: 100%;padding-left: 20px;">
            <tr class="search-table-tr">
              <td class="search-table-td bg-color">国标行业</td>
              <td class="search-table-td">
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
              </td>
              <td class="search-table-td bg-color">战略新兴产业</td>
              <td class="search-table-td">
                <el-cascader
                  ref="jlxxcy_ref"
                  class="search-table-input"
                  :options="jlxxcy"
                  :props="{multiple: true}"
                  :show-all-levels="false"
                  :filterable="true"
                  collapse-tags
                  clearable
                  @change="getCheckedNodesJlxxcyid"
                />
              </td>
              <td class="search-table-td bg-color">数字经济及其核心产业</td>
              <td class="search-table-td">
                <el-cascader
                  ref="szjj_ref"
                  class="search-table-input"
                  :options="szjj"
                  :props="{multiple: true}"
                  :show-all-levels="false"
                  :filterable="true"
                  collapse-tags
                  clearable
                  @change="getCheckedNodesSzjjid"
                />
              </td>
            </tr>
            <tr>
              <td class="search-table-td bg-color">企业所属地区</td>
              <td class="search-table-td">
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
              </td>
              <td class="search-table-td bg-color">企业类型</td>
              <td class="search-table-td">
                <el-cascader
                  ref="qylx_ref"
                  class="search-table-input"
                  :options="qylx"
                  :props="{multiple: true}"
                  :show-all-levels="false"
                  :filterable="true"
                  collapse-tags
                  clearable
                  @change="getCheckedNodesQylxid"
                  @close="closeQylxCheckedNodes"
                />
              </td>
              <td class="search-table-td bg-color">经营范围</td>
              <td class="search-table-td">
                <el-input
                  v-model="search_cond.basic_opscope"
                  class="search-table-input"
                  placeholder="支持模糊搜索"
                  clearable
                />
              </td>
            </tr>
          </table>
        </div>
        <el-button id="gengduo" style="background-color: #006EFF;margin: 0px 25px" type="primary" @click="contrl_cond_down_show">更多筛选项目</el-button>
        <div class="cond-choice-wrapper">
          <div class="cond-word">已选({{ tags.length }})</div>
          <div class="cond-cond">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              v-model="tagItem"
              :type="tag.type"
              closable
              @close="closeOption(tag.type)"
            >
              {{ tag.name }}

            </el-tag>
          </div>
        </div>
      </div>
      <div style="width: 100%;text-align: center;margin: 30px 0px;">
        <div class="search-res-count">为您找到 {{ paginate.total }}+ 企业</div>
        <div class="pagination-wrapper">
          <el-pagination
            background
            layout=" prev, pager, next"
            :current-page="tablePage.pageNum"
            :total="paginate.total"
            :page-size="20"
            @current-change="BasePageChange"
          />
        </div>
      </div>
      <div class="search-res-wrapper" style="border: 1px solid #EEEEEE;border-radius: 5px;background-color: #FFFFFF;">

        <el-divider content-position="center">查询结果</el-divider>
        <div v-for="(item,index) in data" :key="index" class="slide-div" style="padding: 30px 15px;border-bottom: 1px solid #efeeee">
          <div class="search-res-info">
            <div class="logo-wrapper" v-html="item._source.logo" />

            <div class="content-wrapper">
              <div class="ent-info-wrapper">
                <div class="info-wrapper">
                  <div>
                    <div class="ent-name" @click="getDrawer(item._source.ENTNAME,item._source.companyid)" v-html="item._source.showName">{{ item._source.showName }}</div>
                    <div class="action-wrapper" style="float: right">
                      <el-badge class="item">
                        <el-button size="small" type="primary" style="color: #006EFF;border: 1px solid  #006EFF;background-color: #FFFFFF" @click="doSaveOpportunity(item._source.companyid,item._source.ENTNAME)">客户触达</el-button>
                        <el-button v-show="item._source.wu_liu_xin_xi==1" size="small" type="primary" style="color: #10C334 ;border: 1px solid  #10C334 ;background-color: #FFFFFF" @click="uploadVin(item._source.companyid,item._source.ENTNAME)">上传VIN</el-button>
                        <el-button size="small" type="primary" style="color: #f3881c ;border: 1px solid  #f3881c ;background-color: #FFFFFF" @click="zp(item._source.companyid,item._source.ENTNAME)">企业族谱</el-button>
                      </el-badge>
                    </div>
                  </div>
                  <div v-show="item._source.tags.length>0" class="ent-label">
                    <el-tag v-for="(v,k) of item._source.tags" v-show="v!='~'" :type="tagStyleMap[k]" size="mini">{{ v }}</el-tag>
                  </div>
                  <div class="ent-other-wrapper">
                    <el-row :gutter="10">
                      <el-col :span="5">
                        <div class="row-h">企业法人:<span style="color: #128BED">{{ item._source.NAME }}</span></div>
                      </el-col>
                      <el-col :span="4">
                        <div class="row-h">成立日期:{{ item._source.ESDATE }}</div>
                      </el-col>
                      <el-col :span="4">
                        <div class="row-h">经营状态:{{ item._source.ENTSTATUS_CNAME.name }}</div>
                      </el-col>
                      <el-col :span="3">
                        <div class="row-h">注册资本:{{ item._source.REGCAP }}万</div>
                      </el-col>
                      <el-col v-show="item._source.tuan_dui_ren_shu != '--'" :span="3">
                        <div class="row-h">企业规模:{{ item._source.tuan_dui_ren_shu }}人</div>
                      </el-col>
                      <el-col v-show="item._source.web != '--'" :span="7">
                        <div class="row-h">企业网址:{{ item._source.web }}</div>
                      </el-col>
                      <el-col v-show="item._source.LAST_EMAIL != '--'" :span="7">
                        <div class="row-h">email:<span style="color: #128BED">{{ item._source.LAST_EMAIL }}</span></div>
                      </el-col>
                      <el-col :span="8">
                        <div class="row-h">统一社会信用代码:{{ item._source.UNISCID }}</div>
                      </el-col>
                      <el-col :span="24">
                        <div class="row-h">注册地址:{{ item._source.DOM }}</div>
                      </el-col>
                      <el-col v-show="item._source.LAST_DOM != '--'" :span="24">
                        <div class="row-h">经营地址:{{ item._source.LAST_DOM }}</div>
                      </el-col>
                      <el-col v-show="item._source.nic_full_name != '--'" :span="24">
                        <div class="row-h">国标行业:{{ item._source.nic_full_name }}</div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
              <div v-show="item._source.gong_si_jian_jie!='--'" class="ent-desc-wrapper" style="margin-bottom: 10px">
                <div>公司简介：{{ item._source.gong_si_jian_jie.length>3?item._source.gong_si_jian_jie.slice(0,65):'' }}...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-wrapper" style="width: 100%;text-align: center;margin: 30px 0px;">
        <el-pagination
          background
          layout=" prev, pager, next"
          :current-page="tablePage.pageNum"
          :total="paginate.total"
          :page-size="20"
          @current-change="BasePageChange"
        />
      </div>
    </div>
    <Drawer
      :entname="drawer_data.entname"
      :xd_id="drawer_data.xd_id"
      :drawer="show.show_drawer"
      @set-drawer-type="setDrawerType"
    />
    <el-dialog
      title="请输入记录名称"
      :visible="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <input id="saveParamName" class="el-input__inner">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveParam">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="商机"
      :visible="dialogEntLianXi"
      width="50%"
      :before-close="handleClose"
    >
      <el-table :data="EntLianXiList" border style="width: 100%">
        <el-table-column
          label="区号"
          prop="quhao"
        />
        <el-table-column
          label="联系类型"
          prop="lianxitype"
        />
        <el-table-column
          label="电话/邮箱"
          prop="lianxi"
        />
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="totalEntLianXi"
          @current-change="handleChangeEntLianXi"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogEntLianXi = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog
      width="600px"
      title="VIN授权"
      :visible.sync="vinQouQuanType"
      append-to-body
    >
      <div class="reportBox" style="padding: 0px 100px;text-decoration:underline">

        <el-upload
          class="upload-demo upload-ext"
          drag
          action="https://api.meirixindong.com/api/v1/xd/addCarInsuranceInfo"
          :data="{phone,token,entId:this.vinData.entId}"
          :headers="myHeaders"
          :show-file-list="false"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
          multiple
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div slot="tip" class="el-upload__tip" style="font-size: 20px">
            <a href="https://api.meirixindong.com/Static/vin_template.xlsx" style="color: #0b09f3;" download="模版文件.xlsx">模版下载</a>
          </div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="vinQouQuanType = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="企业族谱"
      :visible.sync="zupu.drawer"
      width="80%"
      height="60%"
      :before-close="handleClose"
    >
      <div id="graph" style="width: 100%;height: 100%;" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="zupu.drawer = false">取 消</el-button>
        <el-button type="primary" @click="zupu.drawer = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :append-to-body="true" title="" :visible="zupuVisible" width="90%" :before-close="handleClose">
      <div id="myChart" ref="myChart" :style="{width: '100%', height: '800px'}" />
    </el-dialog>
    <el-dialog title="" :visible="searchQiyeVisible" width="800px" height="auto" :before-close="handleClose">
      <div style="margin: auto;width: 700px">
        <div style="color: black;font-weight: bold;font-size: 26px">添加探寻合作的企业名称</div>
        <div style="color: darkred;margin-bottom: 20px">提示：为提高企业特征分析的准确性，可尽量多添加</div>
        <div>
          <div id="youqi">
            <span style="color: black;font-size: 18px;font-weight: bold;">企业名称：</span>
            <!--              <el-select  v-model="form.groupid" id="selects" v-defaultSelect="[form.groupid,options,'value','disabled',true]"  multiple filterable allow-create default-first-option placeholder="请选择" :disabled="edits">-->

            <el-select
              style="width: 360px"
              id="selectInput"
              v-model="qiye"
              filterable
              remote
              reserve-keyword
              placeholder="请输入企业名称或关键词，如每日信动"
              multiple
              size="100px"
              :remote-method="getQiyeData"
              @change = "updateData"

              v-defaultSelect="[qiye]"
            >
              <el-option  v-for="v in qiyeData" :value="v" :key="v" :label="v" :disabled="qiye.includes(v)">

              </el-option>

            </el-select>
            <el-button style="background-color: #0579ea;color: #FFFFFF"  @click="fenXi">分析优企特征</el-button>
            <el-button style="background-color: #f59b40;color: #FFFFFF" @click="uploadFlag=true">批量上传</el-button>
          </div>
        </div>
        <div>
          <div style="padding:0px 20px;margin: 20px 0px">
            <el-checkbox v-model="checkAll" @change="handleCheckAllChange" v-show="qiye.length>0"></el-checkbox>
            <span style="color: #0579ea"  v-show="qiye.length>0" >批量删除已添加的企业</span>
            <el-button v-show="qiye.length>0" @click="deleteAll" style="color:black;background-color: rgba(234,234,234,0.96);padding: 5px 13px;" size="small">删除</el-button>
          </div>
          <div style="min-height: 20px;max-height: 500px;overflow-y: auto">
            <el-checkbox-group v-model="checkedCities">
              <div v-for="(v,k) in qiye" style="width: 300px;float: left;margin: 10px 20px">
                <el-checkbox :key="v" :label="v" style="margin: 0px 5px 4px 0px" :title="v">{{ v.length>17?v.slice(0, 17)+'..':v }}</el-checkbox>
                <img src="../../assets/close.png" style="width: 15px;height: 15px;float: right"
                     @click="deleteOne(v,k)"/>
              </div>
            </el-checkbox-group>
          </div>
          <div style="padding:0px 20px;color: #0b09f3;margin: 20px 0px;font-size: 16px">
            注：最少添加5家企业，企业比较多时可选用【批量上传】
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="uploadFlag" width="520px" center @click="uploadFlag=false">
      <el-form style="padding: 0px 50px;">
        <el-form-item style="margin-bottom: 0px">
          <el-upload
            ref="upload"
            style="padding:10px"
            class="upload-demo"
            drag
            action="https://api.meirixindong.com/admin/v2/souke/addCompanyToAnalyzeListsByFile"
            :data="{phone}"
            :headers="myHeaders"
            :on-success="uploadSuccess"
            :show-file-list="true"
            :multiple="false"
            :auto-upload="false"
            :limit="1"
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">
              <div>将文件拖到此处，或<em>点击上传</em></div>
              <div style="color: #8c939d;font-size: 12px">支持格式：.rar .zip .doc .docx .pdf,单个文件不能超过20MB</div>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item style="padding:0px 40px;margin-top: 25px;">
          <el-button style="padding: 15px 35px " type="primary" @click="isSubmit">确定</el-button>
          <el-button style="margin-right: 75px;padding:15px 35px " @click="uploadFlag=false">取消</el-button>
        </el-form-item>
        <el-form-item>
          <span style="color: #0b09f3">备注：上传的内容仅包括企业名称上下排列的表格即可</span>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Cond from '@/components/AdvancedSearch/components/Cond'
import Drawer from '@/components/AdvancedSearch/components/Drawer'
import { address } from '@/data/address'
import { sonum } from '@/data/sonum'
import { nicid } from '@/data/nicid'
import { jlxxcy } from '@/data/jlxxcy'
import { szjj } from '@/data/szjj'
import { qylx } from '@/data/qylx'
import {
  advancedSearch,
  getEntLianXi, getInvestor,
  getSearchOption,
  saveOpportunity,
  saveSearchHistroy
} from '@/api/EnterpriseBackground'
// import d3 from "d3";
// import d3 from 'd3'
import * as d3 from 'd3/d3'
export default {
  name: 'ASIndex',
  components: { Drawer, Cond },
  props: {},
  data() {
    return {
      zupu: {
        drawer: false,
        company_id: 0,
        obj: ''
      },
      uploadFlag: false,
      qiyeData: [],
      qiye: [],
      checkedCities: [],
      checkAll: false,
      isIndeterminate: false,
      search_Qiye: '',
      searchQiyeVisible: false,
      dialogVisible: false,
      dialogEntLianXi: false,
      vinQouQuanType: false,
      EntLianXiList: [],
      EntLianXiEtnName: '',
      EntLianXiEtnId: '',
      totalEntLianXi: 0,
      CheckedNodesKey: '',
      name: '',
      loading: true,
      data: [],
      list: [],
      vinData: {
        entId: '',
        entName: ''
      },
      tagStyleMap: ['', 'success', 'warning', 'danger', '', 'success', 'warning', '', 'success', 'warning'],
      drawer_data: {
        entname: '',
        xd_id: 0
      },
      show: {
        cond_down: false,
        show_drawer: false
      },
      phone: '',
      token: '',
      myHeaders: { Authorization: localStorage.getItem('token') },
      search_type: '1',
      search_val: '',
      value: [],
      tags: [],
      // tags: [
      //   { name: '标签一', type: '' },
      //   { name: '标签二', type: 'success' },
      //   { name: '标签三', type: 'info' },
      //   { name: '标签四', type: 'warning' },
      //   { name: '标签五', type: 'danger' }
      // ],
      optionCheckBox: [],
      tagItem: [],
      address: address,
      szjj: szjj,
      sonum: sonum,
      nicid: nicid,
      jlxxcy: jlxxcy,
      qylx: qylx,
      tablePage: {
        pageNum: 1, // 第几页
        pageSize: 10, // 每页多少条
        total: 0 // 总记录数
      },
      search_cond: {
        page: 1,
        phone: localStorage.getItem('phone'),
        basic_entname: '',
        basic_person_name: '',
        basic_dom: '',
        basic_regcap: '',
        basic_nicid: '',
        basic_esdate: '',
        basic_enttype: '',
        basic_uniscid: '',
        basic_ygrs: '',
        basic_regionid: '',
        basic_jlxxcyid: '',
        basic_szjjid: '',
        jingying_vc_round: '',
        basic_opscope: '',
        basic_status: '',
        basic_qylxid: ''
      },
      query: {
        phone: ''
      },
      searchQuery: {
        page: 1,
        phone: '',
        searchText: '',
        searchOption: '',
        basic_nicid: '',
        basic_opscope: '',
        basic_regionid: '',
        basic_szjjid: '',
        basic_jlxxcyid: '',
        OPSCOPE: ''
      },
      paginate: {
        total: 0
      },
      color: [],
      legendData: [],
      categories: [],
      zupuData: [],
      zupuLinks: [],
      zupuDataList: [],
      zupuVisible: false
    }
  },
  computed: {},
  watch: {
    zupuData: 'updatezupu'
  },
  created() {
    this.phone = localStorage.getItem('phone')
    this.token = localStorage.getItem('token')
  },
  mounted() {
    this.submitForm(1)
    // this.list = list
    this.query.phone = localStorage.getItem('phone')
    getSearchOption(this.query).then(res => {
      const list = []
      if (res.data.code === 200) {
        res.data.result.forEach((value) => {
          var temp = []
          for (var i in value.data) {
            temp.push({
              id: i,
              desc: value.data[i].detail,
              name: value.data[i].cname
            })
          }
          // value.data.forEach((val, key) => {
          //
          // })
          list.push({
            id: value.pid,
            name: value.desc,
            title: value.desc,
            type: '',
            list: temp
          })
        })
        this.list = list
      }
    })
    var searchDiv = document.getElementById('search_input').nextElementSibling
    searchDiv.style.background = 'linear-gradient(90deg, #006EFF, #4BACFF)'
    searchDiv.style.paddingLeft = '40px'
    searchDiv.style.paddingRight = '40px'
    searchDiv.style.border = '0px'
    searchDiv.getElementsByClassName('el-icon-search')[0].style.color = 'white'
  },
  methods: {
    deleteOne(v, k) {
      this.$delete(this.qiye, k)
    },
    isSubmit() {
      this.$refs.upload.submit()
    },
    getQiyeData(val) {
      // serachCompanyByName({phone:localStorage.getItem('phone'),searchText:val}).then(res=>{
      //   if(res.data.code == 200 ){
      //     this.qiyeData = res.data.result
      //   }
      // })
      document.getElementById('selectInput').value = val
    },
    handleCheckAllChange(val) {
      this.checkedCities = []
      if (val) {
        this.checkedCities = this.qiye
      }
    },
    fenXi(){
      // addCompanyToAnalyzeLists({phone:localStorage.getItem('phone'),ent_name:this.qiye['0']}).then(res=>{
      //   if(res.data.code == 200){
      //     console.log(res.data.result)
      //   }
      // })
    },
    deleteAll() {
      this.checkedCities.forEach((vv, kk) => {
        this.qiye.forEach((v1, k1) => {
          if (v1 == vv) {
            // console.log(v1)
            delete this.qiye[k1]
            delete this.checkedCities[kk]
          }
        })
      })
      this.qiye = Array.from(new Set(this.qiye))
      this.qiye.forEach((v, k) => {
        if (v == undefined) {
          this.$delete(this.qiye, k)
        }
      })
      this.checkedCities = []
      this.checkAll = false
    },
    updatezupu() {
      this.drawLine()
    },
    zp(company_id, entName) {
      this.zupuVisible = true
      this.categories = []
      this.zupuData = []
      this.zupuLinks = []
      this.zupuDataList = []
      this.getData(company_id, entName)
    },

    getData(company_id, entName) {
      getInvestor({ phone: localStorage.getItem('phone'), company_id: company_id }).then(res => {
        this.categories.push({ name: entName })
        this.zupuData.push({ name: entName, category: entName, investor_id: 0, symbolSize: 120 })
        this.zupuDataList[entName] = entName
        res.data.result.forEach((item) => {
          this.zupuDataList[item.INV] = item.INV
          this.zupuData.push({
            name: item.INV,
            category: entName,
            investor_id: item.companyid_inv
          })
          this.zupuLinks.push({
            source: entName,
            target: item.INV
          })
        })
        this.drawLine()
      })
    },

    drawLine() {
      // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#f6f5f3',
        color: [
          '#02c9c9',
          '#bccf3d',
          '#ffc300',
          '#9d9def',
          '#d99090',
          '#8be590',
          '#a69768'],
        title: {
          text: '族谱',
          textStyle: {
            color: '#368cbf',
            fontWeight: 700,
            fontSize: 30,
            left: 'center'
          }
        }, // 标题及标题颜色、尺寸、位置
        legend: [ // 增加图示标签，我们可以点击图示隐藏相关节点
          {
            x: 'right',
            show: true,
            data: []
          }],
        series: [
          {
            type: 'graph', // 类型设置为关系图
            legendHoverLink: true, // 可以点击图例来隐藏一个组
            layout: 'force',
            categories: this.categories,
            force: {
              repulsion: [1000, 1900], // 每个节点之间的斥力因子，越大离的越远
              layoutAnimation: true,
              friction: 0.3, // 刷新时节点的移动速度，越大越快，0 - 1 之间
              edgeLength: [100, 330] // 两节点之间的距离
            },

            label: {
              show: true, // 节点圆盘上的文字
              fontStyle: 'normal', // 文字风格，normal，italic，oblique 三种可选
              fontSize: 12,
              color: '#000000',
              width: 80,
              overflow: 'break'
            },

            symbolSize: 100, // 全局节点尺寸
            itemStyle: { // 给节点加上阴影，显着立体
              shadowColor: '#C0C0C0',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            // 让节点可以通过鼠标拖拽和移动的设置
            roam: false, // 开启鼠标平移及缩放
            draggable: true, // 节点是否支持鼠标拖拽。
            edgeSymbol: ['circle', 'arrow'], // 两节点连线的样式
            edgeSymbolSize: [5, 10],
            cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式

            labelLayout: {
              moveOverlap: 'shiftX', // 标签重叠时，挪动标签防止重叠
              draggable: true // 节点标签是否允许鼠标拖拽定位
            },
            emphasis: {
              scale: true, // 节点放大效果
              focus: 'adjacency'
            },
            lineStyle: {
              color: '#3d3d3f',
              width: 2,
              curveness: 0 // 节点连线的曲率，0-1 越大越弯。
            },
            data: this.zupuData,
            links: this.zupuLinks
          }
        ]
      })
      myChart.off('click')

      myChart.on('click', function(param) {
        console.log(param)
        if (param.data.investor_id > 0) {
          this.addData(param.data.investor_id, param)
        }
      }.bind(this))
    },
    addData(company_id, param) {
      getInvestor({ phone: localStorage.getItem('phone'), company_id: company_id }).then(res => {
        if (res.data.result.length > 0) {
          this.categories.push({ name: param.name })
          res.data.result.forEach((item) => {
            if (!this.zupuDataList[item.INV]) {
              this.zupuData.push({
                name: item.INV,
                category: param.name,
                investor_id: item.companyid_inv
              })
              this.zupuDataList[item.INV] = item.INV
            }
            this.zupuLinks.push({
              source: param.name,
              target: item.INV
            })
          })
          this.drawLine()
        }
      })
    },

    drawer_open(company_id, company_name) {
      this.zupu.company_id = company_id
      this.zupu.company_name = company_name
      this.zupu.drawer = !this.zupu.drawer

      getInvestor({ phone: localStorage.getItem('phone'), company_id: company_id }).then(res => {
        const links = []
        res.data.result.forEach((item) => {
          const obj = {
            source: this.zupu.company_name,
            target: item.INV,
            type: item.INVTYPE,
            investor_id: item.companyid_inv
          }
          links.push(obj)
        })
        this.zupuList = links
        this.zupuInit(links)
      })
    },
    zupuInit(links) {
      const _this = this
      var nodes = {}

      links.forEach(function(link) {
        link.source = nodes[link.source] || (nodes[link.source] = { name: link.source })
        link.target = nodes[link.target] || (nodes[link.target] = { name: link.target })
      })
      var width = 1000; var height = 600
      var corpname = this.zupu.company_name
      var force = d3.layout.force()// layout将json格式转化为力学图可用的格式
        .nodes(d3.values(nodes))// 设定节点数组
        .links(links)// 设定连线数组
        .size([width, height])// 作用域的大小
        .linkDistance(125)// 连接线长度
        .charge(-2000)// 顶点的电荷数。该参数决定是排斥还是吸引，数值越小越互相排斥
        .on('tick', tick)// 指时间间隔，隔一段时间刷新一次画面
        .start()// 开始转换

      d3.select('svg').remove()
      var svg = d3.select('#graph').append('svg')
        .attr('width', width)
        .attr('height', height)
      // .call(zoom);

      // 设置连接线
      var edges_line = svg.selectAll('.edgepath')
        .data(force.links())
        .enter()
        .append('path')
        .attr({
          'd': function(d) {
            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y
          },
          'class': 'edgepath',
          'id': function(d, i) {
            return 'edgepath' + i
          }
        })
        .style('stroke', '#595D68')
        .style('pointer-events', 'none')
        .style('stroke-width', 1)// 线条粗细

      // 圆圈
      var circle = svg.append('g').selectAll('circle')
        .data(force.nodes())// 表示使用force.nodes数据
        .enter().append('circle')
        .style('fill', function(node) {
          var color// 圆圈背景色
          var link = links[node.index]
          // console.log(node.index)
          if (link) {
            if (link.type == 0) {
              return color = '#1943AC'
            } else {
              return color = '#5095FF'
            }
          }
          return color = '#5095FF'
        })
        .style('stroke', function(node) {
          var color// 圆圈线条的颜色
          var link = links[node.index]
          if (link) {
            if (link.type == '0') {
              return color = '#1943AC'
            } else {
              return color = '#5095FF'
            }
            return color = '#5095FF'
          }
        })
        .attr('r', 40)// 设置圆圈半径
        .call(force.drag)// 将当前选中的元素传到drag函数中，使顶点可以被拖动
        .on('click', function(node) { // 选择所有的点添加点击事件
          var link = links[node.index - 1]
          links.forEach((i, k) => {
            if (i.target.index == node.index) {
              link = links[k]
            }
          })
          if (link) {
            console.log(link.type)
            if (link.investor_id == 0) {
              getInvestor({ phone: localStorage.getItem('phone'), company_id: link.investor_id }).then(res => {
                if (res.data.result.length > 0) {
                  const links = []
                  res.data.result.forEach((item) => {
                    const obj = {
                      source: link.target.name,
                      target: item.INV,
                      type: item.INVTYPE,
                      investor_id: item.companyid_inv
                    }
                    links.push(obj)
                  })
                  _this.zupuList.forEach(item => {
                    const obj = {
                      source: item.source.name,
                      target: item.target.name,
                      type: item.type,
                      investor_id: item.investor_id
                    }
                    links.push(obj)
                  })
                  _this.zupuList = links
                  _this.zupuInit(links)
                }
              })
            }
          }
        })
      var text = svg.append('g').selectAll('text')
        .data(force.nodes())
        // 返回缺失元素的占位对象（placeholder），指向绑定的数据中比选定元素集多出的一部分元素。
        .enter()
        .append('text')
        .attr('dy', '.15em')
        .attr('text-anchor', 'middle')// 在圆圈中加上数据
        .style('fill', function(node) {
          var color// 文字颜色
          var link = links[node.index]
          return color = '#ffffff'
        }).attr('x', function(d) {
          console.log(d.name + '---')
          var re_en = /[a-zA-Z]+/g
          // 如果是全英文，不换行
          if (d.name.match(re_en)) {
            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 2)
              .text(function() {
                return d.name
              })
          }
          // 如果小于四个字符，不换行
          else if (d.name.length <= 4) {
            d3.select(this).append('tspan')
              .attr('x', -2)
              .attr('y', 2)
              .text(function() {
                return d.name
              })
          } else if (d.name.length > 4 && d.name.length <= 8) { // 大于4  这两行
            var top = d.name.substring(0, 4)
            var bot = d.name.substring(4, d.name.length)

            d3.select(this).text(function() {
              return ''
            })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -7)
              .text(function() {
                return top
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 10)
              .text(function() {
                return bot
              })
          } else if (d.name.length > 8 && d.name.length <= 12) { // 文字长度大于8 折三行
            var top = d.name.substring(0, 4)
            var bot = d.name.substring(4, 8)
            var bot1 = d.name.substring(8, d.name.length)

            d3.select(this).text(function() {
              return ''
            })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -15)
              .text(function() {
                return top
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 2)
              .text(function() {
                return bot
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 16)
              .text(function() {
                return bot1
              })
          } else if (d.name.length > 12 && d.name.length <= 16) { // 文字长度大于12 折四行'
            var top = d.name.substring(0, 4)
            var bot = d.name.substring(4, 8)
            var bot1 = d.name.substring(8, 12)
            var bot2 = d.name.substring(12, d.name.length)

            d3.select(this).text(function() {
              return ''
            })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -20)
              .text(function() {
                return top
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -3)
              .text(function() {
                return bot
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 10)
              .text(function() {
                return bot1
              })
            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 23)
              .text(function() {
                return bot2
              })
          } else if (d.name.length > 16) { // 文字长度大于16  方案
            var top = d.name.substring(0, 4)
            var bot = d.name.substring(4, 8)
            var bot1 = d.name.substring(8, 12)
            var bot2 = d.name.substring(12, 14)

            bot2 += '...'
            d3.select(this).text(function() {
              return ''
            })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -22)
              .text(function() {
                return top
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', -7)
              .text(function() {
                return bot
              })

            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 10)
              .text(function() {
                return bot1
              })
            d3.select(this).append('tspan')
              .attr('x', 0)
              .attr('y', 25)
              .text(function() {
                return bot2
              })
          }
        })

      function tick() {
        circle.attr('transform', transform1)// 圆圈
        text.attr('transform', transform2)// 顶点文字

        edges_line.attr('d', function(d) {
          var path = 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y
          return path
        })
      }

      // 设置连接线的坐标,使用椭圆弧路径段双向编码
      function linkArc(d) {
        return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y
      }

      // 设置圆圈和文字的坐标
      function transform1(d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      }

      function transform2(d) {
        return 'translate(' + (d.x) + ',' + d.y + ')'
      }
    },
    mt_rand_int(length) {
      // 生成随机数
      return Math.round(Math.random() * length)
    },
    mt_rand_str(length) {
      // 生成随机字符串
      const arr = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ]
      const arr_length = arr.length - 1
      let str = ''
      for (let i = 0; i < length; i++) {
        str = str + arr[Math.round(Math.random() * arr_length)]
      }
      return str
    },
    contrl_cond_down_show() {
      this.show.cond_down = !this.show.cond_down
      document.getElementById('gengduo').style.display = 'none'
    },
    setValue(val, id) {
      if (typeof val === 'object' && val.length > 0) {
        const kArr = val[0].split('-')
        const key = kArr[0]
        this.value[key] = []
        val.forEach((v, k) => {
          const iArr = v.split('-')
          this.value[key][k] = iArr[1]
        })
      } else if (val.length > 0) {
        const vArr = val.split('-')
        this.value[vArr[0]] = [vArr[1]]
      } else {
        this.value[id] = []
      }
    },
    getDrawer(entname, xd_id) {
      localStorage.setItem('entName', entname)
      localStorage.setItem('xd_id', xd_id)
      this.drawer_data.entname = entname
      this.drawer_data.xd_id = xd_id
      this.show.show_drawer = !this.show.show_drawer
    },
    setDrawerType(type) {
      this.show.show_drawer = type
    },
    closeOption(type) {
      this.$el.getElementsByClassName('el-checkbox is-checked').forEach((v) => {
        v.getElementsByClassName('el-checkbox__original').forEach((val) => {
          const vStr = val.getAttributeNode('value').value
          if (type === vStr) {
            v.click()
          }
        })
      })
      this.tags.forEach((tag, index) => {
        if (tag.type === type) {
          this.tags.splice(index, 1)
        }
      })
    },
    handleChange_option() {
      // console.log(this.value)
      this.tags = []
      this.value.forEach((checkV, key) => {
        this.list.forEach((val) => {
          if (val.id === key) {
            const title = val.title
            val.list.forEach((v) => {
              checkV.forEach((cv) => {
                const id = v.id + ''
                // console.log(cv + '--' + id + '--' + val.id + '--' + key)
                if (cv === id) {
                  // console.log(cv + '-/-' + id + '-/-' + val.id + '-/-' + key)
                  this.tags.push({ name: title + '-' + v.name, type: val.id + '-' + v.id })
                }
              })
            })
          }
        })
      })
    },
    closeQylxCheckedNodes() {
      this.search_cond.basic_qylxid = ''
    },
    closeAddressCheckedNodes() {
      this.search_cond.basic_regionid = ''
    },
    closejlxxcyCheckedNodes() {
      this.search_cond.basic_jlxxcyid = ''
      // console.log(this.search_cond.basic_jlxxcyid)
    },
    closeNicidCheckedNodes() {
      this.search_cond.basic_nicid = ''
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
      }
    },
    getCheckedNodesQylxid(val) {
      this.search_cond.basic_qylxid = ''
      if (val.length > 0) {
        // console.log(val)
        let szjj = this.$refs.qylx_ref.getCheckedNodes(true)
        if (szjj[0]) {
          let szjj_str = ''
          szjj.forEach(item => {
            if (item.checked) {
              szjj_str += item.value + ','
            }
          })
          szjj = szjj_str.trim()
        } else {
          szjj = ''
        }
        this.search_cond.basic_qylxid = szjj
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
      }
    },
    getCheckedNodesJlxxcyid(val) {
      this.search_cond.basic_jlxxcyid = ''
      if (val.length > 0) {
        // console.log(val)
        let jlxxcy = this.$refs.jlxxcy_ref.getCheckedNodes(true)
        if (jlxxcy[0]) {
          let jlxxcy_str = ''
          jlxxcy.forEach(item => {
            if (item.checked) {
              jlxxcy_str += item.value + ','
            }
          })
          jlxxcy = jlxxcy_str.trim()
        } else {
          jlxxcy = ''
        }
        this.search_cond.basic_jlxxcyid = jlxxcy
      }
    },
    getCheckedNodesSzjjid(val) {
      this.search_cond.basic_szjjid = ''
      if (val.length > 0) {
        // console.log(val)
        let szjj = this.$refs.szjj_ref.getCheckedNodes(true)
        if (szjj[0]) {
          let szjj_str = ''
          szjj.forEach(item => {
            if (item.checked) {
              szjj_str += item.value + ','
            }
          })
          szjj = szjj_str.trim()
        } else {
          szjj = ''
        }
        this.search_cond.basic_szjjid = szjj
      }
    },
    BasePageChange(index) {
      this.tablePage.pageNum = index
      this.submitForm(index)
    },
    submit() {
      this.submitForm(1)
    },
    submitForm(page) {
      var searchOption = []
      this.value.forEach((v, key) => {
        searchOption.push({
          pid: key,
          value: v
        })
      })
      // console.log(searchOption)
      // console.log(JSON.stringify(searchOption))
      this.searchQuery.phone = localStorage.getItem('phone')
      this.searchQuery.searchText = this.search_val
      this.searchQuery.searchOption = JSON.stringify(searchOption)
      this.searchQuery.basic_regionid = this.search_cond.basic_regionid
      this.searchQuery.basic_jlxxcyid = this.search_cond.basic_jlxxcyid
      this.searchQuery.basic_szjjid = this.search_cond.basic_szjjid
      this.searchQuery.basic_nicid = this.search_cond.basic_nicid
      this.searchQuery.basic_opscope = this.search_cond.basic_opscope
      this.searchQuery.ENTTYPE = this.search_cond.basic_qylxid
      this.searchQuery.page = page
      // console.log(12)
      advancedSearch(this.searchQuery).then(res => {
        var searchText = document.getElementById('search_input').value
        localStorage.setItem('searchText', searchText)
        if (res.data.code === 200) {
          this.paginate = res.data.paging
          var dataV = res.data.result
          dataV.forEach((val, key) => {
            if (searchText.length > 0) {
              dataV[key]._source.showName = val._source.ENTNAME.replaceAll(searchText, "<span style='color: red'>" + searchText + '</span>')
              dataV[key]._source.gong_si_jian_jie = val._source.gong_si_jian_jie.replaceAll(searchText, "<span style='color: red'>" + searchText + '</span>')
            } else {
              dataV[key]._source.showName = val._source.ENTNAME
            }
            var img = "<div class='zishu4' >" + val._source.short_name + '</div>'
            if (val._source.short_name.length == 2) {
              img = "<div class='zishu2'>" + val._source.short_name + '</div>'
            }
            if (val._source.short_name.length == 4) {
              img = "<div class='zishu4'>" + val._source.short_name + '</div>'
            }
            if (val._source.short_name.length == 3) {
              img = "<div class='zishu3'>" + val._source.short_name + '</div>'
            }
            if (val._source.short_name.length == 5) {
              img = "<div class='zishu5'>" + val._source.short_name + '</div>'
            }
            if (val._source.short_name.length == 6) {
              img = "<div class='zishu6'>" + val._source.short_name + '</div>'
            }
            const IMG = new Image()
            IMG.src = 'https://img-mrxd.oss-cn-beijing.aliyuncs.com/ent-log-hd-saic-202208' + val._source.logo
            IMG.onload = function() {
              dataV[key]._source.logo = '<img style="width:140px;height:140px;margin-top: 30px;" src="' + 'https://img-mrxd.oss-cn-beijing.aliyuncs.com/ent-log-hd-saic-202208' + val._source.logo + '"/>'
            }

            IMG.onerror = function() {
              dataV[key]._source.logo = img
            }
          //   console.log(val._source.name)
          //   var biaoQianQuery = {}
          //   biaoQianQuery.entname = val._source.name
          //   biaoQianQuery.phone = localStorage.getItem('phone')
          //   biaoQianQuery.xd_id = val._source.xd_id
          //   console.log(biaoQianQuery)
          //   getBusinessScaleInfo(biaoQianQuery).then(resv => {
          //     if (resv.data.code === 200) {
          //       dataV[key]._source.businessScale = resv.data.result.label
          //     }
          //   })
          //   getEmploymenInfo(biaoQianQuery).then(resv2 => {
          //     if (resv2.data.code === 200) {
          //       dataV[key]._source.employmen = resv2.data.result.num
          //     }
          //   })
          })
          this.data = dataV
        }
      })
    },
    saveParamDialog() {
      this.dialogVisible = true
    },
    saveParam() {
      this.searchQuery.query_name = document.getElementById('saveParamName').value
      saveSearchHistroy(this.searchQuery).then(res => {
        if (res.data.code === 200) {
          this.$message.success('保存成功，您可以去（我的-搜客记录）中查看')
          this.dialogVisible = false
        } else {
          this.$message.success('保存失败')
        }
      })
    },
    doSaveOpportunity(xd_id, name) {
      this.EntLianXiEtnId = xd_id
      this.EntLianXiEtnName = name
      var query = { xd_ids: xd_id, phone: localStorage.getItem('phone') }
      saveOpportunity(query).then(res => {
        if (res.data.code === 200) {
          // this.$message.success('保存商机成功')
          this.dialogEntLianXi = true
          getEntLianXi({ entId: xd_id, phone: localStorage.getItem('phone'), entName: name, page: 1, size: 10 }).then(res => {
            if (res.data.code === 200) {
              this.EntLianXiList = res.data.result
              this.totalEntLianXi = res.data.paging.total
            }
          })
        } else {
          // this.$message.success('保存商机失败')
        }
      })
    },
    uploadVin(xd_id, name) {
      this.vinData.entId = xd_id
      this.vinData.entName = name
      this.vinQouQuanType = true
    },
    handleChangeEntLianXi(val) {
      getEntLianXi({ entId: this.EntLianXiEtnId, phone: localStorage.getItem('phone'), entName: this.EntLianXiEtnName, page: val, size: 10 }).then(res => {
        if (res.data.code === 200) {
          this.EntLianXiList = res.data.result
        }
      })
    },
    handleClose() {
      this.dialogVisible = false
      this.dialogEntLianXi = false
      this.EntLianXiList = []
      this.zupu.drawer = false
      this.zupuVisible = false
      this.searchQiyeVisible = false
    },
    uploadSuccess(res) {
      if (res.code === 200) {
        this.$message.success('vin数据上传成功')
      } else {
        this.$message.success('vin数据上传失败，' + res.msg)
      }
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      this.fileList = []
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;

  .search-wrapper {
    width: 100%;

    .el-select ::v-deep .el-input {
      width: 130px;
    }

    .input-with-select ::v-deep .el-input-group__prepend {
      background-color: #fff;
    }
  }
  .input-with-select{
    width:86%;
    height: 60px;
    font-size: 18px;
    border-radius: 10px;
  }

  .cond-wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .cond-up {
      width: 100%;
      overflow: hidden;
    }

    .cond-down {
      width: 100%;
      min-height: 73px;
      max-height: 150px;
    }

    .cond-choice-wrapper {
      width: 100%;
      display: flex;
      //height: 40px;
      line-height: 40px;

      .cond-word {
        width: 10%;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }

      .cond-cond {
        flex: 1;
        //height: 40px;
        line-height: 40px;

        .el-tag {
          margin-right: 10px;
        }
      }
    }
  }

  .search-res-wrapper {
    .slide-div {
      .search-res-info {
        width: 100%;
        display: flex;

        .logo-wrapper {
          width: 150px;
          position: inherit;
          margin: auto;
          .logo {
            width: 100%;
          }
        }

        .content-wrapper {
          flex: 1;
          margin-left: 25px;

          .ent-info-wrapper {
            width: 100%;
            display: flex;

            .info-wrapper {
              width: 100%;

              .ent-name {
                font-size: 25px;
                margin-bottom: 20px;
                border-bottom: 1px solid black;
                cursor: pointer;
                display: inline-block;
              }

              .ent-label {
                .el-tag {
                  margin-right: 10px;
                }

                margin-bottom: 20px;
              }

              .ent-other-wrapper {
                .row-h {
                  margin-bottom: 15px;
                }

                .under {
                }
              }
            }

            .action-wrapper {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .ent-desc-wrapper {
            i {
              line-height: 30px;
            }

            div {
              margin-left: 6px;
            }

            font-size: 13px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            display: flex;
            background-color: #eeeeee;
            padding-left: 10px
          }

        }
      }
    }

    .search-res-count, .pagination-wrapper {
      text-align: center;
      padding: 5px;
    }

  }
}
.row-h{
  font-size: 15px
}
  .el-input-group__append{
    background: linear-gradient(90deg, #006EFF, #4BACFF);;
    border: 0px;
  }

</style>
<style>

.zishu1,.zishu2{
  width: 140px;
  height: 135px;
  line-height: 56px;
  text-align: center;
  padding: 35px 0px;
  background-color: #faab72;
  border-radius: 10px;
  font-size: 55px;
  letter-spacing: 7px;
}
.zishu4{
  width: 140px;
  height: 130px;
  font-size: 53px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #8fc1e4;
  border-radius: 10px;
}
.zishu3{
  width: 140px;
  height: 130px;
  font-size: 53px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #9d9def;
  border-radius: 10px;
}
.zishu5{
  width: 140px;
  height: 130px;
  font-size: 39px;
  letter-spacing: 3px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #13af08;
  border-radius: 10px;
}
.zishu6{
  width: 140px;
  height: 120px;
  font-size: 30px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #40eecd;
  border-radius: 10px;
}
.zishu7,.zishu8{
  width: 140px;
  height: 130px;
  font-size: 28px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #8fc1e4;
  border-radius: 10px;
}
.zishu9,.zishu10{
  width: 140px;
  height: 130px;
  font-size: 21px;
  letter-spacing: 7px;
  line-height: 56px;
  text-align: center;
  padding-top: 10px;
  background-color: #8fc1e4;
  border-radius: 10px;
}
.el-divider--horizontal{
  margin: 0px;
}
#search_input{
  height: 60px;
}
.el-select > .el-select__tags > span {
  display: none
}
</style>
