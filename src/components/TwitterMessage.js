import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      maxChars: props.maxChars,
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handle;

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <p>{this.state.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
