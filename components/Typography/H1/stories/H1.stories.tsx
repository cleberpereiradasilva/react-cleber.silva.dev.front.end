import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { H1 } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/H1",
  component: H1,
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
        `import { H1 } from './components/Typography'`
      ),
  ],
} as ComponentMeta<typeof H1>

const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>{args.children}</H1>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "All cojntent and Details",
  dataTestid: "item-test-id",
}
