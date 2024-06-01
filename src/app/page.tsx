import Hero from "./components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <section>
       
      <Hero label="かくうのレストラン" label2="Kakū Restu" carousel={true}/>

      <section className="flex flex-col sm:flex-row">
           <div className="sm:w-1/2 flex items-center justify-center h-80 sm:h-auto">
          <Link href="/location" className="bg-white rounded-lg p-3 sm:p-8 text-2xl sm:text-3xl hover:bg-gray-500 transition-all duration-300">
            Hours & Locations
          </Link>
        </div>
        <div className="sm:w-1/2">
            <Image
              src="/Reservation1.jpg"
              alt="placeholder"
              className="object-cover w-full h-full"
              objectFit="cover"
              width={1000}
              height={1000}
            />
          </div>
      </section>

      <section className="flex flex-col sm:flex-row">
      <div className="sm:hidden sm:w-1/2 flex items-center justify-center h-80 ">
          <Link href="/menu" className="bg-white rounded-lg p-3 sm:p-8  text-2xl sm:text-3xl hover:bg-gray-500 transition-all duration-300">
            Menu
          </Link>
        </div>
      <div className="sm:w-1/2">
          <Image
            src="/Menu1.jpg"
            alt="placeholder"
            className="object-cover w-full h-full"
            objectFit="cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="hidden sm:w-1/2 sm:flex items-center justify-center sm:h-auto">
          <Link href="/menu" className="bg-white rounded-lg p-3 sm:p-8  text-2xl sm:text-3xl hover:bg-gray-500 transition-all duration-300">
            Menu
          </Link>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 flex items-center justify-center h-80 sm:h-auto">
          <Link href="/location" className="bg-white rounded-lg p-3 sm:p-8 text-2xl sm:text-3xl hover:bg-gray-500 transition-all duration-300">
            Hours & Locations
          </Link>
        </div>
        <div className="sm:w-1/2">
          <Image
            src="/Locationhero.jpg"
            alt="placeholder"
            className="object-cover w-full h-full"
            objectFit="cover"
            width={1000}
            height={1000}
          />
        </div>
      </section>
   
    </section>
  );
}
