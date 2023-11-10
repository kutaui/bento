/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    theme: {
        safelist: ['animate-[fade-in-right]', 'animate-[fade-in-down_1s_ease-in-out]']


    },
    plugins: [require('tailwindcss-animated'),require('tailwindcss-animate')]
};