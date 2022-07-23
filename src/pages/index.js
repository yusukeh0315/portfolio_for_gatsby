import React, { useState } from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { motion } from "framer-motion"
import Modal from "../components/modal"
import Card from "../components/card"

const Home = ({ data }) => {

  // モーダルの表示状態と切り替える為にState(props)を準備
  // false = 非表示、数値 = 表示しているModalの番目とする
  const [modalIsOpen, setIsOpen] = useState(false);

  //どのモーダルを表示するのか操作するために関数を準備
  const handleOpenModal = (num) => {
      setIsOpen(num)
  }

  return (
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
              {data.allMicrocmsWorks.edges.map(({ node }, index) => (
                <div className="p-cards-works__item c-card-works key={node.id}"><motion.a onClick={() => handleOpenModal(index)} className="c-card-works__link js-modal__open" href data-target="modal01">
                    <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src={node.thumbnail.url} /></figure></motion.a></div>
              ))}
            </div>
          </div>
        </section>

        {/* modal*/}
        {data.allMicrocmsWorks.edges.map(({ node }, index) => {

          return (
          <Modal modalIsOpen={modalIsOpen === index} onClose={() => setIsOpen(false)}>
            <Card node={node} />
          </Modal>
          )
        })}

      </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    allMicrocmsWorks(
      skip: 0
      limit: 6
    ) {
      edges {
        node {
          id
          title
          skills {
            category
            categorySlug
          }
          desc
          period
          thumbnail {
            url
          }
          image01 {
            url
          }
          image02 {
            url
          }
          image03 {
            url
          }
          image04 {
            url
          }
          site_url
        }
      }
    }
  }
`

export default Home
