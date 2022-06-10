import React from "react"
import * as Styled from "./style"

export const Details = ({ children, dataTestid, ...args }) => {
  return (
    <Styled.Details data-testid={`${dataTestid || ""}`} {...args}>
      {children}
    </Styled.Details>
  )
}
