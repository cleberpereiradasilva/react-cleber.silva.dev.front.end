import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { SourceCard } from "../../../.storybook-helpers"
import { H2, H3, Paragraphy } from "../../Typography"
import { Details } from "../Details"

export default {
  title: "Details/Details",
  component: Details,
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
        `import { Details } from './components/Details'`
      ),
  ],
} as ComponentMeta<typeof Details>

const Template: ComponentStory<typeof Details> = (args) => (
  <Details dataTestid={args.dataTestid} {...args}>
    <H2>{args.title}</H2>
    <Paragraphy>{args.content}</Paragraphy>
  </Details>
)

const TemplateBig: ComponentStory<typeof Details> = (args) => (
  <Details dataTestid={args.dataTestid} {...args}>
    <H2>{args.title}</H2>
    <H3>{args.content}</H3>
  </Details>
)

export const Left = Template.bind({})
Left.args = {
  title: "Sub Title",
  content:
    "Everything is perfect. Your account is ready and we should probably get you started!",
  dataTestid: "item-test-id",
}

export const Right = Template.bind({})
Right.args = {
  title: "Sub Title",
  right: true,
  content:
    "Everything is perfect. Your account is ready and we should probably get you started!",
  dataTestid: "item-test-id",
}

export const Big = TemplateBig.bind({})
Big.args = {
  title: "Sub Title",
  right: true,
  content: "98",
  dataTestid: "item-test-id",
}
