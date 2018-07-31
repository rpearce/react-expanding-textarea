import React, { Component } from 'react'
import { getHeight, omit } from './helpers'

export default class ExpandingTextarea extends Component {
  constructor(...params) {
    super(...params)
    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount() {
    this._adjustTextarea(this.el)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this._adjustTextarea(this.el)
    }
  }

  render() {
    const { props, _handleChange } = this
    const rest = omit([ 'onChange' ], props)

    return (
      <textarea
        {...rest}
        ref={x => this.el = x}
        onChange={_handleChange}
      />
    )
  }

  _handleChange(e) {
    this.props.onChange(e)
    this._adjustTextarea(e.target)
  }

  _adjustTextarea(node) {
    if (node) {
      node.style.height = 0
      node.style.height = `${getHeight(node, this.props.rows)}px`
    }
  }
}

ExpandingTextarea.defaultProps = {
  onChange: Function.prototype
}
