import "./globals.css"
import SmoothScroller from "@/components/SmoothScroller";

export const metadata = {
  title: "PortFolio | Aman Vishnoi",
  decription: "Fullstack Web Dev"
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
      <SmoothScroller>
        {children}
      </SmoothScroller>
      </body>
    </html>
  );
}
