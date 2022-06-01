import React, { ButtonHTMLAttributes } from "react"
import * as Styled from "./style"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any
  dataTestid?: string
}

export const Button = ({ children, dataTestid, ...args }: Props) => {
  return (
    <>
      <Styled.Button data-testid={`${dataTestid || ""}`} {...args}>
        {children}
      </Styled.Button>
    </>
  )
}
