import { Meta } from '@storybook/react'
import React from 'react';
import Spinner, { Props } from "../index"

export default {
    title: "Spinner",
    component: Spinner,
    argTypes: {
        children: { control: "ReactNode" },
        showSpinner: { control: "boolean" },
    }
} as Meta

const template = (args: Props) => <Spinner {...args} />

export const SampleButton = template.bind({});
SampleButton.args = {
    children: <div>this is test</div>,
    showSpinner: true
};