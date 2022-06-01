import { expect } from "@storybook/jest"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { within } from "@storybook/testing-library"
//import "jest-dom/extend-expect"
import React from "react"
import { SourceCard } from "../../../.storybook-helpers"
import { NavLink } from "../NavLink"

export default {
  title: "NavLink/NavLink",
  component: NavLink,
  argTypes: {
    dataTestid: {
      type: "string",
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, { args }) =>
      SourceCard(
        Story,
        { args },
        `import { NavLink } from './components/NavLink'`
      ),
  ],
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args}>{args.children}</NavLink>
)

export const Default = Template.bind({})
Default.args = {
  children: "Projetos e Mais",
  "data-testid": "item-test-id",
  href: "#anchor",
  active: false,
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const element = canvas.getByTestId("item-test-id")
  expect(element.getAttribute("href")).toEqual("#anchor")
}

export const Active = Template.bind({})
Active.args = {
  children: "Projetos e Mais",
  "data-testid": "item-test-id",
  href: "#",
  active: true,
}
