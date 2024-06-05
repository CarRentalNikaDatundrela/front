import CarGridItem from "./CarGridItem";
import { incrementView } from "@/app/api/api";
import { redirect } from "next/navigation";

const CarGrid = ({ cars }: { cars: Car[] }) => {
  const handleCarView = async (carId: number) => {
    'use server'
    incrementView(carId)
    redirect('/cars/' + carId)
  }
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => {
          return <CarGridItem key={car.carID} car={car} handleClick={handleCarView} />
        })}
      </div>
    </div>
  );
};

export default CarGrid;
