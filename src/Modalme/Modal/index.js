import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './Styles';

class Modal extends React.Component {
  node = React.createRef();
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    document.addEventListener('keydown', this.handleClose, false);
  };
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
    document.removeEventListener('keydown', this.handleClose, false);
  };
  handleRef = node => this.node = node;
  handleClick = e => {
    const { modalme } = this.props;
    if (this.node.contains(e.target) && modalme) return;
    return this.props.handleCloseModalme();
  };
  handleClose = e => {
    if (e.key === 'Escape' && e.keyCode === 27 && e.which === 27) {
      return this.props.handleCloseModalme();
    }
  };
  renderModalme = () => {
    const { modalme, customContent, handleCloseModalme, modalName } = this.props;
    return (
      <React.Fragment>
        <Styles modalName={modalName} />
        <div className={modalme ? 'modal-active':''}>
          <div id="modal-container" className={modalme ? 'modalme':'modalme out'}>
            <div className="modal-background">
              <div className="modal" ref={this.handleRef} onClick={this.handleClick}>
                <div className='modal-custom-content'>
                  {customContent(handleCloseModalme)}
                </div>
                {modalName === 'Sketch' ? (
                  <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                  </svg>
                ):null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return ReactDOM.createPortal(
      this.renderModalme(),
      document.querySelector('#'+this.props.modalContainer)
    );
  };
};

export default Modal;