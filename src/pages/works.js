import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Works = props => (
  <div>
    <Layout>
      <Seo
        pagetitle="Works"
        pagedesc="事業実績など"
        pagepath={props.location.pathname}
      />

      <div>
        <section className="l-works">
          <div className="l-works__inner">
            <div className="p-section__title-wrapper">
              <h2 className="p-section__title js_typing">Works</h2>
            </div>
            {/* /.section__title-wrapper*/}
            <div className="p-cards-works p-cards-works--col3">
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal01">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/portfolio.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">Portfolio</p>
                  <p className="c-card-works__text">HTML / CSS / Javascript</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal02">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/coding01.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">Javascriptを利用した静的サイト</p>
                  <p className="c-card-works__text">HTML / CSS / Javascript</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal03">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/coding02.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">Javascriptを利用した静的サイト</p>
                  <p className="c-card-works__text">HTML / CSS / Javascript / WordPress / PHP</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal04">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/wpcustom-thumbnail.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">WordPress会員ログイン機能の追加</p>
                  <p className="c-card-works__text">WordPress / PHP</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal05">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/coding04.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">CMSを利用した動的サイト</p>
                  <p className="c-card-works__text">Design</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal06">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/sample_thumbnail.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">オートメーション化の事例</p>
                  <p className="c-card-works__text">Python / PAD / Ui Path</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal07">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/coding03.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">Javascriptを利用した静的サイト</p>
                  <p className="c-card-works__text">HTML / CSS / Javascript</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal08">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/design01.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">コーポレートサイトデザイン</p>
                  <p className="c-card-works__text">Design</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
              </div>
              <div className="p-cards-works__item card"><a className="c-card-works__link js-modal__open" href data-target="modal09">
                  <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="../images/design02.png" /></figure></a>
                <div className="c-card-works__body">
                  <p className="c-card-works__title">ショッピングサイトデザイン</p>
                  <p className="c-card-works__text">Design</p>
                </div>
                {/* /.c-card-works__body*/}
                {/* /.card*/}
                {/* /.main-works-cards*/}
                {/* /.main-works__inner*/}
              </div>
            </div>
          </div>
        </section>
        {/* modal*/}
        <div className="c-modal js-modal" id="modal01">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/portfolio/"><img className="c-modal__img" id="bigimg" alt="写真：実績" src="../images/portfolio.png" /></a>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/portfolio.png" alt="サムネイル" data-image="../images/portfolio.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/portfolio-01.png" alt="サムネイル" data-image="../images/portfolio-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/portfolio-02.png" alt="サムネイル" data-image="../images/portfolio-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/portfolio-03.png" alt="サムネイル" data-image="../images/portfolio-03.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">Portfolio</h3>
                <p className="c-modal__item">使用言語など： Design / HTML / CSS / Javascript</p>
                <p className="c-modal__item">実装期間： 6日</p>
                <p className="c-modal__text">
                  このWebサイトです。デザインからコーディングまで行いました。シンプルで洗練されたイメージでデザインしました。
                  コーディングで盛り込んだ機能も必要最低限にし、ご確認いただきたいポートフォリオへのアクセシビリティを意識した実装にしています。<br /><br />                        Javascriptを使用し、Worksのイメージをクリックするとモーダル（ブラウザ上に別枠で表示されるウィンドウ）が表示されるよう実装しています。
                  また、お問い合わせフォームは必須項目を入力しないと送信できないよう実装しており、Google Formへ入力情報を送信できるよう機能を具備しました。
                  今後はもう少し動きのある効果を盛り込んで改修していきたいと思っています。
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal01*/}
        <div className="c-modal c-modal--single-page js-modal" id="modal02">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/yourcoding/"><img className="c-modal__img" alt="写真：実績" src="../images/coding01.png" /></a></div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">Javascriptを利用した静的サイト</h3>
                <p className="c-modal__item">使用言語など： HTML / CSS / Javascript</p>
                <p className="c-modal__item">実装期間： 3日</p>
                <p className="c-modal__text">
                  デザインカンプ（デザインの完成見本図）から、レスポンシブ対応のコーディングを行いました。
                  デザインカンプはPCデザインのみのため、タブレットやスマートフォン向けのデザインも行っています。<br /><br />                        Javascriptを使用し、スマートフォンのメニュー、FAQのアコーディオンメニュー、サイト内リンクのスクロールなどを実装しました。
                  また、お問い合わせフォームは必須項目を入力しないと送信できないよう実装しており、Google Formへ入力情報を送信できるよう機能を具備しました。
                  そのほか、AOS.jsやSwiper.jsなどのJavascriptのライブラリを利用した動きのあるWebサイトになっています。<br /><br />                        ※ 架空サイトのため、Basic認証を設定しています。ID: guest / Password: guest123 を入力してご覧ください。
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal02*/}
        <div className="c-modal js-modal" id="modal03">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/ishiikadan/"><img className="c-modal__img" alt="写真：実績" src="../images/coding02.png" /></a>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding02.png" alt="サムネイル" data-image="../images/coding02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding02-01.png" alt="サムネイル" data-image="../images/coding02-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding02-02.png" alt="サムネイル" data-image="../images/coding02-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding02-03.png" alt="サムネイル" data-image="../images/coding02-03.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">Javascriptを利用した静的サイト</h3>
                <p className="c-modal__item">使用言語など： HTML / CSS / Javascript</p>
                <p className="c-modal__item">実装期間： 4日</p>
                <p className="c-modal__text">
                  デザインカンプ（デザインの完成見本図）から、レスポンシブ対応のコーディングを行いました。
                  デザインカンプはPCデザインのみのため、タブレットやスマートフォン向けのデザインも行っています。<br /><br />                        Javascriptを使用し、スマートフォンのメニュー、タブ形式の表示切り替え、ヘッダーメニューのエフェクトなどを実装しました。
                  また、宿泊予約をクリックすると、モーダル（ブラウザ上に別枠で表示されるウィンドウ）が表示されるようにしています。
                  Javascriptのライブラリflatpickrで日にちを選択し、Google Formへ入力情報を送信できるよう機能を具備しました。
                  そのほか、AOS.jsやSwiper.jsなどのJavascriptのライブラリを利用した動きのあるWebサイトになっています。<br /><br />                        ※ 架空サイトのため、Basic認証を設定しています。ID: guest / Password: guest123 を入力してご覧ください。
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal03*/}
        <div className="c-modal js-modal" id="modal04">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images">
                <p className="c-modal__img-wrapper"><img className="c-modal__img" alt="写真：実績" src="../images/wpcustom-thumbnail.png" /></p>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/wpcustom-01.png" alt="サムネイル" data-image="../images/wpcustom-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/wpcustom-02.png" alt="サムネイル" data-image="../images/wpcustom-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/wpcustom-03.png" alt="サムネイル" data-image="../images/wpcustom-03.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/wpcustom-04.png" alt="サムネイル" data-image="../images/wpcustom-04.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">WordPress会員ログイン機能の追加</h3>
                <p className="c-modal__item">使用言語など： WordPress / PHP</p>
                <p className="c-modal__item">実装期間： 5日</p>
                <p className="c-modal__text">運用中のWordPressを使ったWebサイトに、プラグインWP-Membersを利用した会員ログイン機能追加を行いました。<br /><br />                        プラグインの導入のみでは、まかなえない機能、カスタマイズはWordPressのfunction.phpを使って要望に合わせてメールの配信やメールの内容、パスワードリセットの方式を実装しました。<br /><br /></p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal04*/}
        <div className="c-modal js-modal" id="modal05">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.wp.xdomain.jp/"><img className="c-modal__img" alt="写真：実績" src="../images/coding04.png" /></a>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding04.png" alt="サムネイル" data-image="../images/coding04.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding04-01.png" alt="サムネイル" data-image="../images/coding04-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding04-02.png" alt="サムネイル" data-image="../images/coding04-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/coding04-03.png" alt="サムネイル" data-image="../images/coding04-03.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">CMSを利用した動的サイト</h3>
                <p className="c-modal__item">使用言語など： HTML / CSS / Javascript / WordPress / PHP</p>
                <p className="c-modal__item">実装期間： 10日</p>
                <p className="c-modal__text">
                  デザインカンプ（デザインの完成見本図）から、レスポンシブ対応のコーディングを行い、CMS（Contents Management System）の1つWordPressで実装しました。
                  デザインカンプはPCデザインのみのため、タブレットやスマートフォン向けのデザインも行っています。<br /><br />                        Javascriptを使用しているのは、スマートフォンのメニューのみです。
                  その他、問い合わせフォーム、パンくずリストなどはWordPressのプラグインを利用しています。
                  メールベースであれば、支払機能を除き、予約を受け付けるところまでを実装しています。<br /><br />                        ※ 架空サイトのため、Basic認証を設定しています。ID: guest / Password: guest123 を入力してご覧ください。
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal05*/}
        <div className="c-modal js-modal" id="modal06">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images">
                <p className="c-modal__img-wrapper"><img className="c-modal__img" alt="写真：実績" src="../images/sample01.png" /></p>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/sample01.png" alt="サムネイル" data-image="../images/sample01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/sample02.png" alt="サムネイル" data-image="../images/sample02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/sample03.png" alt="サムネイル" data-image="../images/sample03.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/sample04.png" alt="サムネイル" data-image="../images/sample04.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">RPA（Robotic Process Aautomation）</h3>
                <p className="c-modal__item">使用言語など： Python / Ui Path / Power Automate Desktop / Google App Script</p>
                <p className="c-modal__text"><span className="item">RPAについて</span><br />                        パソコン上のソフトウェアやクラウドサービス、スマート家電と連携したオートメーション化の実装を行いました。
                  使用するソフトウェア、サービスなどは、要求事項にに応じた構成を検討して実装します。<br /><br />                        基本的に人間の感情などの判断が含まれない明文化できる作業はオートメーション化が可能となりますが、
                  使用するソフトウェア、サービスによってはランニングコストが発生することや、
                  何らかの制約によって実装不可能なケースもあります。<br /><br /><span className="item">事例参考リンク</span><br /><a className="link" target="_blank" rel="noopener noreferrer" href="https://support.switch-bot.com/hc/ja/articles/1500011319922-SwitchBot%E9%96%8B%E9%96%89%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC-%E5%87%BA%E3%82%8B%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A8%E5%85%A5%E3%82%8B%E3%83%A2%E3%83%BC%E3%83%89">SwitchBot開閉センサー出るモード</a><br /><a className="link" target="_blank" rel="noopener noreferrer" href="https://jp.candyhouse.co/">セサミ スマートロック</a><br /><br />
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal06*/}
        <div className="c-modal c-modal--single-page js-modal" id="modal07">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/samplecorp/"><img className="c-modal__img" alt="写真：実績" src="../images/coding03.png" /></a></div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">Javascriptを利用した静的サイト</h3>
                <p className="c-modal__item">使用言語など： HTML / CSS / Javascript</p>
                <p className="c-modal__item">実装期間： 4日</p>
                <p className="c-modal__text">
                  デザインカンプ（デザインの完成見本図）から、レスポンシブ対応のコーディングを行いました。
                  デザインカンプはPCデザインのみのため、タブレットやスマートフォン向けのデザインも行っています。<br /><br />                        Javascriptを使用し、スマートフォンのメニュー、FAQのアコーディオンメニュー、サイト内リンクのスクロールなどを実装しました。
                  また、お問い合わせフォームは必須項目を入力しないと送信できないよう実装しており、Google Formへ入力情報を送信できるよう機能を具備しました。
                  そのほか、ResultsのセクションではJavascriptのライブラリSwiper.jsを利用し、ページネーション（スライドが何枚あって、何枚目かを表示するパーツ）のカスタマイズを行っています。<br /><br />                        ※ 架空サイトのため、Basic認証を設定しています。ID: guest / Password: guest123 を入力してご覧ください。
                </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal07*/}
        <div className="c-modal js-modal" id="modal08">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/Anksf2MwlHQj06dO1miQKc/Portfolio_desgin01?node-id=0%3A1"><img className="c-modal__img" alt="写真：実績" src="../images/design01.png" /></a>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design01.png" alt="サムネイル" data-image="../images/design01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design01-01.png" alt="サムネイル" data-image="../images/design01-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design01-02.png" alt="サムネイル" data-image="../images/design01-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design01-03.png" alt="サムネイル" data-image="../images/design01-03.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">コーポレートサイトデザイン</h3>
                <p className="c-modal__item">使用言語など： Design(Figma)</p>
                <p className="c-modal__item">実装期間： 2日</p>
                <p className="c-modal__text">以下の架空の案件を想定してPC表示、スマートフォン表示のデザインを行いました。<br /><br /><span className="item">案件</span><br />                        今回のクライアントはフリーランスの活用をコンサルする東フリコンサルです。ITに疎い企業さんを手助けするためにフリーランスのエンジニアやデザイナーを紹介、活用支援を行なっている会社です。<br /><span className="item">ターゲット</span><br />                        設立から5年以上経っている営業会社、人材会社、IT事業を始めようと思っている企業です。クライアントは40代以上の男性が多く、みなさんITは全くわからないそうです。<br /><span className="item">サイトに求めること</span><br />                        web上での集客を強めたいのが今回の目的。アニメーションなどは必要なく、ミニマムの物であれば良い。<br /><span className="item">デザインイメージ</span><br />                        歴史あるコンサル会社を感じさせるきっちりした雰囲気のサイトが欲しい。</p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal08*/}
        <div className="c-modal js-modal" id="modal09">
          <div className="c-modal__bg js-modal__close" />
          <div className="c-modal__content">
            <div className="c-modal__inner">
              <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/C3bSbI7sDNqA5Ic6ibnRWq/Portfolio_design02?node-id=0%3A1"><img className="c-modal__img" alt="写真：実績" src="../images/design02.png" /></a>
                <ul className="c-modal__thumbs-list">
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design02.png" alt="サムネイル" data-image="../images/design02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design02-01.png" alt="サムネイル" data-image="../images/design02-01.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design02-02.png" alt="サムネイル" data-image="../images/design02-02.png" /></li>
                  <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="../images/design02-03.png" alt="サムネイル" data-image="../images/design02-03.png" /></li>
                </ul>
              </div>
              {/* /.c-modal__images*/}
              <div className="c-modal__body">
                <h3 className="c-modal__title">ショッピングサイトデザイン</h3>
                <p className="c-modal__item">使用言語など： Design(Figma)</p>
                <p className="c-modal__item">実装期間： 3日</p>
                <p className="c-modal__text">以下の架空の案件を想定してPC表示、スマートフォン表示のデザインを行いました。<br /><br /><span className="item">案件</span><br />                        女性向けのプロテインのECサイトです。TOKYO PROTEINのオリジナルプロテインを販売するECサイトです。<br /><span className="item">ターゲット</span><br />                        20代～30代の女性で、コンスタントにトレーニングし、しっかり体を鍛えている人をターゲットとしています。<br /><span className="item">サイトに求めること</span><br />                        プロテインを購入していただきたい。<br /></p><a className="js-modal__close c-modal__close" href><span>×</span></a>
              </div>
              {/* /.c-modal__body*/}
              {/* /.c-modal__inner*/}
              {/* /.c-modal__content*/}
            </div>
          </div>
        </div>
        {/* /#modal09*/}
        {/* ./modal*/}
      </div>

      <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
        <script src="/javascripts/main.js"></script>

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

export default Works
