import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { H1, RainbowText } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/SiteTitle",
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
        `import { H1, RainbowText } from './components/Typography'`
      ),
  ],
} as ComponentMeta<typeof H1>

const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>
    All <RainbowText>contents </RainbowText> and Details
  </H1>
)

export const Primary = Template.bind({})
Primary.args = {
  dataTestid: "item-test-id",
}
