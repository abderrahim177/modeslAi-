
import Header from "./header";
import Sidebar from "./sidebar";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-svh w-full overflow-hidden bg-[#faf8f3]">

        <Sidebar />

        <SidebarInset className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#faf8f3]">

          <Header />

          <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
            {children}
          </main>

        </SidebarInset>

      </div>
    </SidebarProvider>
  );
}
