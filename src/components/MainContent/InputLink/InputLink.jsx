import { Component } from "react";
import axios from 'axios';

import "./InputLink.scss";

import { informationAboutVideo } from "../../../constants/urls";

export default class InputLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(informationAboutVideo + this.state.inputData);
      const data = response.data;
      this.props.onData(data, this.state.inputData);
      console.log(data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  handleChange = (event) => {
    this.setState({ inputData: event.target.value });
  };


  render() {
    return (
      <article className="content__input-link">
        <h3 className="input-link__title--visually-hidden">
          Получение видео по ссылке
        </h3>
        <form action="GET" className="input-link__form" onSubmit={this.handleSubmit}>
          <input type="text" name="link" id="link"
            className="form__input-link" placeholder="Вставьте ссылку на видео..."
            value={this.state.inputData}
            onChange={this.handleChange} />
          <button className="form__submit-form" type="submit">
            <img src="/images/search.svg" alt="" className="submit-form__search-img" />
          </button>
        </form>
      </article>
    )
  }
}