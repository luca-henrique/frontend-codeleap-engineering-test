import { takeLatest, all, call, put } from 'redux-saga/effects'
import Types from './types'
import api from 'src/service/api'
import { getLocationUser } from './actions'

export function* getMarket() {
  const response = yield call(api.get, '/petshops')
  const res = response.data
}

export function* createMarket({ data }) {
  try {
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default all([])
