const React = require('react')
const PropTypes = require('prop-types')
const objss = require('objss')
const cssobj = require('css-to-object')

class CSSEditor extends React.Component {
  state = {
    css: objss(this.props.value, {
      newline: true
    })
  }

  onChange = e => {
    const { value } = e.target
    this.setState({ css: value })
    try {
      const obj = cssobj(value)
      console.log('obj', obj)
      this.props.onChange(obj)
    } catch (e) {
      console.error(e)
    }
  }

  onKeyDown = e => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const { css } = this.state
      const { selectionStart, selectionEnd } = this.root
      const next = css.slice(0, selectionStart) + '  ' + css.slice(selectionEnd)
      const position = selectionStart + 2
      this.setState({ css: next }, () => {
        this.root.selectionStart = position
        this.root.selectionEnd = position
      })
    }
  }

  render () {
    const {
      ...rest
    } = this.props
    const { css } = this.state

    return (
      <textarea
        {...rest}
        ref={el => this.root = el}
        value={css}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
      />
    )
  }
}

CSSEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = CSSEditor
