/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      blue: '#4DA1FF',
      lightblue: '#F4F8F9',
      red: '#FC577A',
      vividred: '#FF7878',
      orange: '#FF6D4A',
      yellow: '#FFD012',
      grey: '#868686',
      darkgrey: '#989898',
    },
    extend: {
      borderRadius: {
        '1xl': '6px',
        '2xl': '20px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-animatecss')({
      classes: [
        'animate__animated',
        'animate__fadeIn',
        'animate__bounceIn',
        'animate__lightSpeedOut',
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
};
