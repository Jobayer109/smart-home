/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a91edb",
        
"secondary": "#7780ce",
        
"accent": "#63e3f2",
        
"neutral": "#272C3A",
        
"base-100": "#F4F4F6",
        
"info": "#3A7FEE",
        
"success": "#39DB9A",
        
"warning": "#F6CE3C",
        
"error": "#FB0949",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
