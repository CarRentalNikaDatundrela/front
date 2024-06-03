import { getMostViewedCars } from "@/app/api/api";
import SingleCarItem from "../shared/SingleCarItem";
import Button from "../shared/Button";

async function MostViewedSection() {
  const mostViewedCars: Car[] = await getMostViewedCars(3);

  return (
    <section className="border-solid bg-[#F5F5F5] border-b-[1px] border-gray-400 py-10">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[2.6rem]">Most Viewed Cars</h2>
        <div className="grid grid-cols-3 gap-5 my-[40px]">
          {mostViewedCars?.map((car: Car) => {
            return <SingleCarItem key={car.carID} car={car} />;
          })}
        </div>
        <Button className="block mx-auto">View All Cars</Button>
      </div>
    </section>
  );
}

export default MostViewedSection;
