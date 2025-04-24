import { Poppins } from "next/font/google";// Load the Roboto font

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Specify the weights you need
    variable: "--font-poppins", // Define a CSS variable for the font
  });