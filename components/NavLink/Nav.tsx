import React from "react"
import * as Styled from "./style"

interface NavProps {
  children: Array<JSX.Element>
}

export const Nav = ({ children }: NavProps) => {
  return <Styled.Nav>{children}</Styled.Nav>
}
