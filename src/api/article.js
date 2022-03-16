// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 获取验证码
export function getCodes(data) {
  return request({
    url: '/api/v1/comm/create/sms/verifyCode',
    method: 'post',
    data
  })
}

// 登录
export function Login(data) {
  return request({
    url: '/api/v1/user/login',
    method: 'post',
    data
  })
}

// 注册
export function Zreg(data) {
  return request({
    url: '/api/v1/user/reg',
    method: 'post',
    data
  })
}

// 搜索获取公司列表
export function getEntList(data) {
  return request({
    url: '/api/v1/qcc/getEntList',
    method: 'post',
    data
  })
}

// 报告深度word
export function createDeepEasy(data) {
  return request({
    url: '/api/v1/export/word/createDeep',
    method: 'post',
    data
  })
}

// 报告深度pdf
export function createDeepEasyp(data) {
  return request({
    url: '/api/v1/export/pdf/createDeep',
    method: 'post',
    data
  })
}

// 报告企业速览版word
export function createVeryEasy(data) {
  return request({
    url: '/api/v1/export/word/createVeryEasy',
    method: 'post',
    data
  })
}

// 报告企业税务版word
export function createTwoTable(data) {
  return request({
    url: '/api/v1/export/word/createTwoTable',
    method: 'post',
    data
  })
}

// 报告企业速览版pdf
export function createVeryEasypdf(data) {
  return request({
    url: '/api/v1/export/pdf/createVeryEasy',
    method: 'post',
    data
  })
}

// 报告 生成简版报告 pdf版
export function createEasy(data) {
  return request({
    url: '/api/v1/export/pdf/createEasy',
    method: 'post',
    data
  })
}

// 报告 生成简版报告 word版
export function createEasyWord(data) {
  return request({
    url: '/api/v1/export/word/createEasy',
    method: 'post',
    data
  })
}

// 下载列表
export function reportlist(data) {
  return request({
    url: '/api/v1/user/report/list',
    method: 'post',
    data
  })
}

// 智能监控
export function supervisor(data) {
  return request({
    url: '/api/v1/user/get/supervisor',
    method: 'post',
    data
  })
}

export function supervisorExportExcel(data) {
  return request({
    url: '/api/v1/user/get/supervisorListByExcel',
    method: 'post',
    data
  })
}

// 阈值获取
export function supervisorLimit(data) {
  return request({
    url: '/api/v1/user/get/supervisorLimit',
    method: 'post',
    data
  })
}

// 提交阈值
export function supervisorLimitT(data) {
  return request({
    url: '/api/v1/user/edit/supervisorLimit',
    method: 'post',
    data
  })
}

// 图片识别
export function queue(data) {
  return request({
    url: '/api/v1/comm/ocr/queue',
    method: 'post',
    data
  })
}

// 监控企业
export function Supervisor(data) {
  return request({
    url: '/api/v1/user/create/supervisor',
    method: 'post',
    data
  })
}

// 主营产品
export function getProductStandard(data) {
  return request({
    url: '/api/v1/xd/getProductStandard',
    method: 'post',
    data
  })
}

// 土地资产线索
export function getAssetLeads(data) {
  return request({
    url: '/api/v1/xd/getAssetLeads',
    method: 'post',
    data
  })
}

// 财务资产
export function getThreeYearsData(data) {
  return request({
    url: '/api/v1/qq/getThreeYearsData',
    method: 'post',
    data
  })
}

// 我的
export function list(data) {
  return request({
    url: '/api/v1/user/purchase/list',
    method: 'post',
    data
  })
}

// 充值金额
export function goods(data) {
  return request({
    url: '/api/v1/user/purchase/goods',
    method: 'post',
    data
  })
}

// 生成充值二维码
export function Sando(data) {
  return request({
    url: '/admin/v1/user/purchase/do',
    method: 'post',
    data
  })
}

// 消费记录
export function Xlist(data) {
  return request({
    url: '/api/v1/user/pay/list',
    method: 'post',
    data
  })
}

// 财务数据授权书上传
export function authBook(data) {
  return request({
    url: '/api/v1/user/create/authBook',
    method: 'post',
    data
  })
}

// 审核进度
export function authBookD(data) {
  return request({
    url: '/api/v1/user/get/authBook',
    method: 'post',
    data
  })
}

// 检查用户上没上传过企业授权书
export function authBookC(data) {
  return request({
    url: '/api/v1/user/check/authBook',
    method: 'post',
    data
  })
}

// 通过orderId查询充值状态
export function check(data) {
  return request({
    url: '/api/v1/user/purchase/check',
    method: 'post',
    data
  })
}

// 企业授权认证
export function getAuthentication(data) {
  return request({
    url: '/api/v1/zw/getAuthentication',
    method: 'post',
    data
  })
}

// 企业税务基本信息查询
export function getEssential(data) {
  return request({
    url: '/api/v1/zw/getEssential',
    method: 'post',
    data
  })
}

// 企业所得税-月（季）度申报表查询
export function getIncometaxMonthlyDeclaration(data) {
  return request({
    url: '/api/v1/zw/getIncometaxMonthlyDeclaration',
    method: 'post',
    data
  })
}

// 企业所得税-年报查询
export function getIncometaxAnnualReport(data) {
  return request({
    url: '/api/v1/zw/getIncometaxAnnualReport',
    method: 'post',
    data
  })
}

// 利润表 --年报查询
export function getFinanceIncomeStatementAnnualReport(data) {
  return request({
    url: '/api/v1/zw/getFinanceIncomeStatementAnnualReport',
    method: 'post',
    data
  })
}

// 利润表查询
export function getFinanceIncomeStatement(data) {
  return request({
    url: '/api/v1/zw/getFinanceIncomeStatement',
    method: 'post',
    data
  })
}

// 资产负债表-年度查询
export function getFinanceBalanceSheetAnnual(data) {
  return request({
    url: '/api/v1/zw/getFinanceBalanceSheetAnnual',
    method: 'post',
    data
  })
}

// 资产负债表查询
export function getFinanceBalanceSheet(data) {
  return request({
    url: '/api/v1/zw/getFinanceBalanceSheet',
    method: 'post',
    data
  })
}

// 增值税申报表查询
export function getVatReturn(data) {
  return request({
    url: '/api/v1/zw/getVatReturn',
    method: 'post',
    data
  })
}

//
export function getPersonSifa(data) {
  return request({
    url: 'api/v1/fh/getPersonSifa',
    method: 'post',
    data
  })
}

//
export function getPersonSifaDetail(data) {
  return request({
    url: 'api/v1/fh/getPersonSifaDetail',
    method: 'post',
    data
  })
}

// 龙信 近n年财务数据，不需授权
export function getFinanceNotAuth(data) {
  return request({
    url: 'api/v1/lx/getFinanceNotAuth',
    method: 'post',
    data
  })
}

// 龙信 近n年财务数据，需授权
export function getFinanceNeedAuth(data) {
  return request({
    url: 'api/v1/lx/getFinanceNeedAuth',
    method: 'post',
    data
  })
}

// 龙信 近n年财务数据，需授权
export function getFinanceNotAuthNew(data) {
  return request({
    url: 'api/v1/lx/getFinanceNotAuthNew',
    method: 'post',
    data
  })
}

// 龙信 近n年财务数据，需授权
export function getFinanceNeedAuthNew(data) {
  return request({
    url: 'api/v1/lx/getFinanceNeedAuthNew',
    method: 'post',
    data
  })
}

// 修改密码
export function setUserPassword(data) {
  return request({
    url: 'api/v1/user/setLoginPassword',
    method: 'post',
    data
  })
}
// 报告深度word
export function directUrl(data) {
  return request({
    url: 'api/v1/zc/directUrl',
    method: 'post',
    data
  })
}

