import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "./Provider";

const UserAction = () => {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const { setTheme } = useTheme();

  const onDarkModeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
    theme?.setTheme(checked ? "dark" : "light");
  };

  const logout = () => {
    localStorage.removeItem("user");

    router.replace("/");
    router.refresh();
  };

  return (
    <div
      id="navbar-dark"
      className="hs-collapse sm:block overflow-hidden transition-all duration-300 basis-full grow"
    >
      <div className="flex flex-col gap-5 mt-5 ml-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        {/* <DarkModeSwitch
          className="mr-2 text-white"
          checked={theme?.theme === "dark"}
          onChange={onDarkModeToggle}
          size={20}
        /> */}
        <div className="flex flex-row p-2 mr-2">
          <Switch
            id="toggle-dark-mode"
            checked={theme?.theme === "dark"}
            onCheckedChange={onDarkModeToggle}
          />
          {theme?.theme === "dark" ? <Moon /> : <Sun />}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <a className="font-medium text-white" href="#" aria-current="page">
              Nombre de usuario
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
  );
};

export default UserAction;
