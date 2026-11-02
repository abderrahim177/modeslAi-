
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  House,
  Search,
  Archive,
  Sparkles,
  Folder,
  Pin,
  MessageSquare,
  Plus,
  Settings,
  ChevronsUpDown,
} from "lucide-react";

const mainItems = [
  { title: "Home", icon: House },
  { title: "Search", icon: Search },
  { title: "Archived", icon: Archive },
  { title: "Upgrade", icon: Sparkles },
];

const projects = ["My Portfolio", "Learning AI", "Work"];

const pinnedChats = ["React Dashboard", "Laravel API"];

const chats = ["New chatbot project", "Gemini integration", "UI improvements"];

function MenuItems({ items }) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton tooltip={item.title}>
            <item.icon />
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export default function Sidebar() {
  return (
    <ShadSidebar
      collapsible="icon"
      className="border-r border-stone-200 bg-[#f8f7f4]"
    >
      <SidebarHeader className="px-2 py-5 overflow-hidden">
        <div className="flex h-10 w-full min-w-0 items-center gap-2 overflow-hidden">
          <div className="flex size-9 min-w-9 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-white">
            <MessageSquare size={19} />
          </div>

          <span className="truncate text-lg font-bold text-stone-900 group-data-[collapsible=icon]:hidden">
            Promptly
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#f8f7f4]">
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuItems items={mainItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <div className="flex items-center justify-between px-2">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <Plus size={15} className="text-stone-500" />
          </div>
          <SidebarGroupContent>
            <MenuItems
              items={projects.map((title) => ({
                title,
                icon: Folder,
              }))}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pinned chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItems
              items={pinnedChats.map((title) => ({
                title,
                icon: Pin,
              }))}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItems
              items={chats.map((title) => ({
                title,
                icon: MessageSquare,
              }))}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-stone-200 p-2 overflow-hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings />
              <span className="group-data-[collapsible=icon]:hidden">
                Settings
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Abderrahim">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-stone-800 text-xs text-white">
                A
              </div>

              <span className="flex-1 truncate group-data-[collapsible=icon]:hidden">
                Abderrahim
              </span>

              <ChevronsUpDown
                size={15}
                className="group-data-[collapsible=icon]:hidden"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </ShadSidebar>
  );
}
