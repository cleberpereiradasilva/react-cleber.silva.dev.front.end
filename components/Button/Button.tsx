import React, { useState } from "react"
import * as Styled from "./style"

export const Button = () => {
  const [message, setMessage] = useState("")
  return (
    <>
      <Styled.Button
        onClick={() =>
          setMessage(
            "Everything is perfect. Your account is ready and we should probably get you started!"
          )
        }
      >
        Button
      </Styled.Button>
      <br />
      <div>{message}</div>
    </>
  )
}
