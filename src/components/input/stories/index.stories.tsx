import {Meta} from '@storybook/react'
import React from 'react'
import Input, {Props} from '../index'

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        color: {control: 'color'},
        className: {control: 'text'},
        border: {contorl: 'text'},
        placeHolder: {contorl: 'text'}
    }
} as Meta

const template = (args: Props) => <Input {...args} />

export const SampleButton = template.bind({})
SampleButton.args = {
    color: '#2E9FA0',
    className: 'input',
    border: '2px solid #B1B1B1',
    placeHolder: 'This is input'
}
