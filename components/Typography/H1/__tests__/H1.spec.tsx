import { render, screen } from "@testing-library/react"
import React from "react"
import { H1 } from "../H1"

describe("H1", () => {
  test("renders H1 component", () => {
    render(<H1>Content</H1>)

    expect(screen.getByText("Content")).toBeTruthy()
  })
})
