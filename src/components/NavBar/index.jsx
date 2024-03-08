import Link from "next/link";
import InputSearch from "./inputSearch";
import Menu from "./menu";

const NavBar = () => {
    return (
        <header className=" bg-yellow-500 shadow-xl">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2 items-center">
                <Link href="/" className="font-extrabold text-2xl hover:text-white">ANIMEKU</Link>
                <Menu />
                <InputSearch />
            </div>
        </header>
    );
}
export default NavBar;