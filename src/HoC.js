import React from 'react'
import PropTypes from 'prop-types'
import { SLIDE } from './modes'
import { isString, normalizeAnimation } from './utils'
import '../style.css'

export default function (Placeholder, defaultProps) {
  if (isString(defaultProps)) {
    defaultProps = { name: defaultProps }
  }

  const Animation = (props) => {
    let { animation } = props
    if (isString(animation)) {
      animation = { name: animation }
    }

    const newProps = {
      ...props,
      fillerStyle: {
        ...props.fillerStyle,
        animationName: SLIDE,
        animationDelay: '0',
        animationDuration: '0.5s',
        animationDirection: 'normal',
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite',
        ...normalizeAnimation(defaultProps),
        ...normalizeAnimation(animation),
      },
    }

    return React.createElement(Placeholder, newProps)
  }

  Animation.propTypes = {
    fillerStyle: PropTypes.object,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }

  Animation.defaultProps = {
    fillerStyle: null,
    animation: null,
  }

  return Animation
}
