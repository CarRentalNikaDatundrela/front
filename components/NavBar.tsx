import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function NavBar() {
  return (
    <div>
      <ul className="flex justify-between items-center py-[25px]">
        <li>datundrela</li>
        <li>
          <ul className="flex gap-4">
            <li className="text-[1rem] font-semibold">All Cars</li>
            <li className="text-[1rem] font-semibold">Bla</li>
            <li className="text-[1rem] font-semibold">Bla</li>
            <li className="text-[1rem] font-semibold">Bla</li>
          </ul>
        </li>
        <li>
            <ul>
                <li className="cursor-pointer">
                    <FontAwesomeIcon width={16} height={16} icon={faMagnifyingGlass} />
                </li>
            </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
