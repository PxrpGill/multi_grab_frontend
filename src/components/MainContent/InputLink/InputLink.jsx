import { Component } from "react";

import "./InputLink.scss";

export default class InputLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="content__input-link">
        <h3 className="input-link__title--visually-hidden">
          Получение видео по ссылке
        </h3>
        <form action="GET" className="input-link__form">
          <input type="text" name="link" id="link" className="form__input-link" placeholder="Вставьте ссылку на видео..." />
          <button className="form__submit-form">
            <img src="/images/search.svg" alt="" className="submit-form__search-img" />
          </button>
        </form>
      </article>
    )
  }
}