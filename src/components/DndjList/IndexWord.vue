<template>
  <div>
    <h4>支持已有文本材料内容智能提取完成报告</h4>
    <div class="demo-image__preview" style="margin-bottom:15px;margin-left:130px">
      <el-image
        style="width: 360px; height: 175px"
        :src="require('../../assets/ocr.png')"
        :preview-src-list="srcList"
      />
    </div>
    <div class="box">
      <div style="margin:20px 0">1 基本信息</div>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.1   实际控制人</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess2"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.2	历史沿革及重大事项</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess3"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.3	法人对外投资</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess4"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.4	法人对外任职</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess5"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.5	企业对外投资</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess6"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.6	主要分支机构</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess7"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">1.7	银行信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess8"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2 公司概况</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess8"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">2.1	招投标信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess9"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.2	购地信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess10"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.3	土地公示</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess11"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.4	土地转让</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess12"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.5	建筑资质证书</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess13"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.6	建筑工程项目</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess14"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.7	债券信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess15"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.8	网站信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess16"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.9	微博</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess17"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">2.10	新闻舆情</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess18"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">3 团队与招聘</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess18"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">3.1	近三年团队人数变化率</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess19"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">3.2	专业注册人员</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess20"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">3.3	团队招聘</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess21"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">4 财务总览</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess21"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">5 业务概况</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess21"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">6 创新能力</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess21"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">6.1	专利</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess22"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">6.2	软件著作权</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess23"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">6.3	商标</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess24"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">6.4	作品著作权</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess25"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">6.5	证书资质</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess26"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7 税务信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess26"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">7.1	纳税信用等级</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess27"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7.2	税务许可信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess28"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7.3	认证登记信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess29"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7.4	非正常用户信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess30"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7.5	欠税信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess31"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">7.6	重大税收违法</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess32"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">8 行政管理信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess32"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">8.1	行政许可信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess33"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">8.2	行政处罚信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess34"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">9 环保信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess34"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">9.1	环保处罚</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess35"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">9.2	重点监控企业名单</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess36"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">9.3	环保企业自行监测结果</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess37"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">9.4	环评公示数据</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess38"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">10 海关信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess38"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">10.1	海关基本信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess39"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">10.2	海关许可</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess40"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">10.3	海关信用</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess41"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">10.4	海关处罚</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess42"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11 一行两会信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess42"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">11.1	央行行政处罚</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess43"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11.2	银保监会处罚公示</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess44"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11.3	证监处罚公示</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess45"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11.4	证监会许可信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess46"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11.5 外汇局处罚</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess47"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">11.6 外汇局许可</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess48"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12 司法涉诉与抵质押信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess48"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">12.1	法院公告</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess49"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.2	开庭公告</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess50"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.3	裁判文书</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess51"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.4	执行公告</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess52"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.5	失信公告</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess53"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.6	被执行人信息</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess54"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.7	查封冻结扣押</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess55"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.8	抵质押信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess55"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">12.8.1 动产抵押</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess56"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.8.2 股权出质</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess57"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.8.3 对外担保</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess58"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">12.8.4 土地抵押</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess59"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">13 债务信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess59"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">13.1	应收账款</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess60"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">13.2	所有权保留</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess61"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">14 债务信息</div>
      <!-- <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess61"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </div>
    <div class="box">
      <div style="margin:20px 0">14.1	租赁登记</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess62"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">14.2	保证金质押登记</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess63"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">14.3	仓单质押</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess64"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="box">
      <div style="margin:20px 0">14.4	其他动产融资</div>
      <el-upload
        class="upload-demo"
        action="https://api.meirixindong.com/api/v1/comm/image/upload"
        :headers="myHeaders"
        :data="{type:'ocr',phone:phone}"
        :on-success="handleSuccess65"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>
<script>
import { queue } from '@/api/article'
var token = localStorage.getItem('token')
export default {
  name: 'IndexWord',
  data() {
    return {
      srcList: [
        require('../../assets/ocr.png')
      ],
      phone: '',
      token: '',
      myHeaders: { Authorization: token },
      query: {
        phone: '',
        reportNum: '',
        catalogueNum: '',
        catalogueName: '',
        type: 'word',
        filename: ''
      },
      arr1: [],
      arr2: [],
      arr3: [],
      arr4: [],
      arr5: [],
      arr6: [],
      arr7: [],
      arr8: [],
      arr9: [],
      arr10: [],
      arr11: [],
      arr12: [],
      arr13: [],
      arr14: [],
      arr15: [],
      arr16: [],
      arr17: [],
      arr18: [],
      arr19: [],
      arr20: [],
      arr21: [],
      arr22: [],
      arr23: [],
      arr24: [],
      arr25: [],
      arr26: [],
      arr27: [],
      arr28: [],
      arr29: [],
      arr30: [],
      arr31: [],
      arr32: [],
      arr33: [],
      arr34: [],
      arr35: [],
      arr36: [],
      arr37: [],
      arr38: [],
      arr39: [],
      arr40: [],
      arr41: [],
      arr42: [],
      arr43: [],
      arr44: [],
      arr45: [],
      arr46: [],
      arr47: [],
      arr48: [],
      arr49: [],
      arr50: [],
      arr51: [],
      arr52: [],
      arr53: [],
      arr54: [],
      arr55: [],
      arr56: [],
      arr57: [],
      arr58: [],
      arr59: [],
      arr60: [],
      arr61: [],
      arr62: [],
      arr63: [],
      arr64: [],
      arr65: []
    }
  },
  created() {
    this.phone = localStorage.getItem('phone')
    this.query.phone = localStorage.getItem('phone')
    // console.log(Date.now())
    var rand = ''
    for (var i = 0; i < 8; i++) {
      rand += Math.floor(Math.random() * 10)
    }
    // console.log(rand)
    const reportNum = Date.now() + rand
    this.query.reportNum = reportNum
    localStorage.setItem('reportNum', reportNum)
    // console.log(this.query.reportNum)
    // this.$emit('reportNum', reportNum)
  },
  methods: {
    handleRemove1(file, fileList) {
    //   console.log(file, fileList)
    },
    handleSuccess1(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1
      this.query.catalogueName = '基本信息'
      //   console.log(response.result.file)
      //   console.log(typeof (response.result.file))
      this.arr1.push(response.result.file)
      //   console.log(this.arr1.toString())
      this.query.filename = this.arr1.toString()
      //   console.log(JSON.parse(response.result))
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess2(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.1
      this.query.catalogueName = '实际控制人'
      this.arr2.push(response.result.file)
      this.query.filename = this.arr2.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess3(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.2
      this.query.catalogueName = '历史沿革及重大事项'
      this.arr3.push(response.result.file)
      this.query.filename = this.arr3.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess4(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.3
      this.query.catalogueName = '法人对外投资'
      this.arr4.push(response.result.file)
      this.query.filename = this.arr4.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess5(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.4
      this.query.catalogueName = '法人对外任职'
      this.arr5.push(response.result.file)
      this.query.filename = this.arr5.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess6(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.5
      this.query.catalogueName = '企业对外投资'
      this.arr6.push(response.result.file)
      this.query.filename = this.arr6.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess7(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.6
      this.query.catalogueName = '主要分支机构'
      this.arr7.push(response.result.file)
      this.query.filename = this.arr7.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess8(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 1.7
      this.query.catalogueName = '银行信息'
      this.arr8.push(response.result.file)
      this.query.filename = this.arr8.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess9(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.1
      this.query.catalogueName = '招投标信息'
      this.arr9.push(response.result.file)
      this.query.filename = this.arr9.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess10(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.2
      this.query.catalogueName = '购地信息'
      this.arr10.push(response.result.file)
      this.query.filename = this.arr10.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess11(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.3
      this.query.catalogueName = '土地公示'
      this.arr11.push(response.result.file)
      this.query.filename = this.arr11.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess12(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.4
      this.query.catalogueName = '土地转让'
      this.arr12.push(response.result.file)
      this.query.filename = this.arr12.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess13(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.5
      this.query.catalogueName = '建筑资质证书'
      this.arr13.push(response.result.file)
      this.query.filename = this.arr13.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess14(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.6
      this.query.catalogueName = '建筑工程项目'
      this.arr14.push(response.result.file)
      this.query.filename = this.arr14.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess15(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.7
      this.query.catalogueName = '债券信息'
      this.arr15.push(response.result.file)
      this.query.filename = this.arr15.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess16(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.8
      this.query.catalogueName = '网站信息'
      this.arr16.push(response.result.file)
      this.query.filename = this.arr16.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess17(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.9
      this.query.catalogueName = '微博'
      this.arr17.push(response.result.file)
      this.query.filename = this.arr17.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess18(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 2.10
      this.query.catalogueName = '新闻舆情'
      this.arr18.push(response.result.file)
      this.query.filename = this.arr18.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess19(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 3.1
      this.query.catalogueName = '近三年团队人数变化率'
      this.arr19.push(response.result.file)
      this.query.filename = this.arr19.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess20(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 3.2
      this.query.catalogueName = '专业注册人员'
      this.arr20.push(response.result.file)
      this.query.filename = this.arr20.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess21(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 3.3
      this.query.catalogueName = '团队招聘'
      this.arr21.push(response.result.file)
      this.query.filename = this.arr21.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess22(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 6.1
      this.query.catalogueName = '专利'
      this.arr22.push(response.result.file)
      this.query.filename = this.arr22.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess23(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 6.2
      this.query.catalogueName = '软件著作权'
      this.arr23.push(response.result.file)
      this.query.filename = this.arr23.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess24(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 6.3
      this.query.catalogueName = '商标'
      this.arr24.push(response.result.file)
      this.query.filename = this.arr24.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess25(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 6.4
      this.query.catalogueName = '作品著作权'
      this.arr25.push(response.result.file)
      this.query.filename = this.arr25.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess26(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 6.5
      this.query.catalogueName = '证书资质'
      this.arr26.push(response.result.file)
      this.query.filename = this.arr26.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess27(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.1
      this.query.catalogueName = '纳税信用等级'
      this.arr27.push(response.result.file)
      this.query.filename = this.arr27.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess28(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.2
      this.query.catalogueName = '税务许可信息'
      this.arr28.push(response.result.file)
      this.query.filename = this.arr28.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess29(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.3
      this.query.catalogueName = '认证登记信息'
      this.arr29.push(response.result.file)
      this.query.filename = this.arr29.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess30(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.4
      this.query.catalogueName = '非正常用户信息'
      this.arr30.push(response.result.file)
      this.query.filename = this.arr30.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess31(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.5
      this.query.catalogueName = '欠税信息'
      this.arr31.push(response.result.file)
      this.query.filename = this.arr31.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess32(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 7.6
      this.query.catalogueName = '重大税收违法'
      this.arr32.push(response.result.file)
      this.query.filename = this.arr32.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess33(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 8.1
      this.query.catalogueName = '行政许可信息'
      this.arr33.push(response.result.file)
      this.query.filename = this.arr33.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess34(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 8.2
      this.query.catalogueName = '行政处罚信息'
      this.arr34.push(response.result.file)
      this.query.filename = this.arr34.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess35(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 9.1
      this.query.catalogueName = '环保处罚'
      this.arr35.push(response.result.file)
      this.query.filename = this.arr35.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess36(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 9.2
      this.query.catalogueName = '重点监控企业名单'
      this.arr36.push(response.result.file)
      this.query.filename = this.arr36.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess37(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 9.3
      this.query.catalogueName = '环保企业自行监测结果'
      this.arr37.push(response.result.file)
      this.query.filename = this.arr37.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess38(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 9.4
      this.query.catalogueName = '环评公示数据'
      this.arr38.push(response.result.file)
      this.query.filename = this.arr38.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess39(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 10.1
      this.query.catalogueName = '海关基本信息'
      this.arr39.push(response.result.file)
      this.query.filename = this.arr39.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess40(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 10.2
      this.query.catalogueName = '海关许可'
      this.arr40.push(response.result.file)
      this.query.filename = this.arr40.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess41(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 10.3
      this.query.catalogueName = '海关信用'
      this.arr41.push(response.result.file)
      this.query.filename = this.arr41.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess42(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 10.4
      this.query.catalogueName = '海关处罚'
      this.arr42.push(response.result.file)
      this.query.filename = this.arr42.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess43(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.1
      this.query.catalogueName = '央行行政处罚'
      this.arr43.push(response.result.file)
      this.query.filename = this.arr43.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess44(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.2
      this.query.catalogueName = '银保监会处罚公示'
      this.arr44.push(response.result.file)
      this.query.filename = this.arr44.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess45(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.3
      this.query.catalogueName = '证监处罚公示'
      this.arr45.push(response.result.file)
      this.query.filename = this.arr45.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess46(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.4
      this.query.catalogueName = '证监会许可信息'
      this.arr46.push(response.result.file)
      this.query.filename = this.arr46.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess47(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.5
      this.query.catalogueName = '外汇局处罚'
      this.arr47.push(response.result.file)
      this.query.filename = this.arr47.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess48(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 11.6
      this.query.catalogueName = '外汇局许可'
      this.arr48.push(response.result.file)
      this.query.filename = this.arr48.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess49(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.1
      this.query.catalogueName = '法院公告'
      this.arr49.push(response.result.file)
      this.query.filename = this.arr49.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess50(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.2
      this.query.catalogueName = '开庭公告'
      this.arr50.push(response.result.file)
      this.query.filename = this.arr50.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess51(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.3
      this.query.catalogueName = '裁判文书'
      this.arr51.push(response.result.file)
      this.query.filename = this.arr51.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess52(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.4
      this.query.catalogueName = '执行公告'
      this.arr52.push(response.result.file)
      this.query.filename = this.arr52.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess53(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.5
      this.query.catalogueName = '失信公告'
      this.arr53.push(response.result.file)
      this.query.filename = this.arr53.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess54(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.6
      this.query.catalogueName = '被执行人信息'
      this.arr54.push(response.result.file)
      this.query.filename = this.arr54.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess55(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 12.7
      this.query.catalogueName = '查封冻结扣押'
      this.arr55.push(response.result.file)
      this.query.filename = this.arr55.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess56(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = '12.8.1'
      this.query.catalogueName = '动产抵押'
      this.arr56.push(response.result.file)
      this.query.filename = this.arr56.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess57(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = '12.8.2'
      this.query.catalogueName = '股权出质'
      this.arr57.push(response.result.file)
      this.query.filename = this.arr57.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess58(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = '12.8.3'
      this.query.catalogueName = '对外担保'
      this.arr58.push(response.result.file)
      this.query.filename = this.arr58.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess59(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = '12.8.4'
      this.query.catalogueName = '土地抵押'
      this.arr59.push(response.result.file)
      this.query.filename = this.arr59.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess60(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 13.1
      this.query.catalogueName = '应收账款'
      this.arr60.push(response.result.file)
      this.query.filename = this.arr60.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess61(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 13.2
      this.query.catalogueName = '所有权保留'
      this.arr61.push(response.result.file)
      this.query.filename = this.arr61.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess62(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 14.1
      this.query.catalogueName = '租赁登记'
      this.arr62.push(response.result.file)
      this.query.filename = this.arr62.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess63(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 14.2
      this.query.catalogueName = '保证金质押登记'
      this.arr63.push(response.result.file)
      this.query.filename = this.arr63.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess64(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 14.3
      this.query.catalogueName = '仓单质押'
      this.arr64.push(response.result.file)
      this.query.filename = this.arr64.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    },
    handleSuccess65(response, file, fileList) {
    //   console.log(response, file, fileList)
      this.query.catalogueNum = 14.4
      this.query.catalogueName = '其他动产融资'
      this.arr65.push(response.result.file)
      this.query.filename = this.arr65.toString()
      queue(this.query).then(res => {
        // console.log(res)
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
