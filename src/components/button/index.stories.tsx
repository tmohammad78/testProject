import { storiesOf } from '@storybook/react'
import React from 'react';

import Button from './index'

storiesOf('Button', module).add('with background', () => (
    <Button>This is test</Button>
)).add("bg color", () => (
    <Button >sdcsdc</Button>
))