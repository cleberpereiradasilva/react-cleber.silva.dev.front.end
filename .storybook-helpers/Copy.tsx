import { useState } from "react"
import * as Styled from "./style"

export const Copy = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false)
  let timeout: ReturnType<typeof setTimeout>

  const handleClick = () => {
    if (!isCopied) {
      const cb = navigator.clipboard
      cb.writeText(value).then(() => {
        setIsCopied(true)
        timeout = setTimeout(() => {
          setIsCopied(false)
          clearInterval(timeout)
        }, 1000)
      })
    }
  }

  return (
    <Styled.Button onClick={handleClick}>
      {isCopied ? "Copied" : "Copy"}
    </Styled.Button>
  )
}
