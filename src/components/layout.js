import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/main.scss"

const Layout = ({ children }) => (
    <div>
        <Header />

        <div className="u-effect-fadein">{children}</div>

        <Footer />
    </div>

)

export default Layout
