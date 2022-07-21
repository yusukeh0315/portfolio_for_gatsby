import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = props => (
  <div>
    <Layout>

      <Seo />

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
                <svg className="c-card-service__icon" aria-hidden="true" data-prefix="fas" data-icon="pen-fancy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M79.18 282.94a32.005 32.005 0 0 0-20.24 20.24L0 480l4.69 4.69 92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8 0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.983 31.983 0 0 0 20.24-20.24l33.07-84.07-98.88-98.88-84.07 33.07zM369.25 28.32L186.14 227.81l97.85 97.85 199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32z" />
                </svg>
              </figure>
              <div className="card__body">
                <p className="c-card-service__text">デザインは目的を達成するための手段であり、大きな効果をもたらす役割りを担います。使う人の立場を常に考え、目的を達成するための論理的なデザインを提案させていただきます。</p>
              </div>
            </div>
            <div className="p-cards-service__item c-card-service">
              <h3 className="c-card-service__title">Web制作</h3>
              <h4 className="c-card-service__sub-title">Web Coding</h4>
              <figure className="c-card-service__icon-wrapper">
                <svg className="c-card-service__icon" aria-hidden="true" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                </svg>
              </figure>
              <div className="c-card-service__body">
                <p className="c-card-service__text">デザインの意図を理解し、動きや効果を適切に使用したWebサイトを提供します。レスポンシブ対応やWordPressなど更新性の高いサイトなど様々なコーディングを対応いたします。</p>
              </div>
            </div>
            <div className="p-cards-service__item c-card-service">
              <h3 className="c-card-service__title">業務効率化</h3>
              <h4 className="c-card-service__sub-title">Business efficiency</h4>
              <figure className="c-card-service__icon-wrapper">
                <svg className="c-card-service__icon" aria-hidden="true" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
                </svg>
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
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal01">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/portfolio.png" /></figure></a></div>
            {/* /.c-card-works*/}
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal02">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/coding01.png" /></figure></a></div>
            {/* /.c-card-works*/}
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal03">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/coding02.png" /></figure></a></div>
            {/* /.c-card-works*/}
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal04">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/wpcustom-thumbnail.png" /></figure></a></div>
            {/* /.c-card-works*/}
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal05">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/coding04.png" /></figure></a></div>
            {/* /.c-card-works*/}
            <div className="p-cards-works__item c-card-works"><a className="c-card-works__link js-modal__open" href data-target="modal06">
                <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src="/images/sample_thumbnail.png" /></figure></a></div>
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

export default Home
