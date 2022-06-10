import React from "react"
import * as Styled from "./style"

export const H3 = ({ children, dataTestid }) => {
  return <Styled.H3 data-testid={`${dataTestid || ""}`}>{children}</Styled.H3>
}
