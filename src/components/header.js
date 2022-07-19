import React from "react"

const Header = () => (
    <header className="l-header">
        <div className="l-header__inner">
            <div className="p-header-logo"><a className="p-header-logo__link" href="/index.html">VIT Works</a></div>
            <nav className="p-header-nav">
                <ul className="p-header-nav__list">
                    <li className="p-header-nav__item"><a className="p-header-nav__link" href="/about.html">About</a></li>
                    <li className="p-header-nav__item"><a className="p-header-nav__link" href="/works.html">Works</a></li>
                    <li className="p-header-nav__item"><a className="p-header-nav__link" href="/contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
