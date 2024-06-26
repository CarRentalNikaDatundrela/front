import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/landing.jpeg')",
      },
      boxShadow: {
        "long-white-fade":
          "0 0 10px 5px rgba(255, 255, 255, 0.9), " +
          "0 0 20px 10px rgba(255, 255, 255, 0.875), " +
          "0 0 30px 15px rgba(255, 255, 255, 0.85), " +
          "0 0 40px 20px rgba(255, 255, 255, 0.825), " +
          "0 0 50px 25px rgba(255, 255, 255, 0.8), " +
          "0 0 60px 30px rgba(255, 255, 255, 0.775), " +
          "0 0 70px 35px rgba(255, 255, 255, 0.75), " +
          "0 0 80px 40px rgba(255, 255, 255, 0.725), " +
          "0 0 90px 45px rgba(255, 255, 255, 0.7), " +
          "0 0 100px 50px rgba(255, 255, 255, 0.675), " +
          "0 0 110px 55px rgba(255, 255, 255, 0.65), " +
          "0 0 120px 60px rgba(255, 255, 255, 0.625), " +
          "0 0 130px 65px rgba(255, 255, 255, 0.6), " +
          "0 0 140px 70px rgba(255, 255, 255, 0.575), " +
          "0 0 150px 75px rgba(255, 255, 255, 0.55), " +
          "0 0 160px 80px rgba(255, 255, 255, 0.525), " +
          "0 0 170px 85px rgba(255, 255, 255, 0.5), " +
          "0 0 180px 90px rgba(255, 255, 255, 0.475), " +
          "0 0 190px 95px rgba(255, 255, 255, 0.45), " +
          "0 0 200px 100px rgba(255, 255, 255, 0.425), " +
          "0 0 210px 105px rgba(255, 255, 255, 0.4), " +
          "0 0 220px 110px rgba(255, 255, 255, 0.375), " +
          "0 0 230px 115px rgba(255, 255, 255, 0.35), " +
          "0 0 240px 120px rgba(255, 255, 255, 0.325), " +
          "0 0 250px 125px rgba(255, 255, 255, 0.3), " +
          "0 0 260px 130px rgba(255, 255, 255, 0.275), " +
          "0 0 270px 135px rgba(255, 255, 255, 0.25), " +
          "0 0 280px 140px rgba(255, 255, 255, 0.225), " +
          "0 0 290px 145px rgba(255, 255, 255, 0.2), " +
          "0 0 300px 150px rgba(255, 255, 255, 0.175), " +
          "0 0 310px 155px rgba(255, 255, 255, 0.15), " +
          "0 0 320px 160px rgba(255, 255, 255, 0.125), " +
          "0 0 330px 165px rgba(255, 255, 255, 0.1), " +
          "0 0 340px 170px rgba(255, 255, 255, 0.075), " +
          "0 0 350px 175px rgba(255, 255, 255, 0.05)",
        "brands-shadow": "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "longer-white-fade":
          "0 0 10px 5px rgba(255, 255, 255, 0.9), " +
          "0 0 20px 10px rgba(255, 255, 255, 0.875), " +
          "0 0 30px 15px rgba(255, 255, 255, 0.85), " +
          "0 0 40px 20px rgba(255, 255, 255, 0.825), " +
          "0 0 50px 25px rgba(255, 255, 255, 0.8), " +
          "0 0 60px 30px rgba(255, 255, 255, 0.775), " +
          "0 0 70px 35px rgba(255, 255, 255, 0.75), " +
          "0 0 80px 40px rgba(255, 255, 255, 0.725), " +
          "0 0 90px 45px rgba(255, 255, 255, 0.7), " +
          "0 0 100px 50px rgba(255, 255, 255, 0.675), " +
          "0 0 110px 55px rgba(255, 255, 255, 0.65), " +
          "0 0 120px 60px rgba(255, 255, 255, 0.625), " +
          "0 0 130px 65px rgba(255, 255, 255, 0.6), " +
          "0 0 140px 70px rgba(255, 255, 255, 0.575), " +
          "0 0 150px 75px rgba(255, 255, 255, 0.55), " +
          "0 0 160px 80px rgba(255, 255, 255, 0.525), " +
          "0 0 170px 85px rgba(255, 255, 255, 0.5), " +
          "0 0 180px 90px rgba(255, 255, 255, 0.475), " +
          "0 0 190px 95px rgba(255, 255, 255, 0.45), " +
          "0 0 200px 100px rgba(255, 255, 255, 0.425), " +
          "0 0 210px 105px rgba(255, 255, 255, 0.4), " +
          "0 0 220px 110px rgba(255, 255, 255, 0.375), " +
          "0 0 230px 115px rgba(255, 255, 255, 0.35), " +
          "0 0 240px 120px rgba(255, 255, 255, 0.325), " +
          "0 0 250px 125px rgba(255, 255, 255, 0.3), " +
          "0 0 260px 130px rgba(255, 255, 255, 0.275), " +
          "0 0 270px 135px rgba(255, 255, 255, 0.25), " +
          "0 0 280px 140px rgba(255, 255, 255, 0.225), " +
          "0 0 290px 145px rgba(255, 255, 255, 0.2), " +
          "0 0 300px 150px rgba(255, 255, 255, 0.175), " +
          "0 0 310px 155px rgba(255, 255, 255, 0.15), " +
          "0 0 320px 160px rgba(255, 255, 255, 0.125), " +
          "0 0 330px 165px rgba(255, 255, 255, 0.1), " +
          "0 0 340px 170px rgba(255, 255, 255, 0.075), " +
          "0 0 350px 175px rgba(255, 255, 255, 0.05), " +
          "0 0 360px 180px rgba(255, 255, 255, 0.025), " +
          "0 0 370px 185px rgba(255, 255, 255, 0.02), " +
          "0 0 380px 190px rgba(255, 255, 255, 0.015), " +
          "0 0 390px 195px rgba(255, 255, 255, 0.01), " +
          "0 0 400px 200px rgba(255, 255, 255, 0.005), " +
          "0 0 410px 205px rgba(255, 255, 255, 0.0025)",
      },
    },
  },
  plugins: [],
};
export default config;
