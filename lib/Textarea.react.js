import React, { Component, PropTypes } from 'react';

class ExpandingTextarea extends Component {
  static propTypes = { onChange: PropTypes.func }

  componentDidMount() {
    this._adjustTextarea({});
  }

  render() {
    return <textarea { ...this.props } ref="textarea" onChange={ this._handleChange.bind(this) }></textarea>;
  }

  _handleChange(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
    this._adjustTextarea(e);
  }

  _adjustTextarea({ target = this.refs.textarea }) {
    target.style.height = 0;
    target.style.height = target.scrollHeight + 'px';
  }

  _calculateRows() {
    const node = this.refs.textarea,
          fontSize = parseInt(window.getComputedStyle(node, null).getPropertyValue('font-size'));
    return Math.floor(node.scrollHeight / fontSize) - 1;
  }
}


export default ExpandingTextarea;
