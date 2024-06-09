import { Component } from "react";

import "./GetData.scss";


export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isListOpen: false
    }
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }));
  };

  toggleListOpen = () => {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  render() {
    const { isChecked, isListOpen } = this.state;

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
            <button className="button-section__install-button">
              Скачать
              <button className="install-button__open-list">
                <img src="/images/list.svg" alt="Открытие выпадающего списка" className={isListOpen ?  'open-list__close-icon' : 'open-list__open-icon'} onClick={this.toggleListOpen}/>
              </button>
            </button>
            <div className="button-section__add-func">
              <button className={`button-section__checkbox ${isChecked ? 'checked' : ''}`} onClick={this.toggleCheckbox}>
                {isChecked && <img src="/images/checked.svg" className="checkbox__image"/>}
              </button>
              <label className="button-section__label" htmlFor="check">Только звук</label>
            </div>
          </section>
        </div>
      </article>
    );
  }
}