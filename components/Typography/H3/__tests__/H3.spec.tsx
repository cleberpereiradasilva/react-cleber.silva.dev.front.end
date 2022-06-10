import { render, screen } from "@testing-library/react"
import React from "react"
import { H3 } from "../H3"

describe("H3", () => {
  test("renders H3 component", () => {
    render(<H3>Content</H3>)
    expect(screen.getByText("Content")).toBeTruthy()
  })
})
