import Header from "./header";
import Sidebar from "./sidebar";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar />

      <SidebarInset className="min-w-0 bg-[#f8f7f4]">
        <Header />

        <main className="min-h-0 flex-1 overflow-hidden">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}