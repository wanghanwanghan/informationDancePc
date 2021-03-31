// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 新闻舆情
export function getSearchNews(data) {
  return request({
    url: '/api/v1/qcc/getSearchNews',
    method: 'post',
    data
  })
}
// 新闻舆情详情
export function getSearchNewsDetail(data) {
  return request({
    url: '/api/v1/qcc/getSearchNewsDetail',
    method: 'post',
    data
  })
}
// 网站信息
export function getCompanyWebSite(data) {
  return request({
    url: '/api/v1/qcc/getCompanyWebSite',
    method: 'post',
    data
  })
}
// 微博
export function getMicroblogGetList(data) {
  return request({
    url: '/api/v1/qcc/getMicroblogGetList',
    method: 'post',
    data
  })
}
