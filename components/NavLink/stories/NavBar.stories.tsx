import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Nav, NavLink } from "../"
import { SourceCard } from "../../../.storybook-helpers"

export default {
  title: "NavLink/Nav",
  component: Nav,
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
        `import { NavLink, Nav } from './components/NavLink'`
      ),
  ],
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <NavLink key={1} href="#anchor" active={false}>
      Projetos e Mais
    </NavLink>
    <NavLink key={2} href="#anchor" active={true}>
      Projetos e Mais
    </NavLink>
    <NavLink key={3} href="#anchor" active={false}>
      Projetos e Mais
    </NavLink>
  </Nav>
)

export const Default = Template.bind({})
Default.args = {
  "data-testid": "item-nav-test-id",
}
