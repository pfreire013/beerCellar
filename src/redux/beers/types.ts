
export interface BeersState {
  _incrementToPurge: number
  beers: {
    result: Beer[],
    isPending: boolean
    error: string | undefined
  }
}

export interface Beer {
    id: string,
    name: string,
    nameDisplay: string,
    abv: string,
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

// BEERS
export const GET_BEERS_REQUEST = 'GET_BEERS_REQUEST'
export const GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS'
export const GET_BEERS_FAILURE = 'GET_BEERS_FAILURE'

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

export type BeersActionTypes =
  GetBeersRequestAction | GetBeersSuccessAction | GetBeersFailureAction
