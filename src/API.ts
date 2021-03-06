const BASE_URL = 'https://sandbox-api.brewerydb.com/v2/'
const KEY = '16425efea894091210b061870d1e9afb'

const PATHS = {
  beers: `beers/?key=${KEY}`,
  beer: `beers/?key=${KEY}`,
  styles: `styles/?key=${KEY}`
}

export default {
  BASE_URL,
  KEY,
  PATHS
}
