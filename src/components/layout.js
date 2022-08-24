import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/main.scss"

import 'typeface-notosans-jp'
import 'typeface-lato'

const Layout = ({ children, page }) => (
    <div>
        <Header page={page}/>

        <div className="u-effect-fadein">{children}</div>

        <Footer />
    </div>

)

export default Layout
