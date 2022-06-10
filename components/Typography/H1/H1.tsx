import React from "react"
import * as Styled from "./style"

export const H1 = ({ children, dataTestid }) => {
  return <Styled.H1 data-testid={`${dataTestid || ""}`}>{children}</Styled.H1>
}
