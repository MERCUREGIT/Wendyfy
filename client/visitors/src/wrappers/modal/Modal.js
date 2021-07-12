import React from 'react';
import ReactDOM from "react-dom";
// import './Modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    state ={
        el:document.createElement('div')
    }

    componentDidMount() {
      // The portal element is inserted in the DOM tree after
      // the Modal's children are mounted, meaning that children
      // will be mounted on a detached DOM node. If a child
      // component requires to be attached to the DOM tree
      // immediately when mounted, for example to measure a
      // DOM node, or uses 'autoFocus' in a descendant, add
      // state to Modal and only render the children when Modal
      // is inserted in the DOM tree.
      modalRoot.appendChild(this.state.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.state.el);
    }
  
    render(props) {
      return ReactDOM.createPortal(
        this.props.children,
        this.state.el
      );
    }
  }
  
  export default Modal