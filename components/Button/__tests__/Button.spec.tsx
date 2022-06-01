import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import React from "react"
import { Button } from "../Button"

describe("Button", () => {
  test("renders Button component", () => {
    const { getByText } = render(<Button>Click here</Button>)
    expect(getByText("Click here")).toBeTruthy()
  })

  test("renders Disabled Button component", () => {
    const { getByText } = render(<Button disabled>Click here</Button>)
    expect(getByText("Click here")).toHaveAttribute("disabled")
  })

  test("test Button click", async () => {
    const mockHandle = jest.fn()
    const { getByText } = render(
      <Button onClick={mockHandle}>Click here</Button>
    )
    const button = getByText("Click here")
    await fireEvent.click(button)
    expect(mockHandle).toBeCalled()
  })
})
