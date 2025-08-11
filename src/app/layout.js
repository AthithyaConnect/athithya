import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const mainFont = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
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
        className={`${mainFont.className}   border-x  border-gray-100  mx-auto w-full min-h-[100dvh]  antialiased`}
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
