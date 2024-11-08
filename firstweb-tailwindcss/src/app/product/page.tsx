'use client'
import frame4 from "@/app/public/plant/frame4.jpeg";
import frame3 from "@/app/public/plant/frame3.png";
import frame1 from "@/app/public/plant/frame1.png";
import photo1 from "@/app/public/plant/photo1.png";
import photo2 from "@/app/public/plant/photo2.png";
import photo3 from "@/app/public/plant/photo3.png";
import Image from "next/image";
import Wrapper from "../component/Wrapper";

export default function Product() {
  return (
    <Wrapper>
      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  {/* Benefits Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

    {/* Text Section */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">Benefits of Indoor Plants</h2>
      <p className="text-gray-600 mb-4">
        Indoor plants not only enhance the aesthetics of your space but also provide numerous health and environmental benefits.
      </p>
      <ul className="space-y-4">
        <li>
          <h3 className="text-lg sm:text-xl font-semibold text-teal-700">Air Purification</h3>
          <p className="text-gray-600">Plants like snake plants and peace lilies help in removing toxins and purifying indoor air.</p>
        </li>
        <li>
          <h3 className="text-lg sm:text-xl font-semibold text-teal-700">Stress Reduction</h3>
          <p className="text-gray-600">Studies show that indoor plants can reduce stress, making your environment more calming and relaxing.</p>
        </li>
        <li>
          <h3 className="text-lg sm:text-xl font-semibold text-teal-700">Increased Productivity</h3>
          <p className="text-gray-600">Having plants around your workspace can help improve concentration and productivity.</p>
        </li>
      </ul>
      <button className="mt-6 px-6 py-3 bg-teal-500 text-white text-sm sm:text-base font-medium rounded-md hover:bg-teal-700 transition duration-300 " >
        Explore Our Collection
      </button>
    </div>

    {/* Image Section */}
<div className="flex justify-center items-center mt-6 sm:mt-8">
  <div className="w-36 h-36 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full shadow-lg border-4 border-white overflow-hidden">
    <Image
      className="object-cover w-full h-full"
      src={frame4}
      alt="Indoor plants closeup"
      width={150}    // On small and medium screens, the width will be 150px
      height={150}   // On small and medium screens, the height will be 150px
      sizes="(max-width: 640px) 150px, (max-width: 1024px) 150px, 600px"  // Sets different sizes for different screen widths
    />
  </div>
</div>

  </div>
</section>

{/* <!-- Gallery Section --> */}
    
<h2 className="text-6xl text-center mt-20">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-20 mt-20">
    <Image src={photo1} alt="plant pic"
     className="rounded-lg w-[150%] max-w-[300px] h-auto transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105"/>
    <Image src={photo2} alt="plant pic"
     className="rounded-lg w-[150%] max-w-[300px] h-auto transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105"/>
     <Image src={photo3} alt="plant pic"
       className="rounded-lg w-[150%] max-w-[300px] h-auto transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105"/>
</div>





      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-14">
  {/* Column Layout for Multiple Images with Content */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* First Image with Content */}
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-full shadow-lg border-4 border-white overflow-hidden mb-4 transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105">
        <Image
          className="object-cover w-full h-full"
          src={frame3}
          alt="Indoor plant"
          width={600}
          height={600}
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-2">Indoor Plant 1</h3>
      <p className="text-gray-600">
        A beautiful indoor plant that enhances your living space with fresh air and aesthetic appeal.
      </p>
    </div>

    {/* Second Image with Content */}
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-full shadow-lg border-4 border-white overflow-hidden mb-4 transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105">
        <Image
          className="object-cover w-full h-full "
          src={frame4}
          alt="Indoor plants closeup"
          width={800}
          height={800}
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-2">Indoor Plant 2</h3>
      <p className="text-gray-600">
        This plant not only beautifies your space but also provides a calming atmosphere with its green hues.
      </p>
    </div>

    {/* Third Image with Content */}
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-full shadow-lg border-4 border-white overflow-hidden mb-4 transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105">
        <Image
          className="object-cover w-full h-full"
          src={frame1}
          alt="Indoor plants decor"
          width={1200}
          height={800}
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-2">Indoor Plant 3</h3>
      <p className="text-gray-600">
        A great addition to any home or office, this plant adds beauty and purity to the air around you.
      </p>
    </div>

  </div>
</section>
          
  
     <div className="text-center mt-8 border-t border-gray-600 pt-4">
     <p className="text-sm">© 2024 Abdul Ahad Afridi. All rights reserved.</p>
   </div>
 ,/</Wrapper>

  );
}
