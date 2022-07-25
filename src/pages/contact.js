import React from "react"
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data, location }) => (
  <div>
    <Layout>
      <Seo
        pagetitle="Contact"
        pagedesc="お問い合わせ"
        pagepath={location.pathname}
      />

      <section className="l-contact">
        <div className="l-contact__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">Contact</h2>
          </div>

          <div className="p-contact__lead-wrapper">
            <p className="p-contact__lead">
              制作の依頼、ご質問などお問い合わせください。<br />
              下記のフォームより、記入お願いします。
            </p>
          </div>

          <div className="p-contact__main">
            <form className="p-contact__form" id="form" method="post" action="https://www.flexyform.com/f/6b68836a9cdc6e7f2a5f1f7d39e6b4ac8ba8c6cd">
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="name">氏名<span className="c-require-label">必須</span></label>
                <input className="p-contact__input" id="name" type="text" name="entry.1318927522" placeholder="氏名" />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="email">メールアドレス<span className="c-require-label">必須</span></label>
                <input className="p-contact__input" id="email" type="email" name="entry.725509795" placeholder="メールアドレス" />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="tel">電話番号</label>
                <input className="p-contact__input" id="tel" type="tel" name="entry.1924974026" placeholder="電話番号" />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="company">会社名</label>
                <input className="p-contact__input" id="company" type="text" name="entry.1354523248" placeholder="会社名" />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="message">お問い合わせ内容<span className="c-require-label">必須</span></label>
                <textarea className="p-contact__message" id="message" name="entry.195281403" placeholder="お問い合わせ内容" defaultValue={""} />
              </div>
              <button className="c-submit-button" type="submit">送信</button>
            </form>
          </div>
        </div>
      </section>


    </Layout>
  </div>

)

export default Contact
