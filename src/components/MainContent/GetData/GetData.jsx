import { Component } from "react";

import "./GetData.scss";


export default class GetData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="content__get-data">
        <h3 className="get-data__title--visually-hidden">
          Скачать веб-ресурс
        </h3>
        <div className="get-data__image">
          <img src="#" alt="Изображение превью видео" />
        </div>
        <div className="get-data__content">
          <h4 className="content__video-name">Название видео</h4>
          <p class="content__video-author">Автор видео</p>
          <section className="content__button-section">
            <h4 className="button-section__title--visually-hidden">
              Установка веб-ресурса
            </h4>
            <button className="button-section__install-button">Скачать</button>
            <div className="button-section__add-func">
              <input className="button-section__checkbox" type="checkbox" name="check" id="check" />
              <label className="button-section__label" htmlFor="check">Только звук</label>
            </div>
          </section>
        </div>
      </article>
    )
  }
}