import { Component } from "react";
import axios from 'axios';

import "./GetData.scss";


export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isListOpen: false,
      quality: 'high',
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

  setQuality = (chosenQuality) => {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen,
      quality: chosenQuality
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
          <p className="content__video-author">Автор видео</p>
          <section className="content__button-section">
            <h4 className="button-section__title--visually-hidden">
              Установка веб-ресурса
            </h4>
            <button className="button-section__install-button">
              Скачать
              <button className="install-button__open-list">
                <img src="/images/list.svg" alt="Открытие выпадающего списка"
                  className={isListOpen ? 'open-list__close-icon' : 'open-list__open-icon'} onClick={() => {
                    this.toggleListOpen();
                  }} />
              </button>
              {isListOpen && (
                <div className="button-section__opened-list">
                  <ul className="opened-list__list">
                    <li className="list__item-list">
                      <button className="item-list__content" onClick={() => this.setQuality('lowest')}>
                        <p className="content__about">144p</p>
                        <p className="content__quality">Наихудшее</p>
                      </button>
                    </li>
                    <li className="list__item-list">
                      <button className="item-list__content" onClick={() => this.setQuality('low')}>
                        <p className="content__about">360p</p>
                        <p className="content__quality">Плохое</p>
                      </button>
                    </li>
                    <li className="list__item-list">
                      <button className="item-list__content" onClick={() => this.setQuality('medium')}>
                        <p className="content__about">480p</p>
                        <p className="content__quality">Среднее</p>
                      </button>
                    </li>
                    <li className="list__item-list">
                      <button className="item-list__content" onClick={() => this.setQuality('high')}>
                        <p className="content__about">720p</p>
                        <p className="content__quality">Хорошее</p>
                      </button>
                    </li>
                    <li className="list__item-list">
                      <button className="item-list__content" onClick={() => this.setQuality('highest')}>
                        <p className="content__about">1080p</p>
                        <p className="content__quality">Отличное</p>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <div className="button-section__add-func">
              <button className={`button-section__checkbox ${isChecked ? 'checked' : ''}`} onClick={this.toggleCheckbox}>
                {isChecked && <img src="/images/checked.svg" className="checkbox__image" />}
              </button>
              <label className="button-section__label" htmlFor="check">Только звук</label>
            </div>
          </section>
        </div>
      </article>
    );
  }
}