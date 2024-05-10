import { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import { SIDEBAR_WIDTH } from "@/constant/constant";
import StoreProvider from "@/store/StoreProvider";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "this is description section",
};

type DashboardChildrenProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });
const DashboardLayout = ({ children }: DashboardChildrenProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <div className="flex w-full overflow-hidden">
              <Sidebar />
              <div className="w-full">
                <Header />
                <div className="w-full px-8 py-4 ">{children}</div>
              </div>
            </div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default DashboardLayout;
