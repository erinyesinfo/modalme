Modalme
===


### Live Demo
[`modalme.com`](https://modalme.netlify.app)

![Modalme-readme](https://user-images.githubusercontent.com/59801428/90017675-2d41e400-dcac-11ea-8e41-5767dad29b8c.png)

Modalme is React component for using custom modals

## Getting started
[![npm version](https://badge.fury.io/js/react-image-gallery.svg)](http://www.npmjs.com/package/modalme)
```
npm install modalme
```

### Style import (with webpack)
```
# CSS
import 'modalme/dist/index.css';
```

### Example
```js
import React, { Component } from 'react';
import Modalme from 'modalme';

class App extends Component {
  customButton = openModal => (
    <button type='button' className='modal-custom-btn' onClick={openModal}>
      Click me!
    </button>
  );
  customContent = closeModal => {
    return (
      <div className='custom-content'>
        <h2>Hello, Welcom to modalme</h2>
        <button type='button' className='modal-custom-btn-close'
        onClick={closeModal}>
          X
        </button>
      </div>
    );
  };
  render() {
    return (
      <Modalme customButton={this.customButton}
        customContent={this.customContent}
        modalName='bottom'
        modalContainer='modal'
      />
    );
  };
};

export default App;
```

# Props

* `modalContainer`: String, (required)
  * Make sure to bind modal to your appElement
* `modalName`: String, default `Bottom`
  * available string props: `Top, Right, Bottom, Left, Unfolding, Revealing, Uncovering, BlowUp, Sketch, Bond`
  
* `renderCustomButton`: Function, custom button component (required)
  * Use this to render a custom button
  * Passes `openModal` callback function to open modal
  ```javascript
    customButton = openModal => (
        <button type='button' className='modal-custom-btn' onClick={openModal}>
          Click me!
        </button>
    );
  ```
* `renderCustomContent`: Function, custom modal content component (required)
  * Use this to render a custom modal content
  * Passes `closeModal` callback function to close modal
  ```javascript
    customContent = closeModal => {
      return (
        <div className='custom-content'>
          <h2>Hello, Welcom to modalme</h2>
          <button type='button' className='modal-custom-btn-close'
          onClick={closeModal}>
            X
          </button>
        </div>
      );
    };
  ```
## Author

erinyes 2020, [erinyes.com](https://erinyes.netlify.app)

# License

MIT
