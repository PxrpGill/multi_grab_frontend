import { Component } from "react";

import InputLink from "./InputLink/InputLink";
import GetData from "./GetData/GetData";

import "./MainContent.scss";


export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main__content">
        <h2 className="content__title--visually-hidden">
          Секция контента
        </h2>
        <InputLink />
        <GetData />
      </section>
    )
  }
}