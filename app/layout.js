import { GoogleTagManager } from "@next/third-parties/google"; 
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamza Nawabi | Full Stack-Developer",
  description:
    "Portfolio of Hamza Nawabi – A highly skilled React and full-stack web developer based in Kabul, Afghanistan. Specializing in modern, responsive websites and applications.",
  keywords: [
    "Hamza Nawabi",
    "web developer Kabul",
    "React developer Afghanistan",
    "Best Web Developer in Kabul",
    "full stack developer Kabul",
    "frontend developer Afghanistan",
    "backend developer Kabul",
    "Node.js developer",
    "JavaScript developer Afghanistan",
    "Express.js expert Kabul",
    "Tailwind CSS developer",
    "PHP developer Afghanistan",
    "Bootstrap developer Kabul",
    "jQuery expert",
    "MongoDB developer Afghanistan",
    "MySQL developer Kabul",
    "MERN stack developer",
    "software engineer Afghanistan",
    "custom web developer",
    "responsive website developer",
    "portfolio developer Afghanistan",
    "freelance web developer Kabul",
    "hire full stack developer Afghanistan",
    "freelance PHP programmer Kabul",
    "best developer in Afghanistan",
    "most skilled Afghan developer",
    "highly experienced developer Kabul",
    "top-rated programmer Afghanistan",
    "popular developer in Kabul",
    "best person in Afghanistan tech",
    "young tech talent Afghanistan",
    "developer portfolio",
    "web designer"
  ],    
  openGraph: {
    title: "Hamza Nawabi | Best Web Developer in Afghanistan",
    description:
      "Explore the portfolio of Hamza Nawabi, a skilled full-stack developer specializing in React, Node.js, and Tailwind CSS.",
    url: "https://nawabi-resume.netlify.app", // ✅ Replace this with your actual domain
    siteName: "Hamza Nawabi Portfolio",
    images: [
      {
        url: "https://nawabi-resume.netlify.app/_next/image/?url=%2Fprofile.jpg&w=828&q=75", // ✅ Replace with your actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Nawabi | Full-Stack Developer in Kabul",
    description: "Hamza Nawabi’s developer portfolio showcasing top-tier web skills.",
    images: ["https://nawabi-resume.netlify.app/_next/image/?url=%2Fprofile.jpg&w=828&q=75"], // ✅ Same image here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
