import { getCarById, getCarsByBrand, incrementView } from "@/app/api/api";
import NavBar from "@/components/NavBar";
import Button from "@/components/shared/Button";
import { redirect } from "next/navigation";
import Image from "next/image";
import ScrollToTop from "@/components/shared/ScrollToTop";

async function Car({ params: { carId } }: { params: { carId: string } }) {
  const car: Car = await getCarById(Number(carId));
  const otherCars: Car[] = (await getCarsByBrand([car.brand]))
    .filter((c: Car) => c.carID !== Number(carId))
    .splice(0, 3);
  const url = car.imageURL;
  const handleCarView = async (carId: number) => {
    "use server";
    incrementView(carId);
    redirect("/cars/" + carId);
  };
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <header className="relative h-[800px] w-full">
        <Image
          src={url}
          alt={`${car.brand} ${car.model}`}
          fill
          objectFit="cover"
          objectPosition="center" // Adjust the position to move the car down
          className="z-0"
          style={{ position: "absolute", top: "300px" }}
        />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent z-10"></div>{" "}
        {/* Adjust height */}
        <div className="absolute z-40  top-[20%] left-[50%] translate-x-[-50%]">
          <h2 className="text-black text-center font-extrabold text-7xl">{`${car.brand} ${car.model}`}</h2>
          <p className="text-center pt-[20px] text-gray-500 font-light text-[20px]">
            Model Year {car.year}
          </p>
        </div>
        <div className="relative z-20">
          <div className="bg-white shadow-long-white-fade pb-[150px]">
            <div className="container mx-auto">
              <NavBar />
            </div>
          </div>
          <div className="">
            <div className="container mx-auto"></div>
          </div>
        </div>
      </header>
      <div className="p-8 mb-[120px] mt-[300px] bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">
          All technical specifications
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between">
            <span className="font-semibold">Number of seats</span>
            <span>{car.capacity} Seats</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">City</span>
            <span>{car.city}</span>{" "}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Model</span>
            <span>{car.model}</span>{" "}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Year</span>
            <span>{car.year}</span>{" "}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Transmission</span>
            <span>{car.transmission}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Fuel Capacity</span>
            <span>{car.fuelCapacity} litres</span>{" "}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Price</span>
            <span>${car.price} / hour</span>
          </div>
        </div>
        <button className="bg-black rounded-[10px] px-5 mx-auto block mt-[100px] py-3 text-white">
          Rent this Car
        </button>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-3xl mb-[50px]">
          Explore Other Cars From This Brand
        </h2>
        <div className="grid grid-cols-3 gap-5 mb-[100px]">
          {otherCars.map((otherCar) => {
            return (
              <>
                <div className="rounded overflow-hidden shadow-lg bg-white pb-[20px]">
                  <div className="w-full relative h-[300px]">
                    <Image
                      src={otherCar.imageURL}
                      alt={`${otherCar.brand} ${otherCar.model}`}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className=""
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{`${otherCar.brand} ${otherCar.model}`}</div>
                    <p className="text-gray-700 text-base mb-4">
                      {otherCar.transmission}
                    </p>
                    <div className="text-sm">
                      <p className="flex justify-between">
                        <span className="font-semibold">City</span>
                        <span>{otherCar.city}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Fuel Capacity</span>
                        <span>{otherCar.fuelCapacity}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Transmission</span>
                        <span>{otherCar.transmission}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Model</span>
                        <span>{otherCar.model}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Seats</span>
                        <span>{otherCar.capacity}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Price</span>
                        <span>{otherCar.price}</span>
                      </p>
                    </div>
                  </div>
                  <Button
                    className="font-thin text-[15px] px-3 py-1 rounded-[5px] block mx-auto"
                    handleClick={handleCarView}
                    carId={otherCar.carID}
                  >
                    See This Car
                  </Button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Car;
