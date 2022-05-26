
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    'storybook/docs/panel': { hidden: true }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}




