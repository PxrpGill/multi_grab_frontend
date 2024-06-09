import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <article className="header__logo">
                    <img src="/images/logo.png" alt="Лого Веб-ресурса" className="logo__image"/>
                    <h1 className="logo__site-name">MultiGrab</h1>
                </article>
            </div>
        </header>
    )
}