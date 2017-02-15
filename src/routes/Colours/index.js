import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'colour',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ColourContainer',
      './modules/colour'
    ], (require) => {
      const Colour = require('./containers/ColourContainer').default
      const colourReducer = require('./modules/colour').default

      injectReducer(store, {
        key: 'colour',
        reducer: colourReducer
      })

      next(null, Colour)
    }, 'colour')
  }
})
