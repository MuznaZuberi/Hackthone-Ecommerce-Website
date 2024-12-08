import Image from "next/image";
import Link from  "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { PiCalendarBlankBold } from "react-icons/pi"
import { GrContactInfo } from "react-icons/gr";


export default function Home() {
  return (
    <div>

      {/* Header Section Start*/}
      <header>
      <div className="header-container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
      <nav className=" text-lg md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center mt-4 gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
      <Link href = "/" className="mr-5 text-black  font-serif">Home</Link>
      <Link href = "/shop" className="mr-5 text-black  font-serif">Shop</Link>
      <Link href = "/" className="mr-5 text-black  font-serif">About</Link>
      <Link href = "/contact" className="mr-5 text-black font-serif">Contact</Link>
      </nav>
      <GrContactInfo/>
      <IoSearch/>
      <FaRegHeart/>
      <AiOutlineShoppingCart/>
      </div>
      </header> 
      {/* Header Section Start*/}








      {/* Section_01 Start */}
      <section className="text-gray-600 body-font">
      <div className="about-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pl-40 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="font-bold font-serif text-4xl lg:text-7xl md:text-7xl xl:text-7xl mb-4  text-black">
                                      Rocket single
      <br/>
                                      seat
      </h1>
      <br className="hidden lg:inline-block" />
      <h2 className = "font-bold font-serif text-xl text-black"> <Link href = "/shop"><u>Shop Now</u></Link></h2>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="rounded"
        alt="single_sofa_image"
        src={require("../../images/single_sofa.png")}
      />
      </div>
      </div>
      </section>
      {/* Section_01 End */}












       {/* Section_02 Start */}
       <section className = "sec_02">
       <div className="container px-5 py-10 mx-auto">
       <div className="flex flex-wrap">
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg  overflow-hidden">
          <Image 
            alt="square_table_image"
            className="object-cover object-center h-full w-full"
            src={require("../../images/square_table.png")}
       />
       </div>
       <h2 className="title-font text-2xl font-bold font-serif text-black mt-6 mb-3">
                                Side Table
       </h2>
        
       <button className="flex mx-auto mt-6 text-black font-bold font-serif border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg  overflow-hidden">
       <Image 
            alt="3seater_sofa_image"
            className="object-cover object-center h-full w-full"
            src={require("../../images/3seater_sofa.png")}
       />
       </div>
       <h2 className="pt-6 title-font text-2xl font-bold font-serif text-black mt-6 mb-3">
                                 Side Table
       </h2>
       <button className="flex mx-auto mt-6 text-black font-bold font-serif border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       </div>
       </div>
       </section>
       {/* Section_02 End */}








       {/* Section_03 Start */}
       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-col">
       <h1 className = "text-center font-bold font-serif text-4xl text-black">Top Picks For You</h1>
       <p className = "text-center font-serif text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection of suspension, flooe and table lights</p>
       </div>
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {require("../../images/set_01.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Treton modular sofa_03
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {require("../../images/set_02.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                 Granite dining table with 
        <br/>
                                 dining chair
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                 RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {require("../../images/set_03.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Outdoor bar table and stool
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {require("../../images/set_04.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                               Plain console with teak mirror
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                               RS 25,000.00
        </p>
        </div>
        </div>
        <p className = "text-center font-bold font-serif text-xl mt-8"><u><Link href = "/shop">View More</Link></u></p>
        </div>
        </section>
        {/* Section_03 End */}






        {/* Section_04 Start */}

        <section className="sec_04 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className = "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
            className="rounded"
            alt="Asgaard sofa_image"
            src={require("../../images/Asgaard sofa.png")}
        />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  items-center">
        <h1 className="text-center font-serif text-xl mb-4 text-black">
                                        New Arrivals
        </h1>  
        <h2 className="font-bold font-serif text-4xl md:text-4xl lg:text-6xl xl:text-6xl">
                                        Asgaard sofa
        </h2>
        <div className="flex justify-center">
        <Link href = "/single_product" className="inline-flex text-black font-serif mt-10  border border-2 border-black py-2 px-14 focus:outline-none  rounded text-lg">
                                        Order Now
        </Link>
        </div>
        </div>
        </div>
        </section>
        {/* Section_04 End */}









        {/* Section_05 Start */} 
        <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
        <h1 className = "text-center font-bold font-serif text-4xl text-black">Our Blogs</h1>
        <p className = "text-center font-serif text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection.</p>
        <div className="flex flex-col">
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={require("../../images/blog_01.png")}
         />
        </div>
        <h2 className="text-center text-xl font-serif text-black mt-5">
                                 Going all-in with millennial design 
        <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
        <u>Read More</u>  
        </button>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
        </p>
        <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold/>12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg  overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={require("../../images/blog_02.png")}
        />
        </div>
        <h2 className="text-center text-xl font-serif text-black mt-5">
                           Going all-in with millennial design 
        <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
        <u>Read More</u>  
        </button>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
        </p>
        <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={require("../../images/blog_03.png")}
         />
         </div>
         <h2 className="text-center text-xl font-serif text-black mt-5">
                                   Going all-in with millennial design 
         <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
         <u>Read More</u> 
         </button> 
         <div className = "flex mt-6 text-xl gap-2">
         <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
         </p>
         <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
         </p>
         </div>
         </h2>
         </div>
         </div>
         <button className = "flex mx-auto font-bold font-serif text-xl mx-auto mt-12"><u><Link href = "/blog">View All Post</Link></u></button>
         </div>
        </section>
        {/* Section_05 End */}





    
        {/* Section_06 Start */}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="insta"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src={require("../../images/our_insta.png")}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                          Our Instagram
        </h2>
        <p className="leading-relaxed font-serif font-bold">
                                          Follow our store on instagram.
        </p>
        <button className="mt-3 text-black bg-white font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                                          Follow Us           
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>
        {/* Section_06 End */}
    </div>
  );
}
