// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 行政许可
export function getAdministrativeLicenseList(data) {
  return request({
    url: '/api/v1/qcc/getAdministrativeLicenseList',
    method: 'post',
    data
  })
}
// 行政许可详情
export function getAdministrativeLicenseListDetail(data) {
  return request({
    url: '/api/v1/qcc/getAdministrativeLicenseListDetail',
    method: 'post',
    data
  })
}
// 行政处罚
export function getAdministrativePenaltyList(data) {
  return request({
    url: '/api/v1/qcc/getAdministrativePenaltyList',
    method: 'post',
    data
  })
}
// 行政处罚详情
export function getAdministrativePenaltyListDetail(data) {
  return request({
    url: '/api/v1/qcc/getAdministrativePenaltyListDetail',
    method: 'post',
    data
  })
}
// 环保处罚
export function getEpbparty(data) {
  return request({
    url: '/api/v1/fh/getEpbparty',
    method: 'post',
    data
  })
}
// 重点监控企业名单
export function getEpbpartyJkqy(data) {
  return request({
    url: '/api/v1/fh/getEpbpartyJkqy',
    method: 'post',
    data
  })
}
// 环保企业自行监测结果
export function getEpbpartyZxjc(data) {
  return request({
    url: '/api/v1/fh/getEpbpartyZxjc',
    method: 'post',
    data
  })
}
// 环评公示数据
export function getEpbpartyHuanping(data) {
  return request({
    url: '/api/v1/fh/getEpbpartyHuanping',
    method: 'post',
    data
  })
}
// 海关企业
export function getCustomQy(data) {
  return request({
    url: '/api/v1/fh/getCustomQy',
    method: 'post',
    data
  })
}
// 海关许可
export function getCustomXuke(data) {
  return request({
    url: '/api/v1/fh/getCustomXuke',
    method: 'post',
    data
  })
}
// 海关信用
export function getCustomCredit(data) {
  return request({
    url: '/api/v1/fh/getCustomCredit',
    method: 'post',
    data
  })
}
// 海关处罚
export function getCustomPunish(data) {
  return request({
    url: '/api/v1/fh/getCustomPunish',
    method: 'post',
    data
  })
}
