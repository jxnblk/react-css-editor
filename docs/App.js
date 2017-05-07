const React = require('react')
const CSSEditor = require('react-css-editor')
const { Box, cxs } = require('axs')

const colors = {
  gray: '#fafafa'
}

class App extends React.Component {
  state = {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      padding: 16,
      color: 'white',
      backgroundColor: '#07c',
      border: 0,
      borderRadius: 4,
      WebkitAppearance: 'none',
      ':hover': {
        boxShadow: `0 0 8px rgba(0, 0, 0, .25)`,
      },
      ':focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px rgba(0, 124, 244, .5)'
      },
      ':active': {
        backgroundColor: '#000'
      }
    }
  }

  update = fn => {
    this.setState(fn)
  }

  render () {
    const { style } = this.state

    return (
      <Box p3>
        <h1>{'<CSSEditor />'}</h1>
        <p>React textarea component for editing style objects as CSS strings</p>
        <Box mx-2 css={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
        <Box px2 mb3 width={[ 1, 1/2 ]}>
          <CSSEditor
            value={style}
            onChange={val => {
              this.update(state => ({
                style: val
              }))
            }}
            rows={20}
            className={cx.editor}
          />
        </Box>
        <Box px2 mb3 width={[ 1, 1/2 ]}>
          <Box is='button'
            css={style}
            children='Hello'
          />
          <Pre
            my2
            children={'state.style:\n' + JSON.stringify(style, null, 2)}
          />
        </Box>
      </Box>
      <Box py3>
        <Pre children={usage} />
      </Box>
      <Box py3>
        <a href='https://github.com/jxnblk/react-css-editor'>GitHub</a>
      </Box>
    </Box>
    )
  }
}

const cx = {
  editor: cxs({
    fontFamily: 'Menlo, monospace',
    fontSize: 12,
    lineHeight: 1.5,
    display: 'block',
    width: '100%',
    padding: 8,
    margin: 0,
    borderColor: '#eee',
    backgroundColor: colors.gray,
    resize: 'vertical',
    ':focus': {
      outline: 'none',
      color: '#07c'
    }
  })
}

const Pre = props => (
  <Box
    is='pre'
  p1
  rounded
  css={{
    fontFamily: 'Menlo, monospace',
    fontSize: 12,
    lineHeight: 1.5,
    overflow: 'auto',
    backgroundColor: colors.gray
  }}
  {...props}
  />
)

const usage = `// usage:
<div>
  <CSSEditor
    value={this.state.styleObject}
    onChange={this.onStyleChange}
  />
</div>
`

  module.exports = App
