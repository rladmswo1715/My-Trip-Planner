import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'var-primary-500': '#1C68FF',
        'var-primary-600': '#1653CC',
        'var-enable': '#DEDEDE',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        jalnan: ['Jalnan', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
