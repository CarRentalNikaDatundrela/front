import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function Hero() {
  return (
    <div className="pt-[40px] ">
      <h1 className="font-bold text-[3.5rem] text-center w-[30ch] block mx-auto">
        The largest car sharing & rental marketplace
      </h1>
      <div className="flex rounded-xl cursor-pointer mt-[20px] justify-between bg-white bg-opacity-75 w-[60%] mx-auto px-2 py-3 items-center">
        <p className="pl-2 font-semibold">Car brand, model, and etc.</p>
        <div className="p-4 rounded-xl bg-black w-fit">
            <FontAwesomeIcon width={16} height={16} className="text-white" icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default Hero;
