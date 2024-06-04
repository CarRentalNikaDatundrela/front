import CarGrid from "@/components/AllCars/CarGrid";
import { getAllBrands } from "../api/api";
import { getCarsByFilter } from "../actions";
import FilterSidebar from "@/components/AllCars/FilterSidebar";

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
    <div>
      <div className="flex gap-6 p-4 mt-[100px]">
      <FilterSidebar
        filters={filtersToRender}
      />
      <CarGrid cars={cars} />
    </div>
    </div>
  );
}

export default Cars;
