import React from "react"
import { Link } from "gatsby"

const Header = ({ page }) => (
    <header className="l-header">
        <div className="l-header__inner">
            <div className="p-header-logo">
                <Link to={`/`} className="p-header-logo__link">VIT Works</Link>
            </div>
            <nav className="p-header-nav">
                <ul className="p-header-nav__list">
                    <li className="p-header-nav__item">
                        <Link to={`/about/`} className={`p-header-nav__link ${page === "about" ? "current" : ""}`}>About</Link>
                    </li>
                    <li className="p-header-nav__item">
                        <Link to={`/works/`} className={`p-header-nav__link ${page === "works" ? "current" : ""}`}>Works</Link>
                    </li>
                    <li className="p-header-nav__item">
                        <Link to={`/contact/`} className={`p-header-nav__link ${page === "contact" ? "current" : ""}`}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
