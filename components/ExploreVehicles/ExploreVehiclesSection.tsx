import { getCarsByBrand } from "@/app/api/api";
import ExploreVehiclesList from "./ExploreVehiclesList";

async function ExploreVehiclesSection() {
  const brandsToExplore = ['Mercedes-Benz', 'Toyota', 'BMW', 'Ford'];
  const allCarsExplore = await getCarsByBrand(brandsToExplore)
  return (
    <section className="border-solid border-b-[1px] border-[#F5F5F5] pb-[60px]">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[2.6rem]">Explore our vehicles</h2>
        <ExploreVehiclesList cars={allCarsExplore} brands={brandsToExplore} />
      </div>
    </section>
  );
}

export default ExploreVehiclesSection;
