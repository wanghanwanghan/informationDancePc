// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 商标
export function getTmSearch(data) {
  return request({
    url: '/api/v1/qcc/getTmSearch',
    method: 'post',
    data
  })
}
// 商标详情
export function getTmSearchDetail(data) {
  return request({
    url: '/api/v1/qcc/getTmSearchDetail',
    method: 'post',
    data
  })
}
// 专利
export function getPatentV4Search(data) {
  return request({
    url: '/api/v1/qcc/getPatentV4Search',
    method: 'post',
    data
  })
}
// 专利详情
export function getPatentV4SearchDetail(data) {
  return request({
    url: '/api/v1/qcc/getPatentV4SearchDetail',
    method: 'post',
    data
  })
}
// 软件著作权
export function getSearchSoftwareCr(data) {
  return request({
    url: '/api/v1/qcc/getSearchSoftwareCr',
    method: 'post',
    data
  })
}
// 作品著作权
export function getSearchCopyRight(data) {
  return request({
    url: '/api/v1/qcc/getSearchCopyRight',
    method: 'post',
    data
  })
}
// 企业证书查询
export function getSearchCertification(data) {
  return request({
    url: '/api/v1/qcc/getSearchCertification',
    method: 'post',
    data
  })
}
// 企业证书查询详情
export function getSearchCertificationDetail(data) {
  return request({
    url: '/api/v1/qcc/getSearchCertificationDetail',
    method: 'post',
    data
  })
}
