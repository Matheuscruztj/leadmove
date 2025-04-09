// tailwind.config.(js|ts)

module.exports = {
  content: [
    // ... your project files, eg.:
    // './index.html',
    // './src/**/*.{vue,js,ts,jsx,tsx}',
    './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors
        'dark-gray': '#2D2D2D', // main background
        'medium-gray': '#5E6A71', // for secondary buttons and dividers
        'light-gray': '#E0E0E0', // for text in the sidebar and other elements
        'vibrant-orange': '#FF6F00', // primary buttons
        'royal-blue': '#0061F2', // primary buttons or links
        'dark-blue': '#003B5C', // a more subdued blue for highlights
        'white': '#FFFFFF', // for text on dark backgrounds
        'success-green': '#007F5F', // for success messages
        'error-red': '#FF4C4C', // for error messages
        'warning-yellow': '#FFB74D', // for alerts
      }
    },
  },
  plugins: [
    require('@vueform/vueform/tailwind'),
  ]
} 
 
 
 
 
 
