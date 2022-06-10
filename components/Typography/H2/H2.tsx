import React from "react"
import * as Styled from "./style"

export const H2 = ({ children, dataTestid }) => {
  return <Styled.H2 data-testid={`${dataTestid || ""}`}>{children}</Styled.H2>
}
