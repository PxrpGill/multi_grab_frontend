import { Component } from "react";

import Header from "../../components/Header/Header"
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import BackGround from "../../components/BackGround/BackGround";

import "./Home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <div className="main__container">
            <div className="main__background">
              <BackGround />
            </div>
            <MainContent />
          </div>
        </main>
        <Footer />
      </>
    )
  }
}