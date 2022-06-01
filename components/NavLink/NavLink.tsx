import React, { AnchorHTMLAttributes } from "react"
import * as Styled from "./style"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: any
  "data-testid"?: string
  active?: boolean
}

export const NavLink = (props: LinkProps) => {
  return (
    <Styled.A {...props}>
      <Styled.Span>{props.children}</Styled.Span>
      <Styled.Underline active={props.active} />
    </Styled.A>
  )
}
