Modalme
===


### Live Demo
[`modalme.com`](https://modalme.netlify.app)

![Modalme-readme](https://user-images.githubusercontent.com/59801428/90017675-2d41e400-dcac-11ea-8e41-5767dad29b8c.png)

Modalme is React component for using custom modals

## Getting started

[![npm-package (2 0 0)](https://user-images.githubusercontent.com/59801428/90342623-da4c9180-e009-11ea-9189-d134afa6f154.png)](http://www.npmjs.com/package/modalme)
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
    <button type='button' className='_1I0MO' onClick={openModal}>
      Click me!
    </button>
  );
  customContent = closeModal => {
    return (
      <div className='_3BV9V'>
        <h2>Hello, Welcom to modalme</h2>
        <button type='button' className='_330Pu'
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
        modalName='Bottom'
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
      <button type='button' className='_1I0MO' onClick={openModal}>
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
        <div className='_3BV9V'>
          <h2>Hello, Welcom to modalme</h2>
          <button type='button' className='_330Pu'
          onClick={closeModal}>
            X
          </button>
        </div>
      );
    };
  ```


## Support

Please [open an issue](https://github.com/erinyesinfo/modalme/issues).

## Author

erinyes 2020, [erinyes.com](https://erinyes.netlify.app)

## Donation

If this project help you reduce time to develop, you can give me a cup of coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.patreon.com/bePatron?u=40714472)

## Contributing

Each PR should be specific and isolated to the issue you're trying to fix. Please do not stack features/chores/refactors/enhancements in one PR. Describe your feature/implementation in the PR. If you're unsure its useful or if it is a major change, please open an issue first and get feedback.

* Follow eslint provided
* Comment your code
* Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch,
add commits, and [open a pull request](https://github.com/erinyesinfo/modalme/compare/).

# License

MIT
