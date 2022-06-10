import { render, screen } from "@testing-library/react"
import React from "react"
import { H2 } from "../H2"

describe("H1", () => {
  test("renders H1 component", () => {
    render(<H2>Content</H2>)
    expect(screen.getByText("Content")).toBeTruthy()
  })
})
