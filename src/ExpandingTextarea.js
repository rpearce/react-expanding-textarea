import React, { Component } from 'react'

class ExpandingTextarea extends Component {
  componentDidMount() {
    this._adjustTextarea()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this._adjustTextarea()
    }
  }

  render() {
    const { onChange, ...rest } = this.props
    return (
      <textarea
        { ...rest }
        ref={x => this.el = x}
        onChange={ this._handleChange.bind(this) }
      />
    )
  }

  _handleChange(e) {
    const { onChange } = this.props
    onChange(e)
    this._adjustTextarea(e)
  }

  _adjustTextarea({ target = this.el } = {}) {
    target.style.height = 0
    target.style.height = `${target.scrollHeight}px`
  }
}

ExpandingTextarea.defaultProps = {
  onChange: Function.prototype
}

export default ExpandingTextarea
