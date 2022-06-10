import React from "react"
import * as Styled from "./style"

export const Paragraphy = ({ children, dataTestid }) => {
  return (
    <>
      <Styled.Paragraphy data-testid={`${dataTestid || ""}`}>
        {children}
      </Styled.Paragraphy>
    </>
  )
}
