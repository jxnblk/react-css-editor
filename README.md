
# React CSS Editor

React textarea component for editing style objects as CSS strings

Demo: http://jxnblk.com/react-css-editor

```sh
npm i react-css-editor
```

```jsx
import React from 'react'
import CSSEditor from 'react-css-editor'

class App extends React.Component {
  state = {
    style: {
      color: 'tomato'
      padding: 16
    }
  }

  update = fn => {
    this.setState(fn)
  }

  render () {
    const { style } = this.state

    return (
      <div>
        <CSSEditor
          value={style}
          onChange={val => {
            this.update(state => ({ style: val }))
          })
        />
        <button style={style} children='Hello' />
      </div>
    )
  }
}
```

MIT License

