module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-actions",
        '@storybook/addon-essentials',
        "@storybook/preset-create-react-app",
        "storybook-addon-react-docgen",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },],
    typescript: {
        check: false,
        checkOptions: {
        },
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
}


