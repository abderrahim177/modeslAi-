import Header from "./header";
import Sidebar from "./sidebar";
import HistorySidebar from "./HistorySidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#090a16] text-white p-1 md:p-5">
      <div className="max-w-[1600px] mx-auto h-[calc(100vh-24px)] md:h-[calc(100vh-40px)] rounded-2xl border border-white/20 overflow-hidden bg-[#0d0e1d] shadow-2xl shadow-purple-950/20 flex flex-col">
        <Header />

        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <HistorySidebar />

          <main className="flex-1 min-w-0 min-h-0 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}