import React from "react"
import { useFormContext } from "react-hook-form"
import TextField from "@mui/material/TextField"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext()

  return (
    <>
        <div className="p-contact__item">
          <TextField
            id="standard-basic"
            label="氏名"
            variant="standard"
            name="name"
            {...register("name", { required: true })}
            error={"name" in errors}
            helperText={"name" in errors ? "入力してください" : ""}
          />
        </div>
        <div className="p-contact__item">
          <TextField
            id="standard-basic"
            label="メールアドレス"
            variant="standard"
            type="email"
            name="email"
            {...register("email", { required: true })}
            error={"email" in errors}
            helperText={"email" in errors ? "入力してください" : ""}
          />
        </div>
        <div className="p-contact__item">
          <TextField
            id="standard-basic"
            label="電話番号"
            variant="standard"
            name="tel"
            type="tel"
            {...register("tel")}
          />
        </div>
        <div className="p-contact__item">
          <TextField
            id="standard-basic"
            label="会社名"
            variant="standard"
            type="text"
            name="company"
            {...register("company")}
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
            error={"message" in errors}
            helperText={"message" in errors ? "入力してください" : ""}
          />
        </div>
    </>
  )
}

export default Form
