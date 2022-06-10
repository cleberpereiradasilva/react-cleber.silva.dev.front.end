import { render, screen } from "@testing-library/react"
import React from "react"
import { Details } from "../Details"

describe("Details", () => {
  test("renders Details component", () => {
    render(<Details>Content</Details>)

    expect(screen.getByText("Content")).toBeTruthy()
  })
})
