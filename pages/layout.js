import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
<div style={{height:'80',weight:'auto',backgroundColor:'red'}}>Руперт</div>

        {children}
      </body>
    </html>
  );
}
