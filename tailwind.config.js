/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        DungGeunMo: ['DungGeunMo'],
        ChemyRetro: ['ChemyRetro'],
        Pretendard: ['Pretendard'],
        Pretendards: ['Pretendards'],
      },
    },
  },
  plugins: [],
};
