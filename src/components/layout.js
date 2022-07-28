import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import { Helmet } from "react-helmet"

import "../styles/main.scss"

const Layout = ({ children }) => (
    <div>
        <Helmet>
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
        />
        </Helmet>
        <Header />

        <div className="u-effect-fadein">{children}</div>

        <Footer />
    </div>

)

export default Layout
