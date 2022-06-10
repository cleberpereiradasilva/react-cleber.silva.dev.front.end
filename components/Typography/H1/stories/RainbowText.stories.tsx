import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { RainbowText } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/RainbowText",
  component: RainbowText,
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
        `import { RainbowText } from './components/Typography'`
      ),
  ],
} as ComponentMeta<typeof RainbowText>

const Template: ComponentStory<typeof RainbowText> = (args) => (
  <RainbowText {...args}>{args.children}</RainbowText>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "More Details",
  dataTestid: "item-test-id",
}
