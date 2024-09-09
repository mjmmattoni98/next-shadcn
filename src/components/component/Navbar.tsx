"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { LogOut, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "./Provider";
import { SidebarMenu } from "./Sidebar";

export default function NavbarComponent() {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const { setTheme } = useTheme();

  const onDarkModeToggle = (e: boolean) => {
    setTheme(e ? "dark" : "light");
    theme?.setTheme(e ? "dark" : "light");
  };

  const logout = () => {
    localStorage.removeItem("user");

    router.replace("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary dark:bg-background dark:text-white text-sm py-4 dark:border-gray-600 border-b border-gray-600">
      <nav
        className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger className="text-white mt-2">
                  <Menu />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                  <SheetHeader>
                    <SheetTitle className="text-left text-xl font-bold ml-3">
                      Holaqueai
                    </SheetTitle>
                    <SheetDescription>
                      <SidebarMenu />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <a
              className="flex-none text-xl ml-4 font-semibold text-white"
              href="#"
            >
              Holaqueai
            </a>
          </div>
          <div className="flex items-center">
            {/* <DarkModeSwitch
              className="mr-2 text-white sm:block"
              checked={theme?.theme === "dark"}
              onChange={onDarkModeToggle}
              size={20}
            /> */}
            {/* <div className="flex flex-row p-2 mr-2">
              <Switch
                id="toggle-dark-mode"
                checked={theme?.theme === "dark"}
                onCheckedChange={onDarkModeToggle}
              />
              {theme?.theme === "dark" ? <Moon /> : <Sun color="#fff" />}
            </div> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <a
                  className="font-medium text-white"
                  href="#"
                  aria-current="page"
                >
                  Usuario
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  onClick={() => logout()}
                  className="text-red-400 py-2"
                >
                  <span>
                    <LogOut size={15} className="mr-2" />
                  </span>{" "}
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
