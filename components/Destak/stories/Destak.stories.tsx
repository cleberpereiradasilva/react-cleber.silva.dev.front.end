import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { SourceCard } from "../../../.storybook-helpers"
import { Destak } from "../Destak"

export default {
  title: "Destak/Destak",
  component: Destak,
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
        `import { Destak } from './components/Destak'`
      ),
  ],
} as ComponentMeta<typeof Destak>

const Template: ComponentStory<typeof Destak> = (args) => <Destak {...args} />

export const Primary = Template.bind({})
Primary.args = {
  images: [
    "https://novelsummary.com/wp-content/uploads/2021/04/Argumentative-Essay-On-Robots.jpg",
    "https://s24937.pcdn.co/wp-content/uploads/2017/09/Hario-V60-635x800.jpg",
    "https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/barista.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg",
  ],
  duration: 3,
  dataTestid: "item-test-id",
}
