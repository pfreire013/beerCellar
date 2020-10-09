import Axios, { AxiosRequestConfig } from 'axios'
import API from './API'

const getBeers = async () => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: API.BASE_URL + API.PATHS.beers,
    params: [{ p: 1 }]
  }
  const response = await Axios(request)
  return response
}

const getBeer = async (beerId: string) => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: API.BASE_URL + API.PATHS.beer + beerId
  }
  const response = await Axios(request)
  return response
}

export default {
  getBeers,
  getBeer
}
