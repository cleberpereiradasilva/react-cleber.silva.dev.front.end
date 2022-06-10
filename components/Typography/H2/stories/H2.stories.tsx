import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { H2 } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/H2",
  component: H2,
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
        `import { H2 } from './components/Typography'`
      ),
  ],
} as ComponentMeta<typeof H2>

const Template: ComponentStory<typeof H2> = (args) => (
  <H2 {...args}>{args.children}</H2>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "Sub Title",
  dataTestid: "item-test-id",
}
