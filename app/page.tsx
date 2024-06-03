import Image from "next/image";
import Header from "@/components/Header";
import ExploreVehiclesSection from "@/components/ExploreVehicles/ExploreVehiclesSection";
import MostViewedSection from "@/components/MostViewed/MostViewedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="border-b-[1px] border-solid mb-10 border-[#F5F5F5]">
          <div className="container mx-auto">
            <ul className="flex justify-between items-center py-[40px]">
              <li className="">
                <Image
                  width={166}
                  height={33}
                  src={"/mercedesLogo.webp"}
                  alt="Mercedes Logo"
                ></Image>
              </li>
              <li className="">
                <Image
                  width={36}
                  height={34}
                  src={"/wolksvagen.webp"}
                  alt="Volkswagen Logo"
                ></Image>
              </li>
              <li className="">
                <Image
                  width={144}
                  height={19}
                  src={"/huyndai.webp"}
                  alt="Hyundai Logo"
                ></Image>
              </li>
              <li className="">
                <Image
                  width={46}
                  height={30}
                  src={"/toyota.webp"}
                  alt="Toyota Logo"
                ></Image>
              </li>
              <li className="">
                <Image
                  width={110}
                  height={22}
                  src={"/Lexus.png"}
                  alt="Lexus Logo"
                ></Image>
              </li>
              <li className="">
                <Image
                  width={54}
                  height={26}
                  src={"/infinit.webp"}
                  alt="Infiniti Logo"
                ></Image>
              </li>
            </ul>
          </div>
        </div>
        <ExploreVehiclesSection />
        <MostViewedSection />
      </main>
      <Footer />
    </>
  );
}
