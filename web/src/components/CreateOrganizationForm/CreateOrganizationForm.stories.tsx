// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import CreateOrganizationForm from './CreateOrganizationForm'

const meta: Meta<typeof CreateOrganizationForm> = {
  component: CreateOrganizationForm,
}

export default meta

type Story = StoryObj<typeof CreateOrganizationForm>

export const Primary: Story = {}
