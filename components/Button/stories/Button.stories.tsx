import { expect } from "@storybook/jest"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import React from "react"
import { Button } from "../Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Button",
}


Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole("button"))
  await expect(
    canvas.getByText(
      "Everything is perfect. Your account is ready and we should probably get you started!"
    )
  ).toBeInTheDocument()
}
