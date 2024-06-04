import Image from "next/image";

const CarGrid = ({ cars }: { cars: Car[] }) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => {
          const title = car.brand + " " + car.model;
          return (
            <div
              className="border w-full rounded-lg p-4 text-center"
              key={index}
            >
              <div className="relative w-full h-[250px] mb-4 overflow-hidden rounded-md">
                <Image
                  src={car.imageURL}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt={title}
                  className="w-full rounded-md mb-4"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-600">
                {car.transmission} • {car.city}
              </p>
              <p className="text-gray-600">{car.capacity} Seats</p>
              <p className="text-gray-900 font-semibold">${car.price} / day</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarGrid;
