// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 商标
export function getPbcparty(data) {
  return request({
    url: '/api/v1/fh/getPbcparty',
    method: 'post',
    data
  })
}
// 银保监会处罚公示
export function getPbcpartyCbrc(data) {
  return request({
    url: '/api/v1/fh/getPbcpartyCbrc',
    method: 'post',
    data
  })
}
// 证监处罚公示
export function getPbcpartyCsrcChufa(data) {
  return request({
    url: '/api/v1/fh/getPbcpartyCsrcChufa',
    method: 'post',
    data
  })
}
// 证监会许可批复等级
export function getPbcpartyCsrcXkpf(data) {
  return request({
    url: '/api/v1/fh/getPbcpartyCsrcXkpf',
    method: 'post',
    data
  })
}
// 外汇局处罚
export function getSafeChufa(data) {
  return request({
    url: '/api/v1/fh/getSafeChufa',
    method: 'post',
    data
  })
}
// 外汇局许可
export function getSafeXuke(data) {
  return request({
    url: '/api/v1/fh/getSafeXuke',
    method: 'post',
    data
  })
}
