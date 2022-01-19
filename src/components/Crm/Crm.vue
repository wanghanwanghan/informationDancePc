<template>
  <div>
    <div id="biaoti" >
      每日信动SCRM一站式客户运营管理平台
    </div>
    <div style="width: 1350px;margin: auto;height: 60px;">
      <div class="gongneng">市场获客提升</div>
      <div class="gongneng">营销转化增长</div>
      <div class="gongneng">高效便捷运营</div>
    </div>
    <div style="padding: 50px 75px;width: auto;height: 320px;">
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <div class="wenan2">寻找目标</div></div>
          <div class="youbian" >》 </div>
        </div>
        <div class = 'wenan'>海量企业库</div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <div class="wenan2">行业聚焦</div>
          </div>
          <div class="youbian" >》 </div>
        </div>
        <div class = 'wenan'>行业四级分类</div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <div class="wenan2">销售分配</div>
          </div>
          <div class="youbian" >》 </div>
        </div>
        <div class = 'wenan'>准确匹配销售</div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <div class="wenan2">线索公海</div>
          </div>
          <div class="youbian" >》 </div>
        </div>
        <div class = 'wenan' >精准线索挖掘</div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <div class="wenan2" >深度转化</div>
          </div>
          <div class="youbian" >》 </div>
        </div>
        <div class = 'wenan'>高粘性复合产品</div>
      </div>
      <div class="gezi">
        <div class="shangfang" style="width: 150px;">
          <div class="zuofu" >
            <div class="wenan2" >成单复购</div>
          </div>
        </div>
        <div class = 'wenan'>其它精细运营</div>
      </div>
    </div>
    <div class="footwenan">敬请期待</div>
  </div>
</template>

<script>
export default {
name: "Crm"
}
</script>

<style scoped>
#biaoti {
  font-size: 40px;
  font: bold;
  color: #1b2559;
  text-align: center;
  width: 100%;
  height: 150px;
  line-height: 100px
}
.gongneng{
  background-color: blue;
  width: 300px;
  float: left;
  line-height: 50px;
  color: white;
  text-align: center;
  height: 50px;
  margin-right: 72px;
  margin-left: 72px;
  font-size: 20px;
  letter-spacing: 7px;
}
.zuofu{
  float: left;
  width: 140px;
  height: 140px;
  text-align: center;
  box-shadow: 3px 3px 10px 0px #bbd0e5;
  line-height: 140px;
  color: #1b2559;
}
.youbian{
  height: 140px;
  line-height: 140px;
  text-align: center;
  color: #a9a4a4;
  font-size: 28px;
  font-weight: bolder;
}
.shangfang{
  width: 210px;
  height: 160px;
}
.gezi{
  float: left;
}
.wenan{
  width: 135px;
  padding-top: 10px;
  color: gray;
  text-align: center;
  letter-spacing: 2px;
}
.wenan2{
  width: 60px;
  height: 60px;
  font-size: 23px;
  margin: 40px 40px;
  letter-spacing: 7px;
  line-height: 29px;
  color: #233387;
}
.footwenan{
  line-height: 60px;
  box-shadow: rgb(187 208 229) 3px 3px 10px 0px;
  height: 60px;
  width: 1203px;
  color: #2525a3;
  font-size: 23px;
  letter-spacing: 7px;
  text-align: center;
  margin: 0px 10px 10px 73px;
}

</style>
