// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 开庭公告
export function getKtgg(data) {
  return request({
    url: '/api/v1/fh/getKtgg',
    method: 'post',
    data
  })
}
// 开庭公告 -- 西南
export function getKtggList(data) {
  return request({
    url: '/api/v1/xd/getKtggList',
    method: 'post',
    data
  })
}
// 开庭公告详情
export function getKtggDetail(data) {
  return request({
    url: '/api/v1/fh/getKtggDetail',
    method: 'post',
    data
  })
}
// 开庭公告详情 -- 西南
export function getKtggDetailXd(data) {
  return request({
    url: '/api/v1/xd/getKtggDetail',
    method: 'post',
    data
  })
}
// 判决文书
export function getCpws(data) {
  return request({
    url: '/api/v1/fh/getCpws',
    method: 'post',
    data
  })
}

// 判决文书 -- 西南
export function getCpwsList(data) {
  return request({
    url: 'api/v1/xd/getCpwsList',
    method: 'post',
    data
  })
}
// 判决文书详情
export function getCpwsDetail(data) {
  return request({
    url: '/api/v1/fh/getCpwsDetail',
    method: 'post',
    data
  })
}

// 判决文书详情 -- 西南
export function getCpwsDetailXd(data) {
  return request({
    url: 'api/v1/xd/getCpwsDetail',
    method: 'post',
    data
  })
}
// 法院公告
export function getFygg(data) {
  return request({
    url: '/api/v1/fh/getFygg',
    method: 'post',
    data
  })
}
// 法院公告详情
export function getFyggDetail(data) {
  return request({
    url: '/api/v1/fh/getFyggDetail',
    method: 'post',
    data
  })
}
// 执行公告
export function getZxgg(data) {
  return request({
    url: '/api/v1/fh/getZxgg',
    method: 'post',
    data
  })
}
// 执行公告详情
export function getZxggDetail(data) {
  return request({
    url: '/api/v1/fh/getZxggDetail',
    method: 'post',
    data
  })
}
// 失信公告
export function getShixin(data) {
  return request({
    url: '/api/v1/fh/getShixin',
    method: 'post',
    data
  })
}
// 失信公告详情
export function getShixinDetail(data) {
  return request({
    url: '/api/v1/fh/getShixinDetail',
    method: 'post',
    data
  })
}
// 司法查封冻结扣押
export function getSifacdk(data) {
  return request({
    url: '/api/v1/fh/getSifacdk',
    method: 'post',
    data
  })
}
// 司法查封冻结扣押详情
export function getSifacdkDetail(data) {
  return request({
    url: '/api/v1/fh/getSifacdkDetail',
    method: 'post',
    data
  })
}
// 司法拍卖
export function getJudicialSaleList(data) {
  return request({
    url: '/api/v1/qcc/getJudicialSaleList',
    method: 'post',
    data
  })
}
// 司法拍卖详情
export function getJudicialSaleListDetail(data) {
  return request({
    url: '/api/v1/qcc/getJudicialSaleListDetail',
    method: 'post',
    data
  })
}
// 获取留言
export function getoneSaid(data) {
  return request({
    url: '/api/v1/user/get/oneSaid',
    method: 'post',
    data
  })
}
// 添加留言
export function createoneSaid(data) {
  return request({
    url: '/api/v1/user/create/oneSaid',
    method: 'post',
    data
  })
}
// 修改留言
export function editoneSaid(data) {
  return request({
    url: '/api/v1/user/edit/oneSaid',
    method: 'post',
    data
  })
}

// 获取专业资质/荣誉称号(高新)
export function getHighTecQualifications(data) {
  return request({
    url: '/api/v1/xd/getHighTecQualifications',
    method: 'post',
    data
  })
}
// 获取专业资质/荣誉称号(瞪羚)
export function getDengLingQualifications(data) {
  return request({
    url: '/api/v1/xd/getDengLingQualifications',
    method: 'post',
    data
  })
}
// 获取专业资质(ISO)
export function getIsoQualifications(data) {
  return request({
    url: '/api/v1/xd/getIsoQualifications',
    method: 'post',
    data
  })
}
// 获取企业规模信息
export function getEmploymenInfo(data) {
  return request({
    url: '/api/v1/xd/getEmploymenInfo',
    method: 'post',
    data
  })
}

// 获取企业的营收规模
export function getBusinessScaleInfo(data) {
  return request({
    url: '/api/v1/xd/getBusinessScaleInfo',
    method: 'post',
    data
  })
}
// 获取企业tag
export function getTagInfo(data) {
  return request({
    url: '/api/v1/xd/getTagInfo',
    method: 'post',
    data
  })
}

// 获取主营产品
export function getMainProducts(data) {
  return request({
    url: '/api/v1/xd/getMainProducts',
    method: 'post',
    data
  })
}

