
import plant from "@/app/public/plant/plant.png"
import frame1 from "@/app/public/plant/frame1.png"
import frame2 from "@/app/public/plant/frame2.png"
import frame3 from "@/app/public/plant/frame3.png"
import frame6 from "@/app/public/plant/frame6.png"
import frame7 from "@/app/public/plant/frame7.png"
import photo1 from "@/app/public/plant/photo1.png"
import photo2 from "@/app/public/plant/photo2.png"
import photo3 from "@/app/public/plant/photo3.png"
import Image from "next/image";




export default function Homepage() {
  return (
    
    <>

     
      <section className=" mt-8 px-4 max-w-screen-xl mx-auto">
        <Image
        src={plant} alt="pic plant"
        width={1248}
        height={512}
         />
  
  <div className=" mt-28 max-w-screen-xl mx-auto  ">
  {/* <!-- Left section: Title, Description, and Button --> */}
  <div className="flex flex-col md:flex-row items-center">
    <div className="w-1/3 ml-2 ">
      <h3 className="font-extrabold text-2xl mb-0 md:text-xl ">Best Selling </h3>
      <h3 className="font-extrabold text-2xl mb-2 md:text-xl ">Plants</h3>
      <p className="text-gray-500 mb-4">Easiest way to a healthy life by buying your favorite plants.</p>
      <button className="bg-teal-200 text-teal-800  py-2 px-3 md:py-2 md:px-4  rounded-md transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-105 ">See more </button>
    </div>
    
    {/* <!-- Right section: Plant Images --> */}
    <div className="flex w-2/3 justify-between ml-6  flex-col md:flex-row items-center mt-6 md:mt-0">
      {/* <!-- Plant 1 --> */}
      <div className="text-center mt-4 md:mt-0">
        <Image src={photo1} alt="Natural Plants" className="rounded-lg mb-4" width="200"  />
        
      </div>
      {/* <!-- Plant 2 --> */}
      <div className="text-center mt-4 md:mt-0 ">
        <Image src={photo2} alt="Artificial Plants" className="rounded-lg mb-4" width="200" />
        
      </div>
      {/* <!-- Plant 3 --> */}
      <div className="text-center mt-4 md:mt-0">
        <Image src={photo3} alt="Artificial Plants" className="rounded-lg mb-4" width="200" />
        
      </div>
    </div>

  </div>
</div>
<section className=" text-center max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-2xl font-bold text-gray-800 mb-4 mt-24 md:pl-20 ">About Us</h2>
            <p className="text-gray-600 mb-8  text-sm md:ml-20 ">Order now and appreciate the beauty of nature</p>
            <div className=" flex-col  md:flex-row flex justify-around ">
                {/* <!-- Feature 1 --> */}
                <div className="">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Large Assortment</h3>
                    <p className="text-gray-600 text-xs">We offer many different types of products with fewer variations in each category.</p>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="text-center mt-4 md:mt-0">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M4 16h16M4 12h16m-8 0H4m0 0h8m-4-4v4m0-4v4m0-4V4h16v12M4 8v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">Fast & Free Shipping</h3>
                    <p className="text-gray-600 text-xs">4-day or less delivery time, free shipping, and an expedited delivery option.</p>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="text-center mt-4 md:mt-0">
                    <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-4.03C18.403 11.674 17.745 11 17 11h-1l-1.25 1.25L12 13l-2.25-2.25H9c-.745 0-1.403.674-1.595 1.97L6 17h5m-1 4h2m1-4H9l-.5 1.5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5L5 15m10 0v-4m0 4v-4m0 0v4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-gray-800 text-sm">24/7 Support</h3>
                    <p className="text-gray-600 text-xs">Answers to any business-related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </section>

         <div className="text-center mt-8 max-w-screen-xl mx-auto ">
          <h4 className="font-extrabold text-3xl mt-24">Categories</h4>
          <p className="text-sm text-gray-600 mt-2">Find what you are you are looking for</p>
         </div>
         <div className="flex items-center flex-col lg:flex-row mt-14 py-5 bg-blue-200 w-[1440] h-[841] max-w-screen-xl  ">
         <div className="md:mx-auto ">
          <Image 
          className=" mb-5 flex-1 mt-10   "
          src={frame1} alt="pic plant" width={300} height={100}/>
          </div>
          <div><Image
          className=" flex-1 mt-10 md:pl-6 md:mr-32 " src={frame2} alt="pic plant frame2" width={300} height={100}/></div>
           <div><Image
           className=" flex-1 mt-14 mb-8 md:mr-16 " width={300} height={100}
           src={frame3} alt=" pic plant 2"/>
           </div>
           </div>

          <div className="font-extrabold  mt-12 text-2xl max-w-screen-xl mx-auto ">
          <h3 className="text-center md:text-left">What customers say about </h3>
          <h4 className="text-center md:text-left" >GREEMIND?</h4>
           </div>
      <div className=" max-w-screen-xl mx-auto flex mt-12 flex-col md:flex-row md:space-x-14 ">
        <Image   src={frame6} width={600} height={40} alt="plant pic" />
        <Image className="mt-16 md:mt-0" src={frame7}  width={600} height={40} alt="plant pic" />
      </div>
      
      </section>
      <footer className="bg-blue-300  text-black py-8 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About CHEAMIND</h3>
            <p className="text-lg mb-4">
              CHEAMIND is dedicated to enhancing indoor environments with beautiful plants. We provide 
              a variety of indoor plant options to suit any space, ensuring the well-being of our customers.
            </p>
          </div>
      
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="http://localhost:3000" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/about" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact" className="hover:text-blue-400">Contacts</a>
                </li>
                </ul>
          </div>
      
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg">Email: <a href="mailto:support@cheamind.com" className="hover:text-blue-400">hafizabdulahadkhanafridi@gmail.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+1234567890" className="hover:text-blue-400">03483992004</a></p>
            <div className="mt-4">
              <h4 className="font-semibold">Follow Us:</h4>
              <a href="#" className="hover:text-blue-400">Facebook</a> | 
              <a href="#" className="hover:text-blue-400 ml-2">Instagram</a> | 
              <a href="#" className="hover:text-blue-400 ml-2">Twitter</a>
            </div>
          </div>
        </div>
      
        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">© 2024 Abdul Ahad Afridi. All rights reserved.</p>
        </div>
      </footer>  


      
     
</>
);
}



 




        


      