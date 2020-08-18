import React, { Component } from 'react';
import Modal from './Modal';
import './index.css';

class Modalme extends Component {
    constructor(props) {
        super(props);
        this.state = { mount: false, modalme: false };
    };
    componentDidUpdate() {
        if (!this.state.mount && document.querySelector('body').style.backgroundColor === 'black') {
            document.querySelector('body').style.overflow = 'unset';
            document.querySelector('body').style.backgroundColor = 'white';
        }
    };
    handleChangeButton = e => {
        this.props.handleChangeButton(e.target.name);
        this.setState({ mount: false });
    };
    handleShowModalme = () => {
        let element = document.querySelector('body').style;
        element.overflow = 'hidden';
        if (this.props.modalName !== 'Unfolding') { element.backgroundColor = 'black'; }
        if (this.state.mount) {
            this.setState({ modalme: true });
        } else {
            this.setState({ modalme: true, mount:true });
        }
    };
    handleCloseModalme = () => {
        const { modalName } = this.props;
        let element = document.querySelector('body').style;
        element.overflow = 'unset';
        if (modalName !== 'Unfolding') { element.backgroundColor = 'unset'; }
        this.setState({ modalme: false });
        if (modalName === 'Uncovering' || modalName === 'BlowUp'
        || modalName === 'Sketch' || modalName === 'Revealing') {
            const timeOut = setTimeout(() => {
                this.setState({ mount: false });
                clearTimeout(timeOut)
            }, 200);
        } else if (modalName === 'Unfolding' || modalName === 'Bond') {
            const timeOut = setTimeout(() => {
                this.setState({ mount: false });
                clearTimeout(timeOut)
            }, 1000);
        } else if (modalName === 'Top' || modalName === 'Right'
        || modalName === 'Bottom' || modalName === 'Left') {
            const timeOut = setTimeout(() => {
                this.setState({ mount: false });
                clearTimeout(timeOut)
            }, 400);
        }
    };
    renderModal = () => {
        return (
            <Modal handleCloseModalme={this.handleCloseModalme}
                modalme={this.state.modalme}
                customContent={this.props.customContent}
                modalName={this.props.modalName}
                modalContainer={this.props.modalContainer}
            />
        );
    };
    render() {
        const modaleType = this.props.modalName === 'Revealing' || this.props.modalName === 'Uncovering' || this.props.modalName === 'BlowUp';
        return (
            <React.Fragment>
                {modaleType ? (
                    <div id='modalme-content' className={this.state.modalme ? 'modalme-content active':'modalme-content desactive'}>
                        <div className='modalme-btns'>
                            <button className={this.props.modalName === 'Top' ? 'modalme-btn active':'modalme-btn'}
                            name='top' onClick={this.handleChangeButton}>
                                Top
                            </button>
                            <button className={this.props.modalName === 'Right' ? 'modalme-btn active':'modalme-btn'}
                            name='right' onClick={this.handleChangeButton}>
                                Right
                            </button>
                            <button className={this.props.modalName === 'Bottom' ? 'modalme-btn active':'modalme-btn'}
                            name='bottom' onClick={this.handleChangeButton}>
                                Bottom
                            </button>
                            <button className={this.props.modalName === 'Left' ? 'modalme-btn active':'modalme-btn'}
                            name='left' onClick={this.handleChangeButton}>
                                Left
                            </button>
                            <button className={this.props.modalName === 'Unfolding' ? 'modalme-btn active':'modalme-btn'}
                            name='unfolding' onClick={this.handleChangeButton}>
                                Unfolding
                            </button>
                            <button className={this.props.modalName === 'Revealing' ? 'modalme-btn active':'modalme-btn'}
                            name='revealing' onClick={this.handleChangeButton}>
                                Revealing
                            </button>
                            <button className={this.props.modalName === 'Uncovering' ? 'modalme-btn active':'modalme-btn'}
                            name='uncovering' onClick={this.handleChangeButton}>
                                Uncovering
                            </button>
                            <button className={this.props.modalName === 'BlowUp' ? 'modalme-btn active':'modalme-btn'}
                            name='blowUp' onClick={this.handleChangeButton}>
                                BlowUp
                            </button>
                            <button className={this.props.modalName === 'Sketch' ? 'modalme-btn active':'modalme-btn'}
                            name='sketch' onClick={this.handleChangeButton}>
                                Sketch
                            </button>
                            <button className={this.props.modalName === 'Bond' ? 'modalme-btn active':'modalme-btn'}
                            name='bond' onClick={this.handleChangeButton}>
                                Bond
                            </button>
                        </div>
                        <div className='modalme-custom'>
                            {this.props.customButton(this.handleShowModalme)}
                        </div>
                    </div>
                ):(
                    <React.Fragment>
                        <div className='modalme-btns'>
                            <button className={this.props.modalName === 'Top' ? 'modalme-btn active':'modalme-btn'}
                            name='top' onClick={this.handleChangeButton}>
                                Top
                            </button>
                            <button className={this.props.modalName === 'Right' ? 'modalme-btn active':'modalme-btn'}
                            name='right' onClick={this.handleChangeButton}>
                                Right
                            </button>
                            <button className={this.props.modalName === 'Bottom' ? 'modalme-btn active':'modalme-btn'}
                            name='bottom' onClick={this.handleChangeButton}>
                                Bottom
                            </button>
                            <button className={this.props.modalName === 'Left' ? 'modalme-btn active':'modalme-btn'}
                            name='left' onClick={this.handleChangeButton}>
                                Left
                            </button>
                            <button className={this.props.modalName === 'Unfolding' ? 'modalme-btn active':'modalme-btn'}
                            name='unfolding' onClick={this.handleChangeButton}>
                                Unfolding
                            </button>
                            <button className={this.props.modalName === 'Revealing' ? 'modalme-btn active':'modalme-btn'}
                            name='revealing' onClick={this.handleChangeButton}>
                                Revealing
                            </button>
                            <button className={this.props.modalName === 'Uncovering' ? 'modalme-btn active':'modalme-btn'}
                            name='uncovering' onClick={this.handleChangeButton}>
                                Uncovering
                            </button>
                            <button className={this.props.modalName === 'BlowUp' ? 'modalme-btn active':'modalme-btn'}
                            name='blowUp' onClick={this.handleChangeButton}>
                                BlowUp
                            </button>
                            <button className={this.props.modalName === 'Sketch' ? 'modalme-btn active':'modalme-btn'}
                            name='sketch' onClick={this.handleChangeButton}>
                                Sketch
                            </button>
                            <button className={this.props.modalName === 'Bond' ? 'modalme-btn active':'modalme-btn'}
                            name='bond' onClick={this.handleChangeButton}>
                                Bond
                            </button>
                        </div>
                        <div className='modalme-custom'>
                            {this.props.customButton(this.handleShowModalme)}
                        </div>
                    </React.Fragment>
                )}
                {this.state.mount ? (
                    this.renderModal()
                ):null}
            </React.Fragment>
        );
    };
};

export default Modalme;


