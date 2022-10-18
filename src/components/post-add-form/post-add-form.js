import { Component } from "react";
import "./post-add-form.scss";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpValue: "",
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeValue(event) {
    this.setState({
      inpValue: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.inpValue);
    this.setState({
      inpValue: '',
    });
  }
  render() {
    return (
      <form className="post-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Чтобы вы хотели добавить ?"
          onChange={this.onChangeValue}
          value={this.state.inpValue}
        />
        <button type="submit" className="add">Добавить</button>
      </form>
    );
  }
}
