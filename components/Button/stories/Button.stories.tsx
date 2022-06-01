import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { SourceCard } from "../../../.storybook-helpers"
import { Button } from "../Button"

export default {
  title: "Button/Button",
  component: Button,
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
        `import { Button } from './components/Button'`
      ),
  ],
} as ComponentMeta<typeof Button>

const PrimrayTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} primary onClick={() => console.log("clicou")}>
    {args.children}
  </Button>
)

const SecondaryTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} secondary>
    {args.children}
  </Button>
)

const DisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} disabled={true}>
    {args.children}
  </Button>
)

export const Primary = PrimrayTemplate.bind({})
Primary.args = {
  children: "Enviar",
  dataTestid: "item-test-id",
}

export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
  children: "Enviar",
  dataTestid: "item-test-id",
}

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {
  children: "Enviar",
  dataTestid: "item-test-id",
}

// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)
//   await userEvent.click(canvas.getByTestId("item-test-id"))
//   await expect(
//     canvas.getByText(
//       "Everything is perfect. Your account is ready and we should probably get you started!"
//     )
//   ).toBeInTheDocument()
// }
