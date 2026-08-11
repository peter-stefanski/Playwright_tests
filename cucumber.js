export default {
  default: {
    paths: ['src/features/**/*.feature'],
    import: [
      'src/features/support/world.js',
      'src/features/support/hooks.js',
      'src/features/step.definition/**/*.js',
    ],
    format: ['progress'],
    publishQuiet: true,
  },
};
