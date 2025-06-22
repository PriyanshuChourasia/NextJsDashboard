import "@/app/ui/global.css";
import {inter} from "@/app/ui/fonts";
import StoreProvider from "./redux/StoreProvider";
import type { Metadata } from "next";
import QueryProvider from "./lib/QueryProvider";
import {Toaster} from "react-hot-toast";
import { ThemeProvider } from "./lib/themeProvider";


export const metadata: Metadata = {
  title:"WishAlpha",
  description:"....."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <QueryProvider>
              <StoreProvider>
                <Toaster/>
                {children}
              </StoreProvider>
          </QueryProvider>
      </body>
    </html>
  );
}
