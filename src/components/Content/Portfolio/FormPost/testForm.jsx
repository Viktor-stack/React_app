import React, { Component } from "react";

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.textTitle = React.createRef();
    this.numberPrice = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - 
      ${this.fileInput.current.files[0].name} 
      ${this.textTitle.current.value} 
      ${this.numberPrice.current.value}`
    );
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name={"name"} ref={this.textTitle} />
        <input type="text" name={"price"} ref={this.numberPrice} />
        <input type="file" name={"productImage"} ref={this.fileInput} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TestForm;
