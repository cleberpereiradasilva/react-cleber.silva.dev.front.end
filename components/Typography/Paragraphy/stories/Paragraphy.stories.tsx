import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Paragraphy } from ".."
import { SourceCard } from "../../../../.storybook-helpers"

export default {
  title: "Typography/Paragraphy",
  component: Paragraphy,
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
        `import { P } from './components/Typography/Paragraphy'`
      ),
  ],
} as ComponentMeta<typeof Paragraphy>

const Template: ComponentStory<typeof Paragraphy> = (args) => (
  <Paragraphy {...args}>{args.children}</Paragraphy>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "All cojntent and details",
  dataTestid: "item-test-id",
}
