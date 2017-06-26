import { INCREASE } from './action-types'

const initialState = { count: 0 }

function reducer (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 }
  }

  return state
}

export { initialState, INCREASE }
export default reducer
