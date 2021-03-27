import { Meta } from '@storybook/react'
import React from 'react';
import Button from '../index'
import { Props } from "../index"

export default {
    title: "Button",
    component: Button,
    argTypes: {
        children: { control: 'text' },
        bgColor: { control: "color" },
        borderColor: { control: "color" },
        color: { control: "color" },
        className: { control: "text" },
        prl: { contorl: "number" },
        ptb: { contorl: "number" },
        fontSize: { contorl: "number" }
    }
} as Meta

const template = (args: Props) => <Button {...args} />

export const SampleButton = template.bind({});
SampleButton.args = {
    children: 'Click',
    bgColor: '#ff0',
    borderColor: '#ff0',
    color: '#5850E3',
    prl: 1,
    ptb: 1,
    className: "correct",
    fontSize: 1
};

// storiesOf('Button', module).add('with background', () => (
//     <Button onClick={action("clicked")} borderColor='green'>This is test</Button>
// )).add("bg color", () => (
//     <Button onClick={action("clicked")} borderColor='green'>sdcsdc</Button>
// ))