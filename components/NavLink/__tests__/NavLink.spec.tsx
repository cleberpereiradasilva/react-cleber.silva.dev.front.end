import { render, screen } from "@testing-library/react"
import React from "react"
import { NavLink } from "../NavLink"

describe("NavLink", () => {
  test("renders NavLink component", () => {
    render(<NavLink href="#">Content</NavLink>)
    expect(screen.getByText("Content")).toBeTruthy()
  })
})
