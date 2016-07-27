import React, { Component, PropTypes } from 'react'

class ExpandingTextarea extends Component {
  componentDidMount() {
    this._adjustTextarea({})
  }

  render() {
    const { onChange, ...rest } = this.props
    return <textarea { ...rest } ref="textarea" onChange={ this._handleChange.bind(this) } />
  }

  _handleChange(e) {
    const { onChange } = this.props
    if (onChange) onChange(e)
    this._adjustTextarea(e)
  }

  _adjustTextarea({ target = this.refs.textarea }) {
    target.style.height = 0
    target.style.height = `${target.scrollHeight}px`
  }
}

ExpandingTextarea.propTypes = {
  onChange: PropTypes.func
}

export default ExpandingTextarea
