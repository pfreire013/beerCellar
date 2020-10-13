import Axios, { AxiosRequestConfig } from 'axios'
import API from './API'
import qs from 'querystring'
import { newBeer } from './redux/beers/types'

const getBeers = async (pagination: number) => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: API.BASE_URL + API.PATHS.beers,
    params: { p: pagination }
  }
  const response = await Axios(request)
  return response
}

const addBeer = async (_newBeer: newBeer) => {
  const request: AxiosRequestConfig = {
    method: 'POST',
    url: API.BASE_URL + API.PATHS.beer,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(_newBeer)
  }
  const response = await Axios(request)
  return response
}

const getBeerSearch = async (name: string) => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: API.BASE_URL + API.PATHS.beers + `&name=${name}`
  }
  const response = await Axios(request)
  return response
}

const getStyles = async () => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: API.BASE_URL + API.PATHS.styles
  }
  const response = await Axios(request)
  return response
}

export default {
  getBeers,
  addBeer,
  getStyles,
  getBeerSearch
}
