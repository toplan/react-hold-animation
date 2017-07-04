# Intro

A higher-order component be use for add animation effects to the placeholder witch in [react-hold](https://github.com/toplan/react-hold).

[[Demo]](http://toplan.github.io/react-hold/article.html) and [[Source]](https://github.com/toplan/react-hold/tree/master/examples/article)

# Install

```
npm i --save react-hold-animation
```

# Usage

```js
import React from 'react'
import { render } from 'react-dom'
import hold from 'react-hold'
import { Fill } from 'react-hold/holders'
import animation from 'react-hold-animation'

const H1 = hold('h1', (props) => !props.children)

class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      title: '',
    }
  }

  render() {
    return (
      <div>
        <H1 holder={animation(Fill)}>{ this.state.title }</H1>
      </div>
    )
  }
}

render(<App />, document.body)
```

# More

```js
import { Fill } from 'react-hold/holders'
import animation, { animate, BLINK, SPREAD, SLIDE } from 'react-hold-animation'

let AnimatedFill

// use decorator
AnimatedFill = animate(SLIDE)(Fill)

// use build-in animation mode
AnimatedFill = animation(Fill) // default SLIDE
AnimatedFill = animation(Fill, BLINK)
AnimatedFill = animation(Fill, SPREAD)

// cusmtom animation
AnimatedFill = animation(Fill, {
  name: BLINK, // or your css keyframe names
  delay: '0.1s',
  duration: '0.6s',
  direction: 'normal',
  timingFunction: 'ease',
  iterationCount: 'infinite',
})
```

# License

MIT
