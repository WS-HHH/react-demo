import React from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="button" onClick={this.focusInput} value="click active focus input" />
      </>
    )
  }
} 

export default CustomTextInput
