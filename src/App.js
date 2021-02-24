import React, { Component } from 'react';
import SVG from './Modalme/Icon';
import Modalme from './Modalme';

class App extends Component {
    state = { active: localStorage.getItem('modalName') || 'bottom' };
    capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
    handleChangeButton = modalname => this.setState({ active: modalname }, localStorage.setItem('modalName', modalname));
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
                <div className='content-svg'>
                    <a className='a-svg' rel="noopener noreferrer"
                    target='_blank' href='https://github.com/erinyesinfo/modalme'>
                        <SVG />
                    </a>
                </div>
            </div>
        );
    };
    render() {
        return (
            <Modalme customButton={this.customButton}
                customContent={this.customContent}
                handleChangeButton={this.handleChangeButton}
                modalName={this.capitalizeFirstLetter(this.state.active)}
                modalContainer='modal'
            />
        );
    };
};

export default App;
