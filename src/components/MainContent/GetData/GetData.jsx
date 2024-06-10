import React, { Component } from "react";
import axios from 'axios';

import "./GetData.scss";

import { videoOrAudio, limit } from "../../../constants/urls";


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

  downloadVideoOrAudio = async (event, inputedLink, quality, isChecked) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        videoOrAudio + inputedLink + "&quality=" + quality + "&only_audio=" + isChecked,
        { responseType: 'blob' }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement('a');
      link.href = url;

      const contentDisposition = response.headers['content-disposition'];
      let filename = 'downloaded_file';
      if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
        filename = contentDisposition.split('filename=')[1].replace(/['"]/g, '');
      } else {
        const contentType = response.headers['content-type'];
        if (contentType.includes('video')) {
          filename += '.mp4';
        } else if (contentType.includes('audio')) {
          filename += '.mp3';
        }
      }

      link.setAttribute('download', filename);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  render() {
    const { isChecked, isListOpen, quality } = this.state;
    const { dataFromInputLink, inputedLink } = this.props;

    const limitWords = (text, wordLimit) => {
      const words = text.split(" ");
      return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
      <article className="content__get-data">
        <h3 className="get-data__title--visually-hidden">
          Скачать веб-ресурс
        </h3>
        <div className="get-data__image">
          <img src={dataFromInputLink.preview_url ? dataFromInputLink.preview_url : '#'} alt="Изображение превью видео" />
        </div>
        <div className="get-data__content">
          {dataFromInputLink && (
            <>
              <h4 className="content__video-name">{limitWords(dataFromInputLink.title, limit)}</h4>
              <p className="content__video-author">{limitWords(dataFromInputLink.author_name, limit)}</p>
            </>
          )}
          <section className="content__button-section">
            <h4 className="button-section__title--visually-hidden">
              Установка веб-ресурса
            </h4>
            <div className="content__install-buttons">
              <button className="button-section__install-button" onClick={(event) => this.downloadVideoOrAudio(event, inputedLink, quality, isChecked)}>
                Скачать
              </button>
              <button className="install-button__open-list" onClick={() => { this.toggleListOpen(); }}>
                <img src="/images/list.svg" alt="Открытие выпадающего списка"
                  className={isListOpen ? 'open-list__rotate-open' : 'open-list__rotate-close'} />
              </button>
              {
                isListOpen && (
                  <div className={`button-section__opened-list ${isListOpen ? 'open' : 'close'}`}>
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
                )
              }
            </div>
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
