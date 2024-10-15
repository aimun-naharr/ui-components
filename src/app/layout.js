import localFont from "next/font/local";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ui Components",
  description: "Made with react, tailwind",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <AnimatedCursor color="145, 212, 231" /> */}
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
