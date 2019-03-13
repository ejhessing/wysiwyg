import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'
import Toolbar from './Toolbar';
import './App.css';

class App extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    showToolbar: false
  
  };
  onChange = editorState => {this.setState({editorState})};

  onToggleInlineStyles = (e) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, e.target.name));
  }

  onToggleBlockStyles = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  onBlur = () => {
    console.log('OnBlur')
    this.setState({ showToolbar: false })
  }

  onFocus = () => {
    console.log("OnFocus");
    this.setState({ showToolbar: true })
  }

  render() {
    return (
      <div className="App">
        <h1>My Editor</h1>
        <Toolbar
          inlineClick={this.onToggleInlineStyles}
          blockClick={this.onToggleBlockStyles}
          show={this.state.showToolbar}
          editorState={this.state.editorState}
        />
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}

export default App;
