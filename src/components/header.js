import React from "react"
import { Link } from "gatsby"
import { Link as Scroll } from "react-scroll"

const Header = ({ page }) => {
    const multiPageHeader = () => {
        return (
          <>
            <div className="p-header-logo">
              <Link to={`/`} className="p-header-logo__link">
                VIT Works
              </Link>
            </div>
            <nav className="p-header-nav">
              <ul className="p-header-nav__list">
                <li className="p-header-nav__item">
                  <Link
                    to={`/about/`}
                    className={`p-header-nav__link ${
                      page === "about" ? "current" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="p-header-nav__item">
                  <Link
                    to={`/works/`}
                    className={`p-header-nav__link ${
                      page === "works" ? "current" : ""
                    }`}
                  >
                    Works
                  </Link>
                </li>
                <li className="p-header-nav__item">
                  <Link
                    to={`/contact/`}
                    className={`p-header-nav__link ${
                      page === "contact" ? "current" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )
    }

    const singlePageHeader = () => {
        return (
          <>
            <div className="p-header-logo">
              <Scroll
                to="top"
                smooth={true}
                duration={500}
                offset={-50}
                className="p-header-logo__link"
              >
                Portfolio
              </Scroll>
            </div>
            <nav className="p-header-nav">
              <ul className="p-header-nav__list">
                <li className="p-header-nav__item">
                  <Scroll
                    to="service"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="p-header-nav__link"
                  >
                    Service
                  </Scroll>
                </li>
                <li className="p-header-nav__item">
                  <Scroll
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={40}
                    className="p-header-nav__link"
                  >
                    About
                  </Scroll>
                </li>
                <li className="p-header-nav__item">
                  <Scroll
                    to="works"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="p-header-nav__link"
                  >
                    Works
                  </Scroll>
                </li>
              </ul>
            </nav>
          </>
        )
    }

    return (
      <header className="l-header">
        <div className="l-header__inner">

          {page === "crowdsourcing" ? singlePageHeader() : multiPageHeader() }
        </div>
      </header>
    )}

export default Header
