// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 保证金质押登记
export function getCompanyZdwYszkdsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwBzjzydsr',
    method: 'post',
    data
  })
}
// 仓单质押登记
export function getCompanyZdwCdzydsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwCdzydsr',
    method: 'post',
    data
  })
}
// 租赁登记
export function getCompanyZdwZldjdsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwZldjdsr',
    method: 'post',
    data
  })
}
// 其他动产融资
export function getCompanyZdwQtdcdsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwQtdcdsr',
    method: 'post',
    data
  })
}
