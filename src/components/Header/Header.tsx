import { List, X } from "phosphor-react";
import { Logo } from "../Logo/Logo";

interface HeaderProps {
  menu?: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ menu, setMenu }: HeaderProps) => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 mobile:justify-between mobile:w-full mobile:px-6">
      <Logo />

      <div className="hidden mobile:flex items-center gap-2">
        Aulas
        <button onClick={() => setMenu((prevState) => !prevState)}>
          {menu ? (
            <X size={32} color="#81D8F7" />
          ) : (
            <List size={32} color="#81D8F7" />
          )}
        </button>
      </div>
    </header>
  );
};
