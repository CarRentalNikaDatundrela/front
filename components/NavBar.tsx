import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <ul className="flex justify-between items-center py-[25px]">
        <li>
          <Link href={"/"}>datundrela</Link>
        </li>
        <li>
          <ul className="flex gap-4">
            <li className="text-[1rem] cursor-pointer font-semibold">
              <Link href={"/cars"}>All Cars</Link>
            </li>
            <li className="text-[1rem] cursor-pointer font-semibold">Bla</li>
            <li className="text-[1rem] cursor-pointer font-semibold">Bla</li>
            <li className="text-[1rem] cursor-pointer font-semibold">Bla</li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="cursor-pointer">
              <FontAwesomeIcon
                width={16}
                height={16}
                icon={faMagnifyingGlass}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
