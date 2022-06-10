import { render, screen } from "@testing-library/react"
import React from "react"
import { Paragraphy } from "../Paragraphy"

describe("H1", () => {
  test("renders Paragraphy component", () => {
    render(<Paragraphy>Content</Paragraphy>)

    expect(screen.getByText("Content")).toBeTruthy()
  })
})
