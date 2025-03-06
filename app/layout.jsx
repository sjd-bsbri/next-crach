import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Traversy Media",
  description: "Web developments tutorials",
  keywords: "web development, web design, javascript, next, react ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
