// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 股权出质
export function getStockPledgeList(data) {
  return request({
    url: '/api/v1/qcc/getStockPledgeList',
    method: 'post',
    data
  })
}
// 动产抵押
export function getChattelMortgage(data) {
  return request({
    url: '/api/v1/qcc/getChattelMortgage',
    method: 'post',
    data
  })
}
// 土地抵押
export function getLandMortgageList(data) {
  return request({
    url: '/api/v1/qcc/getLandMortgageList',
    method: 'post',
    data
  })
}
// 土地抵押详情
export function getLandMortgageListDetail(data) {
  return request({
    url: '/api/v1/qcc/getLandMortgageListDetail',
    method: 'post',
    data
  })
}
// 对外担保
export function getAnnualReport(data) {
  return request({
    url: '/api/v1/qcc/getAnnualReport',
    method: 'post',
    data
  })
}
