import React from "react";
import FocusedBtn from "../FocusedBtn";

class BlockStyleButton extends React.Component {
  onToggle = e => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };
  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }
    return (
      <FocusedBtn toggleFunction={this.onToggle}>
        <span className={className}>{this.props.label}</span>
      </FocusedBtn>
    );
  }
}
export default BlockStyleButton;
