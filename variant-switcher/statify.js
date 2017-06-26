import { compose, withReducer, mapProps, withHandlers } from 'recompose'

const bindActionCreator = dispatch => actionCreator => {
  const fn = (...args) => dispatch(actionCreator(...args))
  fn.displayName = actionCreator.displayName ||
    actionCreator.name ||
    'AnonymousBoundActionCreator'
  return fn
}

const bindActionCreators = (actions = {}) => ({ dispatch }) => {
  const bind =  bindActionCreator(dispatch)
  return Object.keys(actions).reduce((boundActionCreators, actionCreatorKey) => {
    return { ...boundActionCreators, [actionCreatorKey]: bind(actions[actionCreatorKey])
  }, {})
}

const statify = (reducer, initialState, actionCreators) =>
  compose([
    withReducer('state', 'dispatch', reducer, initialState),
    mapProps(bindActionCreators(actions))
  ])

export default statify
