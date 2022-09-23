import React, { useState, useContext } from "react"
import { useFormContext } from "react-hook-form"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Checkbox from "@mui/material/Checkbox"
import { FormGroup } from "@mui/material"

import { EstimateContext } from "../pages/estimate"
import { TypeContext } from "../pages/estimate"
import { WebContext } from "../pages/estimate"

const EstimateCheckbox = ({ question_title, inputQuestions }) => {
  const methods = useFormContext()
  const [value, setValue] = useContext(EstimateContext)
  const [webValue, setWebValue] = useContext(WebContext)
  const [type, ] = useContext(TypeContext)
  const [currentValue, setCurrentValue] = useState(0)
  const [questions, setQuestions] = useState(inputQuestions)

  const handleChange = e => {
    const newQuestions = questions.map(question => {
      const newQuestion = { ...question }
      if (newQuestion.label === e.target.value) {
        newQuestion.checked = !question.checked
      }

      return newQuestion
    })
    setQuestions(newQuestions)

    let sumVal = 0
    newQuestions.forEach(question => {
      if (question.checked) {
        sumVal = sumVal + question.value
      }
    })

    const addValue = sumVal - currentValue
    // setValue(value + addValue)
    // setCurrentValue(sumVal)

    if (
      question_title === "その他、必要な要件はありますか？"
    ) {
      setWebValue(webValue + addValue)
      setCurrentValue(sumVal)
    } else {
      setValue(value + addValue)
      setCurrentValue(sumVal)
    }
  }
  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {question_title}
        </FormLabel>
        <FormGroup>
          {questions.map(question => {
            let disable = false
            if (
              (question_title === "その他、必要な要件はありますか？") &&
              type === 1
            ) {
              disable = true
            }
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={disable}
                    checked={question.checked}
                    onChange={handleChange}
                  />
                }
                key={question.label}
                id={question.label}
                value={question.label}
                label={question.label}
                {...methods.register(`${question_title}`)}
              />
            )
          })}
        </FormGroup>
      </FormControl>
    </>
  )
}

export default EstimateCheckbox
