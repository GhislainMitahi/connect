import { Manrope, Poppins, ABeeZee, Raleway, Inter } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });

export const raleway = Raleway({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})