import NavBar from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
export default function CarsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-[#F9F9F9]">
        <div className="container mx-auto relative pb-[100px]">
          <NavBar />
          <h1 className="text-[4rem] text-center font-bold mt-7">All Cars</h1>
          <div className="flex rounded-xl cursor-pointer shadow-lg absolute left-[50%] translate-x-[-50%] bottom-[-30px] justify-between bg-white bg-opacity-75 w-[60%] mx-auto px-2 py-3 items-center">
            <p className="pl-2 font-semibold">Car brand, model, and etc.</p>
            <div className="p-4 rounded-xl bg-black w-fit">
              <FontAwesomeIcon
                width={16}
                height={16}
                className="text-white"
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}
