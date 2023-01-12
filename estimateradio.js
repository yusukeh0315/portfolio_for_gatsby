import React, { useState, useContext } from "react"
import { useFormContext } from "react-hook-form"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import FormHelperText from "@mui/material/FormHelperText"

import { EstimateContext } from "../pages/estimate"
import { PageContext } from "../pages/estimate"
import { TypeContext } from "../pages/estimate"
import { UnitContext } from "../pages/estimate"
import { DesignUnitContext } from "../pages/estimate"
import { WebContext } from "../pages/estimate"
// import { DesignContext } from "../pages/estimate"
import { CmsContext } from "../pages/estimate"

const EstimateRadio = ({ question_title, inputQuestions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext()
  const [value, setValue] = useContext(EstimateContext)
  const [, setPage] = useContext(PageContext)
  const [type, setType] = useContext(TypeContext)
  const [, setUnit] = useContext(UnitContext)
  const [, setDesignUnit] = useContext(DesignUnitContext)
  const [webValue, setWebValue] = useContext(WebContext)
  const [cmsValue, setCmsValue] = useContext(CmsContext)
  // const [designValue, setDesignValue] = useContext(DesignContext)
  const [currentValue, setCurrentValue] = useState(0)
  const [question, setQuestion] = useState(inputQuestions)

  const onChange = e => {
    setQuestion(e.target.value)

    let selectValue = 0
    let selectLabel = ""
    inputQuestions.forEach(question => {
      if (question.label === e.target.value) {
        selectValue = question.value
        selectLabel = question.label
      }
    })

    if (question_title === "依頼したい内容は何ですか？*") {
      if (selectLabel === "Webサイトのデザイン、制作") {
        setType(3)
      } else if (selectLabel === "Webサイト制作") {
        setType(2)
      } else {
        setType(1)
      }
    }

    if (question_title === "新規に作成しますか？修正・更新しますか？*") {
      if (selectLabel === "新規作成") {
        setUnit(15000)
      } else {
        setUnit(5000)
      }
    }

    if (question_title === "デザイン案はありますか？") {
      if (selectLabel === "いいえ") {
        setDesignUnit(1)
      } else if (
        selectLabel ===
        "はい（イメージ、参考サイト、ワイヤーフレームなどはある）"
      ) {
        setDesignUnit(0.8)
      } else if (selectLabel === "はい（デザインの作成はない）") {
        setDesignUnit(0)
      } else if (selectLabel === "おまかせ") {
        setDesignUnit(0)
      }
    }

    if (
      question_title ===
      "投稿機能、更新する項目、頻度はどのくらいですか？（CMSの導入、選定の参考にします）"
    ) {
      if (selectLabel === "投稿、更新はしない（CMSを使用しない）") {
        setCmsValue(0)
      } else if (selectLabel === "少ない（WordPress以外のCMSを使用する）") {
        setCmsValue(1)
      } else if (selectLabel === "多い（WordPressを使用する）") {
        setCmsValue(2)
      }
    }

    const addValue = selectValue - currentValue

    if (
      question_title === "ログイン機能は必要ですか？" ||
      question_title === "会員登録・顧客管理を行いますか？" ||
      question_title === "決済できる機能は必要ですか？" ||
      question_title === "検索する機能は必要ですか？"
    ) {
      setWebValue(webValue + addValue)
      setCurrentValue(selectValue)
    } else {
      setValue(value + addValue)
      setCurrentValue(selectValue)
    }

    if (question_title === "どのくらいページを作成しますか？*") {
      if (selectLabel === "１～３") {
        setPage(3)
      } else if (selectLabel === "４～６") {
        setPage(6)
      } else if (selectLabel === "６～１０") {
        setPage(10)
      } else if (selectLabel === "１１～２０") {
        setPage(20)
      } else if (selectLabel === "２１～３０") {
        setPage(30)
      } else {
        setPage(100)
      }
    }
  }

  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {question_title}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          {...register(`${question_title}`)}
        >
          {inputQuestions.map(value => {
            let disable = false
            if (
              (question_title === "ログイン機能は必要ですか？" ||
                question_title === "会員登録・顧客管理を行いますか？" ||
                question_title === "決済できる機能は必要ですか？" ||
                question_title === "検索する機能は必要ですか？" ||
                question_title ===
                  "投稿機能、更新する項目、頻度はどのくらいですか？（CMSの導入、選定の参考にします）") &&
              type === 1
            ) {
              disable = true
            } else if (
              question_title === "デザイン案はありますか？" &&
              type === 2
            ) {
              disable = true
            } else {
              disable = false
            }

            // HACK 質問によってreturnの結果を返している
            // requiredを変数で指定してもすべて必須で反映されてしまう。
            if (
              question_title === "依頼したい内容は何ですか？*" ||
              question_title === "新規に作成しますか？修正・更新しますか？*" ||
              question_title === "どのくらいページを作成しますか？*"
            ) {
              return (
                <FormControlLabel
                  key={value.label}
                  value={value.label}
                  disabled={disable}
                  control={
                    <Radio
                      checked={disable ? false : question === value.label}
                      onChange={onChange}
                    />
                  }
                  label={value.label}
                  {...register(`${question_title}`, { required: true })}
                />
              )
            } else {
              return (
                <FormControlLabel
                  key={value.label}
                  value={value.label}
                  disabled={disable}
                  control={
                    <Radio
                      checked={disable ? false : question === value.label}
                      onChange={onChange}
                    />
                  }
                  label={value.label}
                  {...register(`${question_title}`)}
                />
              )
            }
          })}
        </RadioGroup>
        <FormHelperText error={`${question_title}` in errors}>
          {`${question_title}` in errors && "入力してください"}
        </FormHelperText>
      </FormControl>
    </>
  )
}

export default EstimateRadio
