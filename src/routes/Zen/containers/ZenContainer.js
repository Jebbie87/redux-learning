/* @flow */

import { connect } from 'react-redux'
import { fetchZen, saveCurrentZen } from '../modules/zen.js'

import Zen from '../components/Zen.js'

import type { ZenObject } from '../interfaces/zen.js'

const mapActionCreators: {fetchZen: Function, saveCurrentZen: Function} = {
  fetchZen,
  saveCurrentZen,
}

const mapStateToProps = (state): { zen: ?ZenObject, saved: Array<ZenObject> } => ({
  zen: state.zen.zens.find(zen => zen.id === state.zen.current),
  saved: state.zen.zens.filter(zen => state.zen.saved.indexOf(zen.id) !== -1),
})

export default connect(mapStateToProps, mapActionCreators)(Zen)
