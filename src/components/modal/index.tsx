import * as React from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  onClick?: () => void;
}

export default class Modal extends React.Component<IProps> {
  render() {
    const doc = document.getElementById('modal_root');

    if (doc) {
      return createPortal(
        <div
          id="modal"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,.7)',
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>,
        doc
      );
    }
  }
}
