import { getMostViewedCars, incrementView } from "@/app/api/api";
import SingleCarItem from "../shared/SingleCarItem";
import Button from "../shared/Button";
import { redirect } from "next/navigation";
import Link from "next/link";

async function MostViewedSection() {
  const mostViewedCars: Car[] = await getMostViewedCars(3);
  const handleCarView = async (carId: number) => {
    'use server'
    incrementView(carId)
    redirect('/cars/' + carId)
  }
  return (
    <section className="border-solid bg-[#F5F5F5] border-b-[1px] border-gray-400 py-10">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[2.6rem]">Most Viewed Cars</h2>
        <div className="grid grid-cols-3 gap-5 my-[40px]">
          {mostViewedCars?.map((car: Car) => {
            return <SingleCarItem key={car.carID} car={car} handleCarView={handleCarView} />;
          })}
        </div>
        <Button className="block mx-auto">
          <Link href={'/cars'}>View All Cars</Link>
        </Button>
      </div>
    </section>
  );
}

export default MostViewedSection;
