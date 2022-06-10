import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { SourceCard } from "../../../.storybook-helpers"
import { Socials } from "../Socials"

export default {
  title: "Socials/Socials",
  component: Socials,
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
        `import { Socials } from './components/Socials'`
      ),
  ],
} as ComponentMeta<typeof Socials>

const Template: ComponentStory<typeof Socials> = (args) => <Socials {...args} />

export const Primary = Template.bind({})
Primary.args = {
  dataTestid: "item-test-id",
  urlLinkedIn: "#",
  urlYoutube: "#",
  urlInstagram: "#",
  urlFacebook: "#",
  urlTwitter: "#",
}
