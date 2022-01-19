<template>
  <div>
    <div id="biaoti" >
      每日信动SCRM一站式客户运营管理平台
    </div>
    <div style="width: 90%; margin: 0% 5%; height: 60px;">
      <div class="gongneng" style="float: left;margin-left: 0%;">市场获客提升</div>
      <div class="gongneng">营销转化增长</div>
      <div class="gongneng" style="margin-right: 0;float: right;">高效便捷运营</div>
    </div>
    <div style="margin: 2% 5%;width: 90%;height: 260px;">
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <p class="wenan2">寻找目标</p>
          </div>
          <div class = 'wenan'>海量企业库</div>
        </div>
        <div class="youbian" >》 </div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <p class="wenan2">行业聚焦</p>
          </div>
          <div class = 'wenan'>行业四级分类</div>
        </div>
        <div class="youbian" >》 </div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <p class="wenan2">销售分配</p>
          </div>
          <div class = 'wenan'>准确匹配销售</div>
        </div>
        <div class="youbian" >》 </div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <p class="wenan2">线索公海</p>
          </div>
          <div class = 'wenan' >精准线索挖掘</div>
        </div>
        <div class="youbian" >》 </div>
      </div>
      <div class="gezi">
        <div class="shangfang">
          <div class="zuofu" >
            <p class="wenan2" >深度转化</p>
          </div>
          <div class = 'wenan'>高粘性复合产品</div>
        </div>
        <div class="youbian" >》 </div>
      </div>
      <div class="gezi" style="width: 11%;float: right;">
        <div class="shangfang" style="width: 150px;">
          <div class="zuofu" >
            <p class="wenan2" >成单复购</p>
          </div>
          <div class = 'wenan'>其它精细运营</div>
        </div>
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
  width: 27%;
  float: left;
  line-height: 50px;
  color: white;
  text-align: center;
  height: 50px;
  margin: 0% 4.7%;
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
  padding: 25%;
}
.youbian{
  height: 10%;
  line-height: 140px;
  text-align: center;
  color: #a9a4a4;
  font-size: 28px;
  float: left;
  font-weight: bolder;
}
.shangfang{
  width: 80%;
  float: left;
  height: 160px;
}
.gezi{
  float: left;
  width: 17.8%;
}
.wenan{
  width: 140px;
  padding-top: 30px;
  color: gray;
  text-align: center;
  letter-spacing: 2px;
  float: left;
}
.wenan2{
  width: 100%;
  height: 100%;
  font-size: 23px;
  letter-spacing: 2px;
  color: #233387;
  line-height: 100%;
  margin: 0px;
}
.footwenan{
  line-height: 60px;
  box-shadow: rgb(187 208 229) 3px 3px 10px 0px;
  height: 60px;
  width: 90%;
  color: #2525a3;
  font-size: 23px;
  letter-spacing: 7px;
  text-align: center;
  margin: 1% 5%;
}

</style>
