import { configure } from "@storybook/react"
import React from 'react';

const req = require.context("../src", true, /.stories.tsx$/)
function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)