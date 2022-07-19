import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header className="l-header">
        <div className="l-header__inner">
            <div className="p-header-logo">
                <Link to={`/`} className="p-header-logo__link">VIT Works</Link>
            </div>
            <nav className="p-header-nav">
                <ul className="p-header-nav__list">
                    <li className="p-header-nav__item">
                        <Link to={`/about/`} className="p-header-nav__link">About</Link>
                    </li>
                    <li className="p-header-nav__item">
                        <Link to={`/works/`} className="p-header-nav__link">Works</Link>
                    </li>
                    <li className="p-header-nav__item">
                        <Link to={`/contact/`} className="p-header-nav__link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
