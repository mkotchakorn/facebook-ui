import _ from 'lodash'
import moment from 'moment'

export default (context, inject) => {
  const getState = (key) => {
    return context.store.state.main[key]
  }

  const setState = (key, value) => {
    return context.store.commit('main/setState', [key, value])
  }

  inject('_', _)
  inject('getState', getState)
  inject('setState', setState)
  inject('moment', moment)
}
