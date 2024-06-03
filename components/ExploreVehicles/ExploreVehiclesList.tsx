"use client";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import SingleCarItem from "../shared/SingleCarItem";

function ExploreVehiclesList({
  cars,
  brands,
}: {
  cars: Car[];
  brands: string[];
}) {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [currentCars, setCurrentCars] = useState(() => {
    return cars.filter((car) => car.brand === selectedBrand);
  });

  useEffect(() => {
    setCurrentCars(cars.filter((car) => car.brand === selectedBrand));
  }, [selectedBrand, cars]);

  return (
    <div>
      <div className="my-[40px]">
        <ul className="flex justify-center gap-5">
          {brands.map((brand, i) => {
            return (
              <li
                key={i}
                className={`px-6 cursor-pointer py-2 rounded-[100px] w-fit shadow-brands-shadow font-semibold text-[1.4rem] ${
                  brand === selectedBrand && "shadow-none bg-black text-white"
                }`}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4 my-[50px]">
        {currentCars.map((car: Car) => {
          return <SingleCarItem key={car.carID} car={car} />;
        })}
      </div>
      <Button className="block mx-auto">
        View All Cars
      </Button>
    </div>
  );
}

export default ExploreVehiclesList;
