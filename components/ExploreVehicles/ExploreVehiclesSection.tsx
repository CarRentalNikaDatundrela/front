import { getCarsByBrand, incrementView } from "@/app/api/api";
import ExploreVehiclesList from "./ExploreVehiclesList";
import { redirect } from "next/navigation";

async function ExploreVehiclesSection() {
  const handleCarView = async (carId: number) => {
    'use server'
    incrementView(carId)
    redirect('/cars/' + carId)
  }
  const brandsToExplore = ['Mercedes-Benz', 'Toyota', 'BMW', 'Ford'];
  const allCarsExplore = await getCarsByBrand(brandsToExplore)
  return (
    <section className="border-solid border-b-[1px] border-[#F5F5F5] pb-[60px]">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[2.6rem]">Explore our vehicles</h2>
        <ExploreVehiclesList cars={allCarsExplore} brands={brandsToExplore} handleCarView={handleCarView} />
      </div>
    </section>
  );
}

export default ExploreVehiclesSection;
