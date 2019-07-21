import axios from 'axios'

const rootUrl = 'https://cac.thoughtworks.cn:3000/photos'

const actions = {
  get: (query) => axios.get(`${rootUrl}/${query}`)
}

export default actions
