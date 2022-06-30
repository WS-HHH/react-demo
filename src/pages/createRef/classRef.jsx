import React from "react";
import CustomTextInput from './domRef';

class AutoFocusInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focusInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInputRef} />
    )
  }
}
export default AutoFocusInput
