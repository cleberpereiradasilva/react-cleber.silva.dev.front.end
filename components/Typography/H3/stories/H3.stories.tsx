import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { H3 } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/H3",
  component: H3,
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
        `import { H3 } from './components/Typography'`
      ),
  ],
} as ComponentMeta<typeof H3>

const Template: ComponentStory<typeof H3> = (args) => (
  <H3 {...args}>{args.children}</H3>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "88",
  dataTestid: "item-test-id",
}
