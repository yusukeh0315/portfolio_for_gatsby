import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const About = ({ data }) => (
  <div>
    <Layout>

      <section className="l-about">
        <div className="l-about__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">About</h2>
          </div>
          {/* /.section__title-wrapper*/}
          <div className="p-career">
            <p className="p-career__text">
              高専で電子制御工学、大学で経営情報工学を学んだのち、大手メーカーにてSEとして従事。コーディングや、インフラ、プロジェクトマネジメントまで幅広く担当。
              2022年に退社し、ITエンジニアとしてフリーランスに転向。
            </p>
          </div>
          {/* /.career*/}
          <div className="p-profile">
            <p className="p-profile__name">HASEGAWA</p>
            <p className="p-profile__address">所在地： 千葉県</p>
            <p className="p-profile__business_dsc">事業内容： Webデザイン、HTML・CSSコーディング、WordPress導入、PythonやPower Automate Desktop、Ui Pathなどによる業務支援、効率化など</p>
          </div>
          {/* /.profile*/}
          {/* /.about_inner*/}
        </div>
      </section>
      <section className="l-skills">
        <div className="l-skills__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">Skills</h2>
          </div>
          {/* /.section__title-wrapper*/}
          <div className="p-skills__lead-wrapper">
            <p className="p-skills__lead">スキルレベルの目安は次の通りです。</p>
            <ul>
              <li><span className="num">1:</span>知識がある、軽く使用した程度</li>
              <li><span className="num">2:</span>実務レベルで使用できるがもう少し習熟が必要</li>
              <li><span className="num">3:</span>実務レベルの実装が可能</li>
              <li><span className="num">4:</span>既存実務をカスタマイズして実装が可能</li>
              <li><span className="num">5:</span>経験を体系化し先進的なやり方を工夫・開発が可能</li>
            </ul>
          </div>
          {/* /.skills__lead-wrapper*/}
          <div className="p-cards-skills p-cards-skills--col2">
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/html.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">HTML5/CSS3</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">FigmaやAdobe XDなどのデザインカンプからのパーフェクトピクセルでのコーディングが可能です。また、レスポンシブ対応、Sass、BEMの対応可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/javascript.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Javascript</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">
                  jQueryを利用した動きのあるWebサイトの制作が可能です。
                  スマートフォンのメニューや、アコーディオンメニュー、モーダルなど一般的に使用されている機能の実装、カスタマイズの対応が可能です。
                </p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/wordpress-icon.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">WordPress</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">
                  オリジナルテーマの制作が可能です。既に運用されているテーマのカスタマイズも対応できます。
                  また、NoCode（プログラミング言語なし）で運用可能なテーマの提供も可能です。
                </p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/php-alt.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">PHP</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">WordPressのオリジナルテーマの制作、カスタマイズを行う範囲で対応可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/python.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Python</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">WebスクレイピングやCSV、Excelなどの操作、PC上のGUI操作などの自動化の実装が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/gas.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Google Apps Script</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Gmail、Form、 SpreadSheet、Documentなどと連携した自動化や簡易なスクレイピングの実装が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/pad.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Power Automate Desktop</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Windows上のアプリやブラウザなどと連携した自動化やスクレイピングの実装が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/uipath.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Ui Path</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Windows上のアプリやブラウザなどと連携した自動化やスクレイピングの実装が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/figma.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Figma</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Webページのデザインを作成すること、デザインからコーディングで利用することが可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/adobe-xd.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Adobe XD</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Webページのデザインを作成すること、デザインからコーディングで利用することが可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/git-icon.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Git</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">基本的なソース管理、運用が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
            </div>
            <div className="p-cards-skills__item c-card">
              <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src="/images/infra.svg" alt="画像：ロゴ" /></div>
              {/* /.c-card-skills__logo-wrapper*/}
              <div className="c-card-skills__body">
                <p className="c-card-skills__title">Infrastructure</p>
                <p className="c-card-skills__point"><span className="point-on">★</span><span className="point-on">★</span><span className="point-on">★</span><span className="point-off">★</span><span className="point-off">★</span></p>
                <p className="c-card-skills__text">Linuxなどのサーバ、ネットワーク機器などオンプレミス（クラウドサービスに対し、物理的なハードを設置して運用する環境構成）での開発、運用の経験があり、総合的な対応が可能です。</p>
              </div>
              {/* /.c-card-skills__body*/}
              {/* /.c-card*/}
              {/* /.p-cards-skills*/}
              {/* /.skills__inner*/}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  </div>

)

export const query = graphql`
query {
  pen: file(relativePath: {eq: "pen-fancy-solid.svg"}) {
    publicURL
  }
  laptop: file(relativePath: {eq: "laptop-code-solid.svg"}) {
    publicURL
  }
  robot: file(relativePath: {eq: "robot-solid.svg"}) {
    publicURL
  }
  portfolio: file(relativePath: {eq: "portfolio.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  coding01: file(relativePath: {eq: "coding01.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  coding02: file(relativePath: {eq: "coding02.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  wpcustom: file(relativePath: {eq: "wpcustom-thumbnail.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  coding04: file(relativePath: {eq: "coding04.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  rpa: file(relativePath: {eq: "sample_thumbnail.png"}) {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
}
`

export default About
