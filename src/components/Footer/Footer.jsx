import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="list__item">
            <a href="https://github.com/actusnileh/MultiGrab" className="item__link" >
              <img src="/images/github.svg" alt="" className="item__image" />
            </a>
          </li>
          <li className="list__item">
            <a href="https://github.com/actusnileh/MultiGrab" className="item__github">github</a>
          </li>
          <li className="list__item">
            <img src="/images/vk.svg" alt="" className="item__image" />
          </li>
          <li className="list__item">
            <img src="/images/youtube.svg" alt="" className="item__image" />
          </li>
        </ul>
      </div>
    </footer >
  );
}