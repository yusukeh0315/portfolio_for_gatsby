import axios from "axios"
import { navigate } from "gatsby"
import React from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextField from "@mui/material/TextField"

const Contact = ({ location }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    const baseUrl = "https://ssgform.com/s/lYHV1IEpi02m"
    console.log(data)

    var params = new URLSearchParams()
    params.append("name", data["name"])
    params.append("email", data["email"])
    params.append("message", data["message"])

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
      <Layout page="contact">
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
                制作の依頼、ご質問などお問い合わせください。
                <br />
                下記のフォームより、記入お願いします。
              </p>
            </div>

            <div className="p-contact__main">
              <form
                className="p-contact__form"
                id="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="p-contact__item">
                  <TextField
                    id="standard-basic"
                    label="氏名"
                    variant="standard"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <div className="c-error-message">
                      氏名を入力してください。
                    </div>
                  )}
                </div>
                <div className="p-contact__item">
                  <TextField
                    id="standard-basic"
                    label="メールアドレス"
                    variant="standard"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <div className="c-error-message">
                      メールアドレスを入力してください。
                    </div>
                  )}
                </div>
                <div className="p-contact__item">
                  <TextField
                    id="standard-basic"
                    label="電話番号"
                    variant="standard"
                    name="tel"
                    type="tel"
                  />
                </div>
                <div className="p-contact__item">
                  <TextField
                    id="standard-basic"
                    label="会社名"
                    variant="standard"
                    type="text"
                    name="company"
                  />
                </div>
                <div className="p-contact__item">
                  <TextField
                    id="standard-textarea"
                    label="お問い合わせ内容"
                    placeholder=""
                    multiline
                    variant="standard"
                    name="message"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <div className="c-error-message">
                      お問い合わせ内容を入力してください。
                    </div>
                  )}
                </div>
                <input className="c-submit-button" type="submit" />
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Contact
