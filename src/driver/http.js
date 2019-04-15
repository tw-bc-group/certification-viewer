import actions from '../api'

export default {
  query: (query) => actions.get(query),
}
