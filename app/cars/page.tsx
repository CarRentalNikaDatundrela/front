import CarGrid from "@/components/AllCars/CarGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { getAllBrands } from "../api/api";
import { getCarsByFilter } from "../actions";
import FilterSidebar from "@/components/AllCars/FilterSidebar";
import NavBar from "@/components/NavBar";

async function Cars({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const brands = await getAllBrands();

  const cars = await getCarsByFilter(searchParams);
  const filtersToRender = {
    Transmission: ["Automatic", "Manual"],
    Brand: brands ?? [],
  };
  return (
    <>
      <header className="bg-[#F9F9F9]">
        <div className="container mx-auto relative">
          <NavBar />
        </div>
        <div className="relative bg-[#F9F9F9]">
          <h1 className="text-[4rem] text-center font-bold py-[80px]">
            All Cars
          </h1>
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
        <div>
          <div className="flex gap-6 p-4 mt-[100px]">
            <FilterSidebar filters={filtersToRender} />
            <CarGrid cars={cars} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Cars;
