import {
  Geist_Mono,
  Instrument_Serif,
  Inter_Tight,
  Manrope,
} from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const mainFont = Inter_Tight({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
});

const serif = Instrument_Serif({
  variable: "--font-intrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Athithya",
  description: "We welcome you to Athithya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} ${geistMono.variable} ${serif.variable}    border-gray-100  mx-auto w-full min-h-[100dvh]  antialiased`}
      >
        <Providers>
          <div className=" mx-auto w-full min-h-[100dvh] flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
