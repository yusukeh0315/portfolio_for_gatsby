import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Home = ({ data }) => (
  <div>
    <header className="l-header">
      <div className="l-header__inner">
        <div className="p-header-logo"><a className="p-header-logo__link" href="index.html">VIT Works</a></div>
        <nav className="p-header-nav">
          <ul className="p-header-nav__list">
            <li className="p-header-nav__item"><a className="p-header-nav__link" href="about.html">About</a></li>
            <li className="p-header-nav__item"><a className="p-header-nav__link" href="works.html">Works</a></li>
            <li className="p-header-nav__item"><a className="p-header-nav__link" href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    {/* Google Tag Manager (noscript)*/}
    {/* End Google Tag Manager (noscript)*/}
    <section className="l-fv">
      <div className="l-fv__inner">
        <div className="p-fv__title-wrapper">
          <h1 className="p-fv__title"><span className="js_typing">Provide solutions<span className="p-fv__title-point"> V</span>ia<span className="p-fv__title-point"> IT</span></span></h1>
          {/* /.fv-title-wrapper*/}
        </div>
        <p className="p-fv__text">ITを活用した様々なソリューションを提供します。<br /> WEBサイトのデザイン、制作や業務効率化はおまかせください。</p>
      </div>
      {/* /.fv__inner*/}
    </section>
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title js_typing">Service</h2>
        </div>
        <div className="p-cards-service p-cards-service--col3">
          <div className="p-cards-service__item c-card-service">
            <h3 className="c-card-service__title">デザイン</h3>
            <h4 className="c-card-service__sub-title">Design</h4>
            <figure className="c-card-service__icon-wrapper">
              <img className="c-card-service__icon" src={data.pen.publicURL} alt="" />
            </figure>
            <div className="card__body">
              <p className="c-card-service__text">デザインは目的を達成するための手段であり、大きな効果をもたらす役割りを担います。使う人の立場を常に考え、目的を達成するための論理的なデザインを提案させていただきます。</p>
            </div>
          </div>
          <div className="p-cards-service__item c-card-service">
            <h3 className="c-card-service__title">Web制作</h3>
            <h4 className="c-card-service__sub-title">Web Coding</h4>
            <figure className="c-card-service__icon-wrapper">
              <img className="c-card-service__icon" src={data.laptop.publicURL} alt="" />
            </figure>
            <div className="c-card-service__body">
              <p className="c-card-service__text">デザインの意図を理解し、動きや効果を適切に使用したWebサイトを提供します。レスポンシブ対応やWordPressなど更新性の高いサイトなど様々なコーディングを対応いたします。</p>
            </div>
          </div>
          <div className="p-cards-service__item c-card-service">
            <h3 className="c-card-service__title">業務効率化</h3>
            <h4 className="c-card-service__sub-title">Business efficiency</h4>
            <figure className="c-card-service__icon-wrapper">
              <img className="c-card-service__icon" src={data.robot.publicURL} alt="" />
            </figure>
            <div className="c-card-service__body">
              <p className="c-card-service__text">日々の決まったルーティーンや大量の情報の取得、操作など、マンパワーが必要とされる業務を自動化することで、コストの削減、利益拡大へとつなげるソリューションを提供します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="l-main-works">
      <div className="l-main-works__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title js_typing">Works</h2>
        </div>
        {/* /.section__title-wrapper*/}
        <div className="p-cards-works p-cards-works--col3">
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal01">
              <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.portfolio.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>
            </a>
          </div>
          {/* /.c-card-works*/}
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal02">
            <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.coding01.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>

            </a>
          </div>
          {/* /.c-card-works*/}
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal03">
            <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.coding02.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>

            </a>
          </div>
          {/* /.c-card-works*/}
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal04">
            <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.wpcustom.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>

            </a>
          </div>
          {/* /.c-card-works*/}
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal05">
            <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.coding04.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>

            </a>
          </div>
          {/* /.c-card-works*/}
          <div className="p-cards-works__item c-card-works">
            <a className="c-card-works__link js-modal__open" href data-target="modal06">
            <figure className="c-card-works__img-wrapper">
                  <GatsbyImage
                    className="c-card-works__img"
                    alt="写真：実績"
                    image={data.rpa.childImageSharp.gatsbyImageData}
                    imgStyle={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
              </figure>

            </a>
          </div>
          {/* /.c-card-works*/}
          {/* /.p-cards-works*/}
          {/* /.main-works__inner*/}
        </div>
      </div>
    </section>
    {/* modal*/}
    <div className="c-modal js-modal" id="modal01">
      <div className="c-modal__bg js-modal__close" />
      <div className="c-modal__content">
        <div className="c-modal__inner">
          <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/portfolio/"><img className="c-modal__img" id="bigimg" alt="写真：実績" src="/images/portfolio.png" /></a>
            <ul className="c-modal__thumbs-list">
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/portfolio.png" alt="サムネイル" data-image="..//images/portfolio.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/portfolio-01.png" alt="サムネイル" data-image="..//images/portfolio-01.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/portfolio-02.png" alt="サムネイル" data-image="..//images/portfolio-02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/portfolio-03.png" alt="サムネイル" data-image="..//images/portfolio-03.png" /></li>
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
          <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/yourcoding/"><img className="c-modal__img" alt="写真：実績" src="/images/coding01.png" /></a></div>
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
          <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.html.xdomain.jp/ishiikadan/"><img className="c-modal__img" alt="写真：実績" src="/images/coding02.png" /></a>
            <ul className="c-modal__thumbs-list">
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding02.png" alt="サムネイル" data-image="..//images/coding02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding02-01.png" alt="サムネイル" data-image="..//images/coding02-01.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding02-02.png" alt="サムネイル" data-image="..//images/coding02-02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding02-03.png" alt="サムネイル" data-image="..//images/coding02-03.png" /></li>
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
            <p className="c-modal__img-wrapper"><img className="c-modal__img" alt="写真：実績" src="/images/wpcustom-thumbnail.png" /></p>
            <ul className="c-modal__thumbs-list">
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/wpcustom-01.png" alt="サムネイル" data-image="..//images/wpcustom-01.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/wpcustom-02.png" alt="サムネイル" data-image="..//images/wpcustom-02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/wpcustom-03.png" alt="サムネイル" data-image="..//images/wpcustom-03.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/wpcustom-04.png" alt="サムネイル" data-image="..//images/wpcustom-04.png" /></li>
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
          <div className="c-modal__images"><a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href="http://yusukeh0315.wp.xdomain.jp/"><img className="c-modal__img" alt="写真：実績" src="/images/coding04.png" /></a>
            <ul className="c-modal__thumbs-list">
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding04.png" alt="サムネイル" data-image="..//images/coding04.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding04-01.png" alt="サムネイル" data-image="..//images/coding04-01.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding04-02.png" alt="サムネイル" data-image="..//images/coding04-02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/coding04-03.png" alt="サムネイル" data-image="..//images/coding04-03.png" /></li>
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
            <p className="c-modal__img-wrapper"><img className="c-modal__img" alt="写真：実績" src="/images/sample01.png" /></p>
            <ul className="c-modal__thumbs-list">
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/sample01.png" alt="サムネイル" data-image="..//images/sample01.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/sample02.png" alt="サムネイル" data-image="..//images/sample02.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/sample03.png" alt="サムネイル" data-image="..//images/sample03.png" /></li>
              <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src="/images/sample04.png" alt="サムネイル" data-image="..//images/sample04.png" /></li>
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
    {/* ./modal*/}
    <footer className="l-footer">
      <div className="l-footer__inner">
        <p className="p-footer">© 2022 HASEGAWA . All rights reserved.</p>
      </div>
      {/* /.footer__inner*/}
      {/* ============= JS ===============*/}
      {/* jQuery*/}
      {/* shuffle-text*/}
      {/* vivus*/}
      {/* jQuery Cookie*/}
      {/* js-file*/}
      {/* /body*/}
      {/* <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
      <script src="/javascripts/main.js"></script> */}
    </footer>
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

export default Home
