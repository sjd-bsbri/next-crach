import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
export const metadata = {
  title: "Traversy Media - Learn Web Development",
  description: "Modern web development tutorials and courses",
  keywords: "web development, web design, javascript, next.js, react, programming tutorials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="container">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
