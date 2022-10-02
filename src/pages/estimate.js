import axios from "axios"
import React, { createContext, useState } from "react"
import { navigate } from "gatsby"
import { useForm, FormProvider } from "react-hook-form"
import Layout from "../components/layout"
import Form from "../components/form"
import Seo from "../components/seo"
import EstimateRadio from "../components/estimateradio"
import EstimateCheckbox from "../components/estimatecheckbox"

export const EstimateContext = createContext()
export const WebContext = createContext()
export const DesignContext = createContext()
export const PageContext = createContext()
export const TypeContext = createContext()
export const UnitContext = createContext()
export const DesignUnitContext = createContext()
export const CmsContext = createContext()

const Estimate = ({ location }) => {
  const [value, setValue] = useState(0)
  const [webValue, setWebValue] = useState(0)
  const [designValue, setDesignValue] = useState(0)
  const [cmsValue, setCmsValue] = useState(0)
  const [page, setPage] = useState(0)
  const [type, setType] = useState(0)
  const [unit, setUnit] = useState(0)
  const [designUnit, setDesignUnit] = useState(0)
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  // 一般管理費
  const generalManagementFeeRate = 1.05

  const questionTitle_01 = "依頼したい内容は何ですか？*"
  const question_01 = [
    { label: "Webサイトデザイン", value: 0 },
    { label: "Webサイト制作", value: 0 },
    { label: "Webサイトのデザイン、制作", value: 0 },
  ]

  const questionTitle_02 =
    "企画・構成設計・管理などのディレクション業務は必要ですか？"
  const question_02 = [
    { label: "不要", value: 0 },
    { label: "必要", value: 30000 },
    { label: "わからない", value: 0 },
  ]

  const questionTitle_03 = "新規に作成しますか？修正・更新しますか？*"
  const question_03 = [
    { label: "新規作成", value: 0 },
    { label: "修正・更新", value: 0 },
  ]

  const questionTitle_04 = "どんなホームページを作りたいですか？"
  const question_04 = [
    {
      label: "コーポレートサイト（会社・店舗を知ってもらいたい）",
      value: 0,
    },
    {
      label: "商品・サービスサイト（商品・サービスを知ってもらいたい）",
      value: 0,
    },
    {
      label: "ランディングページ（広告などで使う縦長の1ページを作りたい）",
      value: 0,
    },
    { label: "その他", value: 0 },
  ]

  const questionTitle_05 = "どのくらいページを作成しますか？*"
  const question_05 = [
    { label: "１～３", value: 0 },
    { label: "４～６", value: 0 },
    { label: "６～１０", value: 0 },
    { label: "１１～２０", value: 0 },
    { label: "２１～３０", value: 0 },
  ]

  const questionTitle_06 = "ログイン機能は必要ですか？"
  const question_06 = [
    { label: "いいえ", value: 0 },
    { label: "はい（ソーシャルログイン）", value: 10000 },
    { label: "はい（メールアドレス等）", value: 20000 },
  ]

  const questionTitle_07 = "会員登録・顧客管理を行いますか？"
  const question_07 = [
    { label: "いいえ", value: 0 },
    { label: "はい", value: 20000 },
  ]

  const questionTitle_08 = "決済できる機能は必要ですか？"
  const question_08 = [
    { label: "いいえ", value: 0 },
    { label: "はい", value: 20000 },
  ]

  const questionTitle_09 = "検索する機能は必要ですか？"
  const question_09 = [
    { label: "いいえ", value: 0 },
    { label: "はい", value: 10000 },
  ]

  const questionTitle_10 =
    "投稿機能、更新する項目、頻度はどのくらいですか？（CMSの導入、選定の参考にします）"
  const question_10 = [
    { label: "投稿、更新はしない（CMSを使用しない）", value: 0 },
    { label: "少ない（WordPress以外のCMSを使用する）", value: 0 },
    { label: "多い（WordPressを使用する）", value: 0 },
  ]

  const questionTitle_11 = "デザイン案はありますか？"
  const question_11 = [
    { label: "いいえ", value: 0 },
    {
      label: "はい（イメージ、参考サイト、ワイヤーフレームなどはある）",
      value: 0,
    },
    { label: "はい（デザインの作成はない）", value: 0 },
    { label: "おまかせ", value: 0 },
  ]

  const questionTitle_12 = "制作に必要な素材・写真の提供は可能ですか？"
  const question_12 = [
    { label: "いいえ", value: 20000 },
    { label: "はい（手書き、写真など）", value: 10000 },
    { label: "はい（デジタルファイル）", value: 0 },
  ]

  const questionTitle_13 = "その他、必要な要件はありますか？"
  const question_13 = [
    { label: "レスポンシブ対応", value: 0, checked: false },
    { label: "SEO対策", value: 0, checked: false },
    { label: "GoogleMapの設置", value: 0, checked: false },
    { label: "問い合わせフォームの設置", value: 15000, checked: false },
    { label: "レンタルサーバの契約代行", value: 5000, checked: false },
    { label: "ドメイン取得の契約代行", value: 5000, checked: false },
    { label: "ホームページ公開代行", value: 5000, checked: false },
  ]

  const estimatePrice = () => {
    let price = 0
    const createWebValue = page * unit
    const createDesignValue = page * unit * designUnit
    let createCmsValue = 0
    if (cmsValue === 0) {
      createCmsValue = 0
    } else if (cmsValue === 1) {
      createCmsValue = 20000
    } else if (cmsValue === 2) {
      createCmsValue = page * 10000
    }

    if (type === 1) {
      price = value + designValue + createDesignValue
    } else if (type === 2) {
      price = value + webValue + createWebValue + createCmsValue
    } else {
      price =
        value +
        designValue +
        webValue +
        createWebValue +
        createDesignValue +
        createCmsValue
    }

    price = price * generalManagementFeeRate

    price = Math.ceil(price / 1000) * 1000


    return price
  }

  const onSubmit = data => {
    const baseUrl = "https://ssgform.com/s/lYHV1IEpi02m"
    // console.log(data)

    var params = new URLSearchParams()
    params.append("name", data["name"])
    params.append("email", data["email"])
    params.append("tel", data["tel"])
    params.append("company", data["company"])
    params.append("message", data["message"])
    params.append("概算見積", estimatePrice())
    params.append(questionTitle_01, data[questionTitle_01])
    params.append(questionTitle_02, data[questionTitle_02])
    params.append(questionTitle_03, data[questionTitle_03])
    params.append(questionTitle_04, data[questionTitle_04])
    params.append(questionTitle_05, data[questionTitle_05])
    params.append(questionTitle_06, data[questionTitle_06])
    params.append(questionTitle_07, data[questionTitle_07])
    params.append(questionTitle_08, data[questionTitle_08])
    params.append(questionTitle_09, data[questionTitle_09])
    params.append(questionTitle_10, data[questionTitle_10])
    params.append(questionTitle_11, data[questionTitle_11])
    params.append(questionTitle_12, data[questionTitle_12])
    params.append(questionTitle_13, data[questionTitle_13])

    axios
      .post(baseUrl, params, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      })
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          navigate(`/contact_done`)
        } else {
          navigate(`/contact_ng`)
        }
      })
      .catch(function (error) {
        console.log(error)
        navigate(`/contact_ng`)
      })
  }

  return (
    <div>
      <Layout page="estimate">
        <Seo
          pagetitle="Estimate"
          pagedesc="お見積り"
          pagepath={location.pathname}
        />

        <section className="l-estimate">
          <div className="l-estimate__inner">
            <div className="p-section__title-wrapper">
              <h2 className="p-section__title">Estimate</h2>
            </div>
            <div className="p-estimate__lead-wrapper">
              <p className="p-estimate__lead">
                下記の質問に回答いただくと、Webサイト制作の概算見積もりを算出します。要件確認も兼ねていますので、選択しても見積もりが変わらない項目もあります。作成した見積をもとに詳細見積りの依頼をすることも可能です。
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className="p-section-h3__title-wrapper">
              <h3 className="p-section-h3__title">
                Web制作見積りフォーム(*必須)
              </h3>
            </div>

            <div className="p-estimate__main">
              <FormProvider {...methods}>
                <form
                  className="p-estimate__form"
                  id="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <EstimateContext.Provider value={[value, setValue]}>
                    <PageContext.Provider value={[page, setPage]}>
                      <TypeContext.Provider value={[type, setType]}>
                        <UnitContext.Provider value={[unit, setUnit]}>
                          <DesignUnitContext.Provider
                            value={[designUnit, setDesignUnit]}
                          >
                            <WebContext.Provider
                              value={[webValue, setWebValue]}
                            >
                              <DesignContext.Provider
                                value={[designValue, setDesignValue]}
                              >
                                <CmsContext.Provider
                                  value={[cmsValue, setCmsValue]}
                                >
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_01}
                                      inputQuestions={question_01}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_02}
                                      inputQuestions={question_02}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_03}
                                      inputQuestions={question_03}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_04}
                                      inputQuestions={question_04}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_05}
                                      inputQuestions={question_05}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_06}
                                      inputQuestions={question_06}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_07}
                                      inputQuestions={question_07}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_08}
                                      inputQuestions={question_08}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_09}
                                      inputQuestions={question_09}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_10}
                                      inputQuestions={question_10}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_11}
                                      inputQuestions={question_11}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateRadio
                                      question_title={questionTitle_12}
                                      inputQuestions={question_12}
                                    />
                                  </div>
                                  <div className="p-estimate__question">
                                    <EstimateCheckbox
                                      question_title={questionTitle_13}
                                      inputQuestions={question_13}
                                    />
                                  </div>
                                </CmsContext.Provider>
                              </DesignContext.Provider>
                            </WebContext.Provider>
                          </DesignUnitContext.Provider>
                        </UnitContext.Provider>
                      </TypeContext.Provider>
                    </PageContext.Provider>
                  </EstimateContext.Provider>
                  <p className="p-estimate__price">
                    概算お見積り額 {Number(estimatePrice()).toLocaleString()}
                    円（税込）
                  </p>
                  <div className="p-estimate__contact">
                    <div className="p-contact__main">
                      <Form />
                      <input
                        className="c-submit-button"
                        type="submit"
                        value="詳細見積もりを依頼する"
                      />
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Estimate
