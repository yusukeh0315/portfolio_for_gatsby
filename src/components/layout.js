import React from "react"
// import { Helmet } from "react-helmet"
// import { withPrefix } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
// import Javascript from "../components/javascript"

import "./layout.css"

const Layout = ({ children }) => (
    <div>
        <Header />

        {children}

        <Footer />
        {/* <Javascript /> */}
        {/* <Helmet>
            <script src={'https://code.jquery.com/jquery-3.4.1.min.js'} type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous" />
            <script src={'https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js'} type="text/javascript" />
            <script src={'https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js'} type="text/javascript" />
            <script src={'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js'} type="text/javascript" />
            <script src={withPrefix('/javascripts/main.js')} type="text/javascript" />
        </Helmet> */}
    </div>

)

export default Layout
