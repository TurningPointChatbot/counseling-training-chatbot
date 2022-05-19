module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/daisyui/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {},
    colors: {
      'base-400': '#c4c4c4',
      'blue-light': '#08caf0',
      'blue-dark': '#014486',
      white: '#ffffff',
      black: '#000000',
      red: '#1cc778',
      green: '#dc3545'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#852e82',
          'primary-focus': '#ebc5ea',
          'primary-content': '#ffffff',
          secondary: '#f5a313',
          'secondary-focus': '#fbc706',
          'secondary-content': '#ffffff',
          accent: '#3fa4c4',
          'accent-focus': '#91d9e1',
          'accent-content': '#ffffff',
          success: '#1cc778',
          error: '#dc3545',
          'base-100': '#ffffff',
          'base-200': '#f8f9fa',
          'base-300': '#dfdfdf'
        }
      }
    ]
  }
};
