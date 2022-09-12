import React from "react"
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data, location }) => (
  <div>
    <Layout>
      <Seo
        pagetitle="Contact NG"
        pagedesc="お問い合わせ失敗"
        pagepath={location.pathname}
      />

      <section className="l-contact">
        <div className="l-contact__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">Contact</h2>
          </div>
          {/* /.section__title-wrapper*/}
          <div className="p-contact__lead-wrapper">
            <p className="p-contact__lead">
              大変申し訳ございません。送信に失敗しました。
            </p>
            <br />
            <p className="p-contact__lead">
              お手数ですが、再度お問い合わせを頂くか、下記のメールアドレスまでご連絡ください。
            </p>
            <br />
            <p className="p-contact__lead">hasegawa@vitworks.net</p>
          </div>
          {/* /.contact__lead-wrapper*/}
          {/* /.p-contact__main*/}
          {/* /.p-contact__inner*/}
        </div>
      </section>
    </Layout>
  </div>
)

export default Contact
