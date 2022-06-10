import { render } from "@testing-library/react"
import { Socials } from "../Socials"

describe("Socials", () => {
  test("Socials component with LinkedIn icon", () => {
    const { container } = render(<Socials urlLinkedIn="urlLinkedIn" />)
    expect(container.querySelector("[href='urlLinkedIn']")).toBeTruthy()
  })

  test("Socials component with Facebook icon", () => {
    const { container } = render(<Socials urlFacebook="urlFacebook" />)
    expect(container.querySelector("[href='urlFacebook']")).toBeTruthy()
  })

  test("Socials component with Youtube icon", () => {
    const { container } = render(<Socials urlYoutube="urlYoutube" />)
    expect(container.querySelector("[href='urlYoutube']")).toBeTruthy()
  })

  test("Socials component with Instagram icon", () => {
    const { container } = render(<Socials urlInstagram="urlInstagram" />)
    expect(container.querySelector("[href='urlInstagram']")).toBeTruthy()
  })

  test("Socials component with Twitter icon", () => {
    const { container } = render(<Socials urlTwitter="urlTwitter" />)
    expect(container.querySelector("[href='urlTwitter']")).toBeTruthy()
  })
})
