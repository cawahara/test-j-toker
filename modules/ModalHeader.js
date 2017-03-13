import React from 'react'
import Modal from 'react-modal';

export default class ModalHeader extends React.Component {
  render() {
    return (
        <header className="menuHeader clearfix">
          <div className="menuHeader__item">
            <img className="menuHeader__logoImg" src="/images/planna_v6.2_icon.png"/>
          </div>
          <div className="menuHeader__title">Menu</div>
          <div onClick={this.props.closeModal} className="menuHeader__close">
            <i className="fa fa-close" aria-hidden="true"></i>
          </div>
        </header>
    );
  }
}
