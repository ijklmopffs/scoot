/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "bg-desktop": "url('/src/assets/Bitmap.jpg')",
        "bg-mobile": "url('/src/assets/BitmapM.png')",
        "bg-tablet": "url('/src/assets/BitmapTablet.jpg')",
        "bg-about-desktop": "url('/src/assets/About-desktop.svg')",
        "bg-careers-desktop": "url('/src/assets/careers-desktop.png')",
        "footer-desktop": "url('/src/assets/MaskF.png')",
        "footer-tablet": "url('/src/assets/footer-tablet.png')",
        "footer-mobile": "url('/src/assets/Group 22.svg')",
      }),
    },
  },
  plugins: [],
};
