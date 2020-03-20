import axios from '@/utils/axios'
export default {
  queryUserInfo (params) {
    return axios.post('/queryUserInfo', params).then(resp => {
      return resp
    })
  },
  queryBanners (params) {
    return axios.post('/queryBanners', params).then(resp => {
      return resp
    })
  },
  queryGrid (params) {
    return axios.post('/queryGrid', params).then(resp => {
      return resp
    })
  },
  queryDataList (params) {
    return axios.post('/queryDataList', params).then(resp => {
      return resp
    })
  },
  queryNavigate (params) {
    return axios.post('/queryNavigate', params).then(resp => {
      return resp
    })
  },
  queryNavigateContents (params) {
    return axios.post('/queryNavigateContents', params).then(resp => {
      return resp
    })
  },
}
