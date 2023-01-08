import ReactDOM from "react-dom";
import React from "react";
class Overlay extends React.Component {
  overlayContainer;
  constructor(props) {
    super(props);
    this.overlayContainer = document.createElement("div");
    this.overlayContainer.className = "overlay-custom";
    document?.body?.appendChild(this.overlayContainer);
  }
  componentWillUnmount() {
    document?.body?.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="backdrop" onClick={this.props.handleModalClose}>
        <div className="modal">{this.props.children}</div>
      </div>,
      this.overlayContainer
    );
  }
}

export default Overlay;
