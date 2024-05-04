import FooterPage from "@/component/FooterPage";
import HeaderPage from "@/component/HeaderPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const currentYear = new Date().getFullYear().toString(); // Pindahkan perhitungan tahun ke sini

export const metadata = {
  title: 'My Page Title',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body} className={inter.className} key={0}>
        <HeaderPage />
        {children}
        <FooterPage currentYear={currentYear} />{" "}
        {/* Mengirimkan tahun sebagai prop */}
      </body>
    </html>
  );
}

const styles = {
  body: {
    height: "100%",
    width: "98%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};
