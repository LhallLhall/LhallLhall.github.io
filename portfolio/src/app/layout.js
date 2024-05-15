import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "#181A1B"}} className={(
          "min-h-screen bg-background font-mono antialiased",
          fontSans.variable
        )}>{children}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
        </body>
    </html>
  );
}
