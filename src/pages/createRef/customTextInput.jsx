import React from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

  }

  focusInput = () => {
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <input ref={this.props.ref} />
    )
  }
}
export default CustomTextInput
