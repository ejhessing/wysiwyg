import React, { Component } from "react";
import FocusdBtn from './FocusedBtn';
import BlockStyleToolbar from './blockStyles';
import "./styles.css";

class Toolbar extends Component {
  render() {
    const styles = ["BOLD", "ITALIC", "UNDERLINE"];
    const buttons = styles.map(style => {
      return (
        <FocusdBtn
          key={style}
          toggleFunction={e => this.props.inlineClick(e)}
        >
          <button key={style} name={style}>
            {style}
          </button>
        </FocusdBtn>
      );
    });

    return this.props.show && (<div className="toolbar">
    {buttons}
        <BlockStyleToolbar editorState={this.props.editorState} onToggle={this.props.blockClick} />
    </div>);
  }
}

export default Toolbar;
