import NavBar from "./NavBar";
import Hero from "./Hero";

function Header() {
  return (
    <header className="bg-hero h-[800px] bg-no-repeat w-full bg-cover bg-[10%_90%]">
      <div className="bg-white shadow-long-white-fade">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="">
        <div className="container mx-auto">
          <Hero />
        </div>
      </div>
    </header>
  )
}

export default Header