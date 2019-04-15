import axios from 'axios'

const rootUrl = '/photos'

const actions = {
  get: (query) => axios.get(`${rootUrl}/${query}`)
}

export default actions
