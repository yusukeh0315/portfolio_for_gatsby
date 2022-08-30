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
                  <Link
                    to={`/`}
                    className={`p-header-nav__link ${
                      page === "crowdsourcing" ? "current" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="p-header-nav__item">
                  <Link
                    to={`/about/`}
                    className={`p-header-nav__link ${
                      page === "crowdsourcing_about" ? "current" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="p-header-nav__item">
                  <Link
                    to={`/works/`}
                    className={`p-header-nav__link ${
                      page === "crowdsourcing_works" ? "current" : ""
                    }`}
                  >
                    Works
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )
    }

    return (
      <header className="l-header">
        <div className="l-header__inner">
          {page.match(/crowdsourcing/)
            ? singlePageHeader()
            : multiPageHeader()}
        </div>
      </header>
    )}

export default Header
