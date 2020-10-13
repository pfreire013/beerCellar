
export interface BeersState {
  _incrementToPurge: number
  beers: {
    result: Beer[],
    isPending: boolean
    error: string | undefined
  },
  styles: {
    result: Style[],
    isPending: boolean,
    error: string | undefined
  }
}

export interface Beer {
    id: string,
    name: string,
    nameDisplay: string,
    abv: string,
    ibu: string,
    glasswareId: number,
    styleId: number,
    isOrganic: string,
    isRetired: string,
    labels: {
      icon: string,
      medium: string,
      large: string,
      contentAwareIcon: string,
      contentAwareMedium: string,
      contentAwareLarge: string
    },
    status: string,
    statusDisplay: string,
    foodPairings: string,
    createDate: string,
    updateDate: string,
    glass: {
      id: number,
      name: string,
      createDate: string
    },
    style: {
      id: number,
      categoryId: number,
      category: {
        id: number,
        name: string,
        createDate: string
      },
      name: string,
      shortName: string,
      description: string,
      ibuMin: string,
      ibuMax: string,
      abvMin: string,
      abvMax: string,
      srmMin: string,
      srmMax: string,
      ogMin: string,
      fgMin: string,
      fgMax: string,
      createDate: string,
      updateDate: string
    }
  }

export interface newBeer {
    name: string,
    abv?: string,
    ibu?: string,
    styleId: number,
    isOrganic?: string,
    isRetired?: string,
    foodPairings?: string,
  }

export interface Style {
  id: number,
  categoryId: number,
  category: {
    id: number,
    name: string,
    createDate: string
  },
  name: string
  shortName: string,
  description: string
}

// BEERS
export const GET_BEERS_REQUEST = 'GET_BEERS_REQUEST'
export const GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS'
export const GET_BEERS_FAILURE = 'GET_BEERS_FAILURE'
export const ADD_BEER = 'ADD_BEER'
export const ADD_BEER_SUCCESS = 'ADD_BEER_SUCCESS'
export const ADD_BEER_FAILURE = 'ADD_BEER_FAILURE'
// STYLES
export const GET_STYLES_REQUEST = 'GET_STYLES_REQUEST'
export const GET_STYLES_SUCCESS = 'GET_STYLES_SUCCESS'
export const GET_STYLES_FAILURE = 'GET_STYLES_FAILURE'

export interface GetBeersRequestAction {
  type: typeof GET_BEERS_REQUEST
}

export interface GetBeersSuccessAction {
  type: typeof GET_BEERS_SUCCESS,
  payload: Beer[]
}

export interface GetBeersFailureAction {
  type: typeof GET_BEERS_FAILURE,
  error: string
}

export interface AddBeer {
  type: typeof ADD_BEER
  payload: newBeer
}

export interface AddBeerSuccess {
  type: typeof ADD_BEER_SUCCESS,
  payload: Beer
}

export interface AddBeerFailure {
  type: typeof ADD_BEER_FAILURE,
  error: string
}

// STYLE
export interface GetStylesRequestAction {
  type: typeof GET_STYLES_REQUEST
}

export interface GetStylesSuccessAction {
  type: typeof GET_STYLES_SUCCESS,
  payload: Style[]
}

export interface GetStylesFailureAction {
  type: typeof GET_STYLES_FAILURE,
  error: string
}

export type BeersActionTypes =
  GetBeersRequestAction | GetBeersSuccessAction | GetBeersFailureAction | AddBeer |
  AddBeerSuccess | AddBeerFailure | GetStylesRequestAction | GetStylesSuccessAction | GetStylesFailureAction
