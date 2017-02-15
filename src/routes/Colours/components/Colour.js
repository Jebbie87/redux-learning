// @flow

import React from 'react'

import type { ColourObject } from '../interfaces/colour.js'

type Props = {
  colour: String,
  randomNumber: Function,
  randomColour: Function,
}

export const Colour = (props: Props) => (
  <div>
    <div className='box'>
      Box 1
    </div>
    <div className='box1'>
      Box 2
    </div>
    <div className='box2'>
      Box 3
    </div>
    <div className='box3'>
      Box 4
    </div>
  </div>
)

Colour.propTypes = {
  colour: React.PropTypes.string,
  randomColour: React.PropTypes.func,
  randomNumber: React.PropTypes.func,
}

export default Colour
