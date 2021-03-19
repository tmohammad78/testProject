import { storiesOf } from '@storybook/react'
import React from 'react';
import { action } from '@storybook/addon-actions'

import Button from './index'

export default {
    argTypes: { onClick: { action: 'clicked' } },
}
storiesOf('Button', module).add('with background', () => (
    <Button onClick={action("clicked")} borderColor='green'>This is test</Button>
)).add("bg color", () => (
    <Button onClick={action("clicked")} borderColor='green'>sdcsdc</Button>
))