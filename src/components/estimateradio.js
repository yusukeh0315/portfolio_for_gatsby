import React, { useState, useContext } from "react"
import { useFormContext } from "react-hook-form"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

import { EstimateContext } from "../pages/estimate"
import { PageContext } from "../pages/estimate"
import { TypeContext } from "../pages/estimate"
import { UnitContext } from "../pages/estimate"
import { DesignUnitContext } from "../pages/estimate"
import { WebContext } from "../pages/estimate"
// import { DesignContext } from "../pages/estimate"

const EstimateRadio = ({ question_title, inputQuestions }) => {
  const methods = useFormContext()
  const [value, setValue] = useContext(EstimateContext)
  const [, setPage] = useContext(PageContext)
  const [type, setType] = useContext(TypeContext)
  const [, setUnit] = useContext(UnitContext)
  const [, setDesignUnit] = useContext(DesignUnitContext)
  const [webValue, setWebValue] = useContext(WebContext)
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

    if (
      question_title === "デザイン案はありますか？"
    ) {
      if (selectLabel === "いいえ") {
        setDesignUnit(0)
      } else if (
        selectLabel ===
        "はい（イメージ、参考サイト、ワイヤーフレームなどはある）"
      ) {
        setDesignUnit(0.8)
      } else if (selectLabel === "はい（デザインの作成はない）") {
        setDesignUnit(1.0)
      } else if (selectLabel === "おまかせ") {
        setDesignUnit(1.0)
      }
    }

    const addValue = selectValue - currentValue

    if (
      (question_title === "ログイン機能は必要ですか？" ||
        question_title === "会員登録・顧客管理を行いますか？" ||
        question_title === "決済できる機能は必要ですか？" ||
        question_title === "検索する機能は必要ですか？" ||
        question_title ===
          "更新する項目、頻度はどのくらいですか？（CMSの導入、選定の参考にします）")
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
      } else if (selectLabel === "４～９") {
        setPage(9)
      } else if (selectLabel === "１０～４９") {
        setPage(50)
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
        >
          {inputQuestions.map(value => {
            let required = false
            if (
              question_title === "依頼したい内容は何ですか？*" ||
              question_title === "新規に作成しますか？修正・更新しますか？*" ||
              question_title === "どのくらいページを作成しますか？*"
            ) {
              required = true
            }
            let disable = false
            if (
              (question_title === "ログイン機能は必要ですか？" ||
                question_title === "会員登録・顧客管理を行いますか？" ||
                question_title === "決済できる機能は必要ですか？" ||
                question_title === "検索する機能は必要ですか？" ||
                question_title ===
                  "更新する項目、頻度はどのくらいですか？（CMSの導入、選定の参考にします）") &&
              type === 1
            ) {
              disable = true;
            } else if (
              question_title === "デザイン案はありますか？" &&
              type === 2
            ) {
              disable = true
            } else {
              disable = false
            }
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
                {...methods.register(`${question_title}`, {
                  required: `${required}`,
                })}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default EstimateRadio
