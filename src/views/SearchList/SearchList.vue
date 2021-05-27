<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="supervisor_dialog"
      width="30%"
      :style="{'text-align': 'center'}">
      <span style="color: red;font-size: 15px;">请选择要监控的风险分类</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="supervisor_dialog = false">取消</el-button>
    <el-button type="primary" @click="doMonitor('重点对象')">重点对象</el-button>
    <el-button type="primary" @click="doMonitor('合作方')">合作方</el-button>
    <el-button type="primary" @click="doMonitor('全部')">全部</el-button>
  </span>
    </el-dialog>
    <div class="nav">
      <el-col :span="4">
        <div class="logo" @click="toIndex">
          <img class="img" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt="">
          <!-- <img class="img" src="http://api.meirixindong.com/Static/Image/ReportImage/wh_logo.png" alt=""> -->
        </div>
      </el-col>
      <el-col :span="10">
        <div class="search">
          <el-input v-model="input" placeholder="请输入内容" class="input-with-select" @change="sousuo">
            <el-button slot="append" icon="el-icon-search" @click="sousuo"/>
          </el-input>
        </div>
      </el-col>
    </div>
    <div class="cont">
      <div v-for="(item,index) in list" :key="index" class="cont-list">
        <div class="left">
          <div class="name">
            <h2 @click="toDetail(item.Name)">{{ item.Name }}</h2>
            <el-tag type="success" style="margin: 11px 0 4px 13px;">{{ item.Status }}</el-tag>
          </div>
          <div class="desc">
            <span style="margin-right:30px">法人代表：{{ item.OperName }}</span>
            <span style="margin-right:30px">成立日期：{{ item.StartDate }}</span>
            <span>统一社会信用代码：{{ item.CreditCode }}</span>
          </div>
        </div>
        <div class="right">
          <div v-if="item.supervisor === 0" class="jkong" @click="toMonitor(item.Name)">监控企业</div>
          <div v-if="item.supervisor === 1" class="jkong1">正在监控</div>
          <div v-if="item.supervisor === 2" class="jkong2" @click="toMonitor(item.Name)">监控到期</div>
          <div class="sqing" @click="outerVisibles(item.Name,item.CreditCode)">申请报告</div>
        </div>
      </div>
    </div>
    <el-dialog title="生成报告" :visible.sync="outerVisible">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="open">word版</el-button>
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="innerVisibles">pdf版</el-button>
      </div>
      <!-- 企业商调版pdf -->
      <el-dialog
        width="80%"
        title="请选择生成内容"
        :visible.sync="innerVisible"
        append-to-body
      >
        <div>
          <div class="editor-container">
            <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool"/>
          </div>
        </div>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 尽调版（需授权，请下载授权书）pdf -->
    <el-dialog
      width="80%"
      title="请选择生成内容"
      :visible.sync="reportJpdf"
      append-to-body
    >
      <div>
        <div class="editor-container">
          <dndj-list :list3="list3" :list4="list4" list3-title="List" list4-title="Article pool"/>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reportJpdf = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 尽调版（需授权，请下载授权书）word -->
    <el-dialog
      title="上传图片"
      :visible.sync="reportJword"
      width="50%"
    >
      <IndexWord/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reportJword = false">取 消</el-button>
        <el-button type="primary" @click="reportJW">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 提示消息 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibles">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 企业商调版word -->
    <el-dialog
      title="上传图片"
      :visible.sync="dia"
      width="50%"
    >
      <UploadPic/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dia = false">取 消</el-button>
        <el-button type="primary" @click="tijiao">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 报告类型选择 -->
    <el-dialog
      title="请选择生成报告类型"
      :visible.sync="Reporttype"
      width="40%"
    >
      <div class="reportBox">
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toQyslb">
          <div style="margin-bottom:10px">企业速览版</div>
          <div>80元</div>
        </el-button>
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toQysdb">
          <div style="margin-bottom:10px">企业商调版</div>
          <div>300元</div>
        </el-button>
        <el-button type="primary" plain style="margin: 20px 0;" @click="toJdb">
          <div style="margin-bottom:10px">尽调版（需授权，请下载授权书）</div>
          <div>500元</div>
        </el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Reporttype = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 企业速览版选择 -->
    <el-dialog
      title="企业速览版"
      :visible.sync="ReportQyslb"
      width="40%"
    >
      <div class="reportBox">
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toQyslbw">word版</el-button>
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toQyslbp">pdf版</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ReportQyslb = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 尽调版（需授权，请下载授权书） -->
    <el-dialog
      title=""
      :visible.sync="ReportSq"
      width="40%"
    >
      <div class="reportBox">
        <div class="box22-b">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://api.meirixindong.com/api/v1/comm/image/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="fileList"
            :auto-upload="false"
            :headers="myHeaders"
            :data="{type:'auth',phone:phone}"
            multiple
          >
            <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传图片</el-button>
            <el-button style="margin-left: 10px;" size="small" type="info" @click="down">下载授权书模板</el-button>
          </el-upload>
        </div>
        <!--        <div class="auth-book-wrapper">-->
        <!--          <p style="width: 100%;text-align: center"><strong>授 权 书</strong></p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">为有效保障我公司的合法权益，并使我公司享受贵方后续的高效、专业服务，我公司理解、同意给予贵方如下授权：</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">一、授权事项</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">1、我公司合法授权贵方及贵方技术合作方北京每日信动科技有限公司（以下称“每日信动公司”）采集我公司的企业信息（包括但不限于基本工商信息、经营信息、发票信息、贷款信息、财务信息、税务信息、司法行政警示信息等）。我公司同意通过安装插件、代为申请纳税人税务数字证书或以贵方或每日信动公司提供的其他方式，对我公司进行企业信息采集。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">2、贵方或每日信动公司有权依照自行设立的模型、模式、格式、规则、流程等对我公司的企业信息进行保存、整理、分析、加工等处理操作。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">3、贵方或每日信动公司有权将我公司的企业信息以评估报告或其他形式提供给相关第三方，上述相关第三方包括根据我公司的申请拟向我公司提供服务或已经为我公司提供服务的相关机构等。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">4、贵方或每日信动公司根据本授权，有权对我公司企业信息进行采集、处理，并将该等信息提供给相关第三方；未经我公司另行授权，贵方或每日信动公司不得将采集的信息披露给与本次企业信息采集事项无关联的主体。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">二、其他事项</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">1、本协议项下授权的起始日期为我公司盖章或安装贵方或每日信动公司提供的插件之日。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">2、与信息采集有关的事项终止后，本授权书方可终止；若因我公司提前终止本授权书而对申请、使用评估报告的相关第三方产生任何不利影响或损失，由我公司自行承担，贵方或每日信动公司不承担任何责任。</p>-->
        <!--          <p style="width: 100%;text-align: left;text-indent: 30px">3、我公司认可贵方或每日信动公司保留对本授权所有条款及规则的最终解释权。</p>-->
        <!--        </div>-->
      </div>
      <span slot="footer" class="dialog-footer">
<!--        <el-button type="primary" @click="setAuth">确 定</el-button>-->
        <el-button @click="ReportSq = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 尽调版（需授权，请下载授权书）选择 -->
    <el-dialog
      title=" 尽调版"
      :visible.sync="ReportJdb"
      width="40%"
    >
      <div class="reportBox">
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toJdbw">word版</el-button>
        <el-button type="primary" plain style="width:252px;margin: 20px 0;" @click="toJdbp">pdf版</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ReportJdb = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 搜索列表分页 -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import DndList from '@/components/DndList/index'
import DndjList from '@/components/DndjList/index'
import UploadPic from '@/components/UploadPic/UploadPic'
import IndexWord from '@/components/DndjList/IndexWord'
import {
  getEntList,
  createEasyWord,
  Supervisor,
  createVeryEasy,
  createVeryEasypdf,
  authBookC,
  authBook,
  createDeepEasy,
  getAuthentication
} from '@/api/article'

var token = localStorage.getItem('token')
export default {
  components: { DndList, DndjList, UploadPic, IndexWord },
  data() {
    return {
      supervisor_dialog: false,
      list1: [],
      list2: [
        { id: '0-0', title: '基本信息', index: 0 },
        { id: '0-1', title: '基本信息-实际控制人', index: 1 },
        { id: '0-2', title: '基本信息-历史沿革及重大事项', index: 2 },
        { id: '0-3', title: '基本信息-法人对外投资', index: 3 },
        { id: '0-4', title: '基本信息-法人对外任职', index: 4 },
        { id: '0-5', title: '基本信息-企业对外投资', index: 5 },
        { id: '0-6', title: '基本信息-主要分支机构', index: 6 },
        { id: '0-7', title: '基本信息-银行信息', index: 7 },
        { id: '1-0', title: '公司概况-融资信息 ', index: 8 },
        { id: '1-1', title: '公司概况-招投标信息 ', index: 9 },
        { id: '1-2', title: '公司概况-购地信息', index: 10 },
        { id: '1-3', title: '公司概况-土地公示', index: 11 },
        { id: '1-4', title: '公司概况-土地转让', index: 12 },
        { id: '1-5', title: '公司概况-建筑资质证书 ', index: 13 },
        { id: '1-6', title: '公司概况-建筑工程项目', index: 14 },
        { id: '1-7', title: '公司概况-债券信息', index: 15 },
        { id: '1-8', title: '公司概况-网站信息', index: 16 },
        { id: '1-9', title: '公司概况-微博', index: 17 },
        { id: '1-10', title: '公司概况-新闻舆情', index: 18 },
        { id: '2-0', title: '团队招聘-近三年团队人数 ', index: 19 },
        { id: '2-1', title: '团队招聘-专业注册人员', index: 20 },
        { id: '2-2', title: '团队招聘-招聘信息', index: 21 },
        { id: '3-0', title: '财务总揽', index: 22 },
        { id: '4-0', title: '业务概况', index: 23 },
        { id: '5-0', title: '创新能力-专利 ', index: 24 },
        { id: '5-1', title: '创新能力-软件著作权', index: 25 },
        { id: '5-2', title: '创新能力-商标', index: 26 },
        { id: '5-3', title: '创新能力-作品著作权', index: 27 },
        { id: '5-4', title: '创新能力-证书资质', index: 28 },
        { id: '6-0', title: '税务信息-纳税信用等级', index: 29 },
        { id: '6-1', title: '税务信息-税务许可信息', index: 30 },
        { id: '6-2', title: '税务信息-认证登记信息', index: 31 },
        { id: '6-3', title: '税务信息-非正常用户信息', index: 32 },
        { id: '6-4', title: '税务信息-欠税信息', index: 33 },
        { id: '6-5', title: '税务信息-重大税收违法', index: 34 },
        { id: '7-0', title: '行政管理信息-行政许可信息', index: 35 },
        { id: '7-1', title: '行政管理信息-行政处罚信息', index: 36 },
        { id: '8-0', title: '环保信息-环保处罚', index: 37 },
        { id: '8-1', title: '环保信息-重点监控企业名单', index: 38 },
        { id: '8-2', title: '环保信息-环保企业自行监测结果', index: 39 },
        { id: '8-3', title: '环保信息-环评公示数据', index: 40 },
        { id: '9-0', title: '海关信息-海关基本信息', index: 41 },
        { id: '9-1', title: '海关信息-海关许可', index: 42 },
        { id: '9-2', title: '海关信息-海关信用', index: 43 },
        { id: '9-3', title: '海关信息-海关处罚', index: 44 },
        { id: '10-0', title: '一行两会信息-央行行政处罚', index: 45 },
        { id: '10-1', title: '一行两会信息-银保监会处罚公示', index: 46 },
        { id: '10-2', title: '一行两会信息-证监会处罚公示', index: 47 },
        { id: '10-3', title: '一行两会信息-证监会许可信息', index: 48 },
        { id: '10-4', title: '一行两会信息-外汇局处罚', index: 49 },
        { id: '10-5', title: '一行两会信息-外汇局许可', index: 50 },
        { id: '11-0', title: '司法涉诉与抵质押信息-法院公告', index: 51 },
        { id: '11-1', title: '司法涉诉与抵质押信息-开庭公告', index: 52 },
        { id: '11-2', title: '司法涉诉与抵质押信息-裁判文书', index: 53 },
        { id: '11-3', title: '司法涉诉与抵质押信息-执行公告', index: 54 },
        { id: '11-4', title: '司法涉诉与抵质押信息-失信公告', index: 55 },
        { id: '11-5', title: '司法涉诉与抵质押信息-被执行人信息', index: 56 },
        { id: '11-6', title: '司法涉诉与抵质押信息-查封冻结扣押', index: 57 },
        { id: '11-7', title: '司法涉诉与抵质押信息-动产抵押', index: 58 },
        { id: '11-8', title: '司法涉诉与抵质押信息-股权出质', index: 59 },
        { id: '11-9', title: '司法涉诉与抵质押信息-对外担保', index: 60 },
        { id: '11-10', title: '司法涉诉与抵质押信息-土地抵押', index: 61 },
        { id: '12-0', title: '债权信息-应收账款', index: 62 },
        { id: '12-1', title: '债权信息-所有权保留', index: 63 },
        { id: '13-0', title: '债务信息-租赁登记', index: 64 },
        { id: '13-1', title: '债务信息-保证金质押登记', index: 65 },
        { id: '13-2', title: '债务信息-仓单质押', index: 66 },
        { id: '13-3', title: '债务信息-其他动产融资', index: 67 }
      ],
      reportName: '',
      input: '',
      entName: '',
      query: {
        entName: '',
        page: 1,
        pageSize: 100000,
        phone: ''
      },
      query1: {
        entName: '',
        phone: '',
        reportNum: '',
        pay: false
      },
      list: '',
      total: 0,
      outerVisible: false,
      innerVisible: false,
      dialogVisible: false,
      msg: '',
      dia: false,
      query2: {
        phone: '',
        entName: '',
        type: 3,
        email: '',
        pay: 0
      },
      Reporttype: false,
      ReportQyslb: false,
      query3: {
        phone: '',
        entName: '',
        email: '',
        type: '',
        dataKey: '',
        pay: false
      },
      ReportJdb: false,
      ReportSq: false,
      fileList: [],
      myHeaders: { Authorization: token },
      phone: '',
      reportJpdf: false,
      reportJword: false,
      list3: [],
      list4: [
        { id: '0-0', title: '基本信息', index: 0 },
        { id: '0-1', title: '基本信息-实际控制人', index: 1 },
        { id: '0-2', title: '基本信息-历史沿革及重大事项', index: 2 },
        { id: '0-3', title: '基本信息-法人对外投资', index: 3 },
        { id: '0-4', title: '基本信息-法人对外任职', index: 4 },
        { id: '0-5', title: '基本信息-企业对外投资', index: 5 },
        { id: '0-6', title: '基本信息-主要分支机构', index: 6 },
        { id: '0-7', title: '基本信息-银行信息', index: 7 },
        { id: '1-0', title: '公司概况-融资信息 ', index: 8 },
        { id: '1-1', title: '公司概况-招投标信息 ', index: 9 },
        { id: '1-2', title: '公司概况-购地信息', index: 10 },
        { id: '1-3', title: '公司概况-土地公示', index: 11 },
        { id: '1-4', title: '公司概况-土地转让', index: 12 },
        { id: '1-5', title: '公司概况-建筑资质证书 ', index: 13 },
        { id: '1-6', title: '公司概况-建筑工程项目', index: 14 },
        { id: '1-7', title: '公司概况-债券信息', index: 15 },
        { id: '1-8', title: '公司概况-网站信息', index: 16 },
        { id: '1-9', title: '公司概况-微博', index: 17 },
        { id: '1-10', title: '公司概况-新闻舆情', index: 18 },
        { id: '2-0', title: '团队招聘-近三年团队人数 ', index: 19 },
        { id: '2-1', title: '团队招聘-专业注册人员', index: 20 },
        { id: '2-2', title: '团队招聘-招聘信息', index: 21 },
        { id: '3-0', title: '财务总揽', index: 22 },
        { id: '4-0', title: '业务概况', index: 23 },
        { id: '5-0', title: '创新能力-专利 ', index: 24 },
        { id: '5-1', title: '创新能力-软件著作权', index: 25 },
        { id: '5-2', title: '创新能力-商标', index: 26 },
        { id: '5-3', title: '创新能力-作品著作权', index: 27 },
        { id: '5-4', title: '创新能力-证书资质', index: 28 },
        { id: '6-0', title: '税务信息-纳税信用等级', index: 29 },
        { id: '6-1', title: '税务信息-税务许可信息', index: 30 },
        { id: '6-2', title: '税务信息-认证登记信息', index: 31 },
        { id: '6-3', title: '税务信息-非正常用户信息', index: 32 },
        { id: '6-4', title: '税务信息-欠税信息', index: 33 },
        { id: '6-5', title: '税务信息-重大税收违法', index: 34 },
        { id: '7-0', title: '行政管理信息-行政许可信息', index: 35 },
        { id: '7-1', title: '行政管理信息-行政处罚信息', index: 36 },
        { id: '8-0', title: '环保信息-环保处罚', index: 37 },
        { id: '8-1', title: '环保信息-重点监控企业名单', index: 38 },
        { id: '8-2', title: '环保信息-环保企业自行监测结果', index: 39 },
        { id: '8-3', title: '环保信息-环评公示数据', index: 40 },
        { id: '9-0', title: '海关信息-海关基本信息', index: 41 },
        { id: '9-1', title: '海关信息-海关许可', index: 42 },
        { id: '9-2', title: '海关信息-海关信用', index: 43 },
        { id: '9-3', title: '海关信息-海关处罚', index: 44 },
        { id: '10-0', title: '一行两会信息-央行行政处罚', index: 45 },
        { id: '10-1', title: '一行两会信息-银保监会处罚公示', index: 46 },
        { id: '10-2', title: '一行两会信息-证监会处罚公示', index: 47 },
        { id: '10-3', title: '一行两会信息-证监会许可信息', index: 48 },
        { id: '10-4', title: '一行两会信息-外汇局处罚', index: 49 },
        { id: '10-5', title: '一行两会信息-外汇局许可', index: 50 },
        { id: '11-0', title: '司法涉诉与抵质押信息-法院公告', index: 51 },
        { id: '11-1', title: '司法涉诉与抵质押信息-开庭公告', index: 52 },
        { id: '11-2', title: '司法涉诉与抵质押信息-裁判文书', index: 53 },
        { id: '11-3', title: '司法涉诉与抵质押信息-执行公告', index: 54 },
        { id: '11-4', title: '司法涉诉与抵质押信息-失信公告', index: 55 },
        { id: '11-5', title: '司法涉诉与抵质押信息-被执行人信息', index: 56 },
        { id: '11-6', title: '司法涉诉与抵质押信息-查封冻结扣押', index: 57 },
        { id: '11-7', title: '司法涉诉与抵质押信息-动产抵押', index: 58 },
        { id: '11-8', title: '司法涉诉与抵质押信息-股权出质', index: 59 },
        { id: '11-9', title: '司法涉诉与抵质押信息-对外担保', index: 60 },
        { id: '11-10', title: '司法涉诉与抵质押信息-土地抵押', index: 61 },
        { id: '12-0', title: '债权信息-应收账款', index: 62 },
        { id: '12-1', title: '债权信息-所有权保留', index: 63 },
        { id: '13-0', title: '债务信息-租赁登记', index: 64 },
        { id: '13-1', title: '债务信息-保证金质押登记', index: 65 },
        { id: '13-2', title: '债务信息-仓单质押', index: 66 },
        { id: '13-3', title: '债务信息-其他动产融资', index: 67 }
      ],
      query4: {
        phone: '',
        entName: '',
        type: 2
      },
      query5: {
        phone: '',
        entName: '',
        path: '',
        type: 2
      },
      arr: [],
      query6: {
        phone: '',
        entName: '',
        reportNum: '',
        email: '',
        type: 'xd',
        pay: false
      }
    }
  },
  created() {
    const entName = this.$route.query.entName
    this.entName = entName
    this.input = entName
    this.query.entName = entName
    this.query.phone = this.query5.phone = this.query6.phone = localStorage.getItem('phone')
    this.phone = this.query2.phone = this.query3.phone = this.query4.phone = localStorage.getItem('phone')
    getEntList(this.query).then(res => {
      // console.log(res)
      this.list = res.data.result
      this.total = res.data.paging.total
    })
  },
  methods: {
    sousuo() {
      this.query.entName = this.input
      this.query.phone = localStorage.getItem('phone')
      getEntList(this.query).then(res => {
        // console.log(res)
        this.list = res.data.result
      })
    },
    handleChange(val) {
      // console.log(val)
      this.list = ''
      this.query.page = val
      getEntList(this.query).then(res => {
        // console.log(res)
        this.list = res.data.result
      })
    },
    toDetail(e) {
      // console.log(e,111)
      const entName = e
      localStorage.setItem('entName', e)
      this.$router.push({
        // name: 'entName',
        // path: '/dashboard',
        path: '/qybj',
        params: {
          entName: entName
        }
      })
    },
    outerVisibles(e, code) {
      localStorage.setItem('reportName', e)
      localStorage.setItem('CreditCode', code)
      this.Reporttype = true
    },
    innerVisibles(e) {
      this.reportName = localStorage.getItem('reportName')
      this.innerVisible = true
    },
    open() {
      // this.$prompt('请输入邮箱', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   inputErrorMessage: '邮箱格式不正确'
      // }).then(({ value }) => {
      //   this.dia = true
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消输入'
      //   })
      // })
      this.dia = true
    },
    dialogVisibles() {
      this.dialogVisible = false
      this.query1.entName = localStorage.getItem('reportName')
      this.query1.phone = localStorage.getItem('phone')
      this.query1.pay = true
      createEasyWord(this.query1).then(res => {
        // console.log(res)
        if (res.data.code === 220) {
          this.$confirm('余额不足，是否前往充值？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
            this.$router.push('/login')
            localStorage.setItem('activeName', 'third')
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // })
            this.$router.go(0)
          })
        } else {
          this.$notify({
            title: '成功',
            message: '可在线生成并查看',
            type: 'success'
          })
          this.$router.push({
            path: '/login',
            query: {
              activeName: 'second'
            }
          })
          localStorage.setItem('activeName', 'second')
          // this.dia = true
        }
      })
    },
    setAuth() {
      let entName = localStorage.getItem('reportName')
      let phone = localStorage.getItem('phone')
      let CreditCode = localStorage.getItem('CreditCode')
      getAuthentication({ entName, phone, 'code': CreditCode }).then(res => {
        if (res.data.code === 200) {
          window.location.href = res.data.result
        }
      })
    },
    tijiao() {
      this.dia = false
      this.query1.entName = localStorage.getItem('reportName')
      this.query1.phone = localStorage.getItem('phone')
      this.query1.reportNum = localStorage.getItem('reportNum')
      createEasyWord(this.query1).then(res => {
        // console.log(res)
        if (res.data.code === 210) {
          this.msg = res.data.msg
          this.dialogVisible = true
        } else {
          this.dia = true
          this.$notify({
            title: '成功',
            message: '可在线生成并查看',
            type: 'success'
          })
          this.$router.push({
            path: '/login',
            query: {
              activeName: 'second'
            }
          })
          localStorage.setItem('activeName', 'second')
        }
      })
    },
    // 尽调版word下载
    reportJW() {
      // this.$prompt('请输入邮箱', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   inputErrorMessage: '邮箱格式不正确'
      // }).then(({ value }) => {
      //   this.query6.email = value
      //   this.query6.entName = localStorage.getItem('reportName')
      //   this.query6.phone = localStorage.getItem('phone')
      //   this.query6.reportNum = localStorage.getItem('reportNum')
      //   createDeepEasy(this.query6).then(res => {
      //     // console.log(res)
      //     if (res.data.code === 210) {
      //       this.$confirm(res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //         // this.$message({
      //         //   type: 'success',
      //         //   message: '删除成功!'
      //         // });
      //         this.query6.pay = 1
      //         createDeepEasy(this.query6).then(res => {
      //           if (res.data.code === 220) {
      //             this.$confirm('余额不足，是否前往充值？', '提示', {
      //               confirmButtonText: '确定',
      //               cancelButtonText: '取消',
      //               type: 'warning'
      //             }).then(() => {
      //               // this.$message({
      //               //   type: 'success',
      //               //   message: '删除成功!'
      //               // })
      //               this.$router.push('/login')
      //               localStorage.setItem('activeName', 'third')
      //             }).catch(() => {
      //               // this.$message({
      //               //   type: 'info',
      //               //   message: '已取消删除'
      //               // })
      //               this.$router.go(0)
      //             })
      //           } else {
      //             this.$notify({
      //               title: '成功',
      //               message: '可在线生成并查看',
      //               type: 'success'
      //             })
      //             this.$router.push({
      //               path: '/login',
      //               query: {
      //                 activeName: 'second'
      //               }
      //             })
      //             localStorage.setItem('activeName', 'second')
      //           }
      //         })
      //       }).catch(() => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: '已取消删除'
      //         // });
      //       })
      //     } else {
      //       this.$notify({
      //         title: '成功',
      //         message: '可在线生成并查看',
      //         type: 'success'
      //       })
      //       this.$router.push({
      //         path: '/login',
      //         query: {
      //           activeName: 'second'
      //         }
      //       })
      //       localStorage.setItem('activeName', 'second')
      //     }
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消输入'
      //   })
      // })

      this.query6.email = '20210425修改'
      this.query6.entName = localStorage.getItem('reportName')
      this.query6.phone = localStorage.getItem('phone')
      this.query6.reportNum = localStorage.getItem('reportNum')
      createDeepEasy(this.query6).then(res => {
        // console.log(res)
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // });
            this.query6.pay = 1
            createDeepEasy(this.query6).then(res => {
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // })
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // })
                  this.$router.go(0)
                })
              } else {
                this.$notify({
                  title: '成功',
                  message: '可在线生成并查看',
                  type: 'success'
                })
                this.$router.push({
                  path: '/login',
                  query: {
                    activeName: 'second'
                  }
                })
                localStorage.setItem('activeName', 'second')
              }
            })
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          })
        } else {
          this.$notify({
            title: '成功',
            message: '可在线生成并查看',
            type: 'success'
          })
          this.$router.push({
            path: '/login',
            query: {
              activeName: 'second'
            }
          })
          localStorage.setItem('activeName', 'second')
        }
      })
    },
    // 监控企业
    toMonitor(e) {
      this.supervisor_dialog = true
      this.query2.entName = e
    },
    doMonitor(val) {
      if (val === '重点对象') {
        this.query2.type = 1
      } else if (val === '合作方') {
        this.query2.type = 2
      } else {
        this.query2.type = 3
      }
      Supervisor(this.query2).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.query2.pay = 1
            Supervisor(this.query2).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: '添加成功',
                  type: 'success'
                })
                this.$router.push({
                  path: '/login',
                  query: {
                    activeName: 'fourth'
                  }
                })
                localStorage.setItem('activeName', 'fourth')
              } else {
                this.$message.error('添加失败')
              }
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  this.$router.go(0)
                })
              }
            })
          }).catch(() => {
          })
        } else {
          this.$router.push({
            path: '/login',
            query: {
              activeName: 'fourth'
            }
          })
          localStorage.setItem('activeName', 'fourth')
        }
      })
    },
    toIndex() {
      this.$router.push('/')
    },

    // 企业速览版
    toQyslb() {
      // this.Reporttype = false
      this.ReportQyslb = true
    },
    toQyslbw() {
      // this.$prompt('请输入邮箱', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   inputErrorMessage: '邮箱格式不正确'
      // }).then(({ value }) => {
      //   this.query2.email = value
      //   this.query2.entName = localStorage.getItem('reportName')
      //   createVeryEasy(this.query2).then(res => {
      //     // console.log(res)
      //     if (res.data.code === 210) {
      //       this.msg = res.data.msg
      //       this.$confirm(res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //         // this.$message({
      //         //   type: 'success',
      //         //   message: '删除成功!'
      //         // })
      //         this.query2.pay = true
      //         createVeryEasy(this.query2).then(res => {
      //           if (res.data.code === 220) {
      //             this.$confirm('余额不足，是否前往充值？', '提示', {
      //               confirmButtonText: '确定',
      //               cancelButtonText: '取消',
      //               type: 'warning'
      //             }).then(() => {
      //               // this.$message({
      //               //   type: 'success',
      //               //   message: '删除成功!'
      //               // })
      //               this.$router.push('/login')
      //               localStorage.setItem('activeName', 'second')
      //             }).catch(() => {
      //               // this.$message({
      //               //   type: 'info',
      //               //   message: '已取消删除'
      //               // })
      //               this.$router.go(0)
      //             })
      //           } else {
      //             this.$notify({
      //               title: '成功',
      //               message: '可在线生成并查看',
      //               type: 'success'
      //             })
      //             this.$router.push({
      //               path: '/login',
      //               query: {
      //                 activeName: 'second'
      //               }
      //             })
      //             localStorage.setItem('activeName', 'second')
      //           }
      //         })
      //       }).catch(() => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: '已取消删除'
      //         // })
      //       })
      //     } else {
      //       this.$confirm(res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //         // this.$message({
      //         //   type: 'success',
      //         //   message: '删除成功!'
      //         // });
      //       }).catch(() => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: '已取消删除'
      //         // });
      //       })
      //     }
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消输入'
      //   })
      // })

      this.query2.email = '20210425修改'
      this.query2.entName = localStorage.getItem('reportName')
      createVeryEasy(this.query2).then(res => {
        // console.log(res)
        if (res.data.code === 210) {
          this.msg = res.data.msg
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
            this.query2.pay = true
            createVeryEasy(this.query2).then(res => {
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // })
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'second')
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // })
                  this.$router.go(0)
                })
              } else {
                this.$notify({
                  title: '成功',
                  message: '可在线生成并查看',
                  type: 'success'
                })
                this.$router.push({
                  path: '/login',
                  query: {
                    activeName: 'second'
                  }
                })
                localStorage.setItem('activeName', 'second')
              }
            })
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // })
          })
        } else {
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
        }
      })
    },
    toQyslbp() {
      // this.$prompt('请输入邮箱', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   inputErrorMessage: '邮箱格式不正确'
      // }).then(({ value }) => {
      //   const arr = ['0-0', '0-5', '3-0', '5-0', '5-1', '7-0', '7-1', '11-2', '11-3', '11-4']
      //   // var rand = ''
      //   // for (var i = 0; i < 8; i++) {
      //   //   rand += Math.floor(Math.random() * 10)
      //   // }
      //   // const reportNum = Date.now() + rand
      //   this.query3.email = value
      //   this.query3.entName = localStorage.getItem('reportName')
      //   this.query3.dataKey = arr.toString()
      //   // this.query3.reportNum = reportNum
      //   this.query3.type = 'xd'
      //   createVeryEasypdf(this.query3).then(res => {
      //     // console.log(res)
      //     if (res.data.code === 210) {
      //       this.msg = res.data.msg
      //       this.$confirm(res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //         // this.$message({
      //         //   type: 'success',
      //         //   message: '删除成功!'
      //         // })
      //         this.query3.pay = true
      //         createVeryEasypdf(this.query3).then(res => {
      //           if (res.data.code === 220) {
      //             this.$confirm('余额不足，是否前往充值？', '提示', {
      //               confirmButtonText: '确定',
      //               cancelButtonText: '取消',
      //               type: 'warning'
      //             }).then(() => {
      //               // this.$message({
      //               //   type: 'success',
      //               //   message: '删除成功!'
      //               // })
      //               this.$router.push('/login')
      //               localStorage.setItem('activeName', 'second')
      //             }).catch(() => {
      //               // this.$message({
      //               //   type: 'info',
      //               //   message: '已取消删除'
      //               // })
      //               this.$router.go(0)
      //             })
      //           } else {
      //             this.$notify({
      //               title: '成功',
      //               message: '可在线生成并查看',
      //               type: 'success'
      //             })
      //             this.$router.push({
      //               path: '/login',
      //               query: {
      //                 activeName: 'second'
      //               }
      //             })
      //             localStorage.setItem('activeName', 'second')
      //           }
      //         })
      //       }).catch(() => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: '已取消删除'
      //         // })
      //       })
      //     } else {
      //       this.$confirm(res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //         // this.$message({
      //         //   type: 'success',
      //         //   message: '删除成功!'
      //         // });
      //       }).catch(() => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: '已取消删除'
      //         // });
      //       })
      //     }
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消输入'
      //   })
      // })

      const arr = ['0-0', '0-5', '3-0', '5-0', '5-1', '7-0', '7-1', '11-2', '11-3', '11-4']
      // var rand = ''
      // for (var i = 0; i < 8; i++) {
      //   rand += Math.floor(Math.random() * 10)
      // }
      // const reportNum = Date.now() + rand
      this.query3.email = '20210425修改'
      this.query3.entName = localStorage.getItem('reportName')
      this.query3.dataKey = arr.toString()
      // this.query3.reportNum = reportNum
      this.query3.type = 'xd'
      createVeryEasypdf(this.query3).then(res => {
        // console.log(res)
        if (res.data.code === 210) {
          this.msg = res.data.msg
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
            this.query3.pay = true
            createVeryEasypdf(this.query3).then(res => {
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // })
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'second')
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // })
                  this.$router.go(0)
                })
              } else {
                this.$notify({
                  title: '成功',
                  message: '可在线生成并查看',
                  type: 'success'
                })
                this.$router.push({
                  path: '/login',
                  query: {
                    activeName: 'second'
                  }
                })
                localStorage.setItem('activeName', 'second')
              }
            })
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // })
          })
        } else {
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
        }
      })
    },

    // 企业商调版
    toQysdb() {
      this.outerVisible = true
    },

    // 尽调版
    toJdb() {
      this.query4.entName = localStorage.getItem('reportName')
      authBookC(this.query4).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          // console.log(123)
          this.ReportJdb = true
        }
        if (res.data.code === 201) {
          // console.log('上传图片')
          this.ReportSq = true
        }
        if (res.data.code === 202) {
          // console.log('等待审核')
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        }
      })
    },
    toJdbw() {
      // console.log('尽调版word')
      this.reportJword = true
    },
    toJdbp() {
      // console.log('尽调版pdf')
      this.reportJpdf = true
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview(file) {
      // console.log(file)
    },
    handleSuccess(response, file, fileList) {
      // console.log(response.result.file)
      this.arr.push(response.result.file)
      this.query5.path = this.arr.toString()
      this.query5.entName = localStorage.getItem('reportName')
      // console.log(this.query5.path)
      authBook(this.query5).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        }
      })
    },
    submitUpload(element, index) {
      this.$refs.upload.submit()
      this.ReportSq = false
    },
    down() {
      window.open(`https://api.meirixindong.com/Static/AuthBookModel/auth.zip`, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  height: 47px;
  width: 100%;
  margin-top: 20px;

  .img {
    display: block;
    width: 108px;
    height: 47px;
    margin-left: 60px;
  }
}

.cont {
  width: 1200px;
  // height: 2200px;
  margin: auto;

  .cont-list {
    width: 100%;
    border-bottom: 1px solid #E3E3E3;
    padding: 16px 20px 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left {
      .name {
        display: flex;
        justify-content: start;
        padding-bottom: 10px;
        color: #525252;

        h2 {
          color: #428bca;
          font-weight: 500;
          font-size: 18px;
          cursor: pointer;
        }
      }

      .desc {
        padding-bottom: 10px;
        font-size: 14px;
        color: #525252;
      }
    }

    .right {
      display: flex;
      flex-direction: row;
      justify-content: start;
      margin: 15px 40px 0 0;

      .jkong {
        cursor: pointer;
        height: 28px;
        background-color: orange;
        color: #FFFFFF;
        padding: 5px 18px;
        border-radius: 5px;
        margin-right: 15px;
      }

      .jkong1 {
        cursor: pointer;
        height: 28px;
        background-color: #64C09B;
        color: #FFFFFF;
        padding: 5px 18px;
        border-radius: 5px;
        margin-right: 15px;
      }

      .jkong2 {
        cursor: pointer;
        height: 28px;
        background-color: gray;
        color: #FFFFFF;
        padding: 5px 18px;
        border-radius: 5px;
        margin-right: 15px;
      }

      .sqing {
        cursor: pointer;
        height: 28px;
        background: #3389CA;
        color: #FFFFFF;
        padding: 5px 18px;
        border-radius: 5px;
      }
    }
  }
}

.pagination {
  width: 1200px;
  margin: auto;
  margin-top: 25px;
}

.reportBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-book-wrapper {
  width: 100%;
  min-height: 150px;
}

</style>
