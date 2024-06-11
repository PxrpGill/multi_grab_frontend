import { Component } from "react";

import InputLink from "./InputLink/InputLink";
import GetData from "./GetData/GetData";

import "./MainContent.scss";


export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromInputLink: null,
      inputedLink: ''
    }
  }

  handleDataFromInputLink = (data, link) => {
    this.setState({
      dataFromInputLink: data, inputedLink: link
    })
  }

  render() {
    const { dataFromInputLink, inputedLink } = this.state;
    return (
      <section className="main__content">
        <h2 className="content__title--visually-hidden">
          Секция контента
        </h2>
        <InputLink onData={this.handleDataFromInputLink}/>
        {dataFromInputLink ? <GetData dataFromInputLink={dataFromInputLink} inputedLink={inputedLink}/> : <></>}
      </section>
    )
  }
}