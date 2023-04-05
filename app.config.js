export default ({ config }) => ({
  ...config,
  name: "Limbix Mobile Component Library",
  slug: "react-native-limbix-ui-storybook",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
