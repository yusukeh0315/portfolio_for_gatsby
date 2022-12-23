import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/main.scss"

import 'typeface-lato'
import 'typeface-notosans-jp'

const Layout = ({ children, page }) => (
  <div>
    <Header page={page} />

    <div>{children}</div>
    {/* <div className="u-effect-fadein">{children}</div> */}

    <Footer />
  </div>
)

export default Layout
