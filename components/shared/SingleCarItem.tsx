import Image from "next/image";

const SingleCarItem = ({ car }: { car: Car }) => {
  const title = `${car.brand} ${car.model}`;
  return (
    <div
      className="h-[250px] text-white rounded-lg overflow-hidden shadow-lg relative w-full flex flex-col cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }} 
      ></div>
      <Image
        src={car.imageURL}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ zIndex: 0 }}
      />
      <div className="p-4 relative z-10 mt-auto">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">
          {car.transmission} • {car.capacity}
        </p>
        <p className="text-lg font-bold mt-2">${car.price} / per day</p>
      </div>
    </div>
  );
};

export default SingleCarItem;
