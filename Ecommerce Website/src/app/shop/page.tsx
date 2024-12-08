import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";

export default function Shop() {
   return (
   	  <div> 
         {/* Header Section Start*/} 	  	
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className=" text-md font-bold md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center mt-4 gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
         <Link href = "/" className="mr-5 text-black  font-serif">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-serif">Shop</Link>
         <Link href = "/" className="mr-5 text-black  font-serif">About</Link>
         <Link href = "/contact" className="mr-5 text-black font-serif">Contact</Link>
         </nav>
          <GrContactInfo/>
         <IoSearch />
         <FaRegHeart/>
         <AiOutlineShoppingCart/>
         </div>
         </header>
         {/* Header Section End*/}   
         




      

        {/* Shop Sectiom Start */}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="shop_image"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src={require("../../../images/shop_slide.png")}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                          Shop
        </h2>
        <button className="mt-3 text-black font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                                           <Link href = "/">Home</Link><IoIosArrowForward />Shop           
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>



       
       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_01.png")}
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
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_02.png")}
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
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_03.png")}
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
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_04.png")}
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
        </div>
        </section>




       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_05.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                Grain coffee table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 15,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_11.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                 Kent coffee table 
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                 RS 225,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_07.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Round coffee table_color 2
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 251,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_08.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                               Reclaimed teak coffee table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                               RS 25,200.00
        </p>
        </div>
        </div>
        </div>
        </section>



       <section className="body-font">
       <div className="container px-5 py-20 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_09.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Plain console_
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 258,200.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_10.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                 Reclaimed teak slideboard
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                 RS 20,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_11.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  SJP_0825
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 200,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_12.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                               Bellow chair and table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                               RS 100,000.00
        </p>
        </div>
        </div>
        </div>
        </section>



       <section>
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/sets_13.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Granite square side table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 258,800.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_14.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                 Asgaard sofa 
        <br/>
                                 dining chair
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                 RS 250,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_15.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                                  Maya sofa three seater
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                                  RS 115,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-ful"
            src= {require("../../../images/set_16.png")}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5">
                               Outdoor sofa set
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl">
                               RS 244,000.00
        </p>
        </div>
        </div>
        </div>
        </section>




       <div className = "flex justify-center gap-6">
          <div className = "shop_btn  px-4 py-4 rounded-lg font-bold font-serif">1</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif">2</div>
          <div className = "px-4 py-4 rounded-lg font-bold font-serif">3</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif">Next</div>

       </div>






   



      <section className = 'sec_02 my-20'>
      <div className = "py-24">
      <div className="flex flex-wrap">
      <div className="lg:w-1/3 mx-auto lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
      <h1 className = " text-black text-2xl md:text-4xl lg:text-4xl xl:text-4xl mb-3 text-left font-serif font-bold">Free Delivery</h1>
      <p className=" leading-relaxed font-serif text-justify text-gray-400 text-lg">
                                   For all orders over $50, consectetur
      <br/>
                                   adipim scing elit.
      </p>
      </div>
      </div>
      <div className="lg:w-1/3 md:w-1/1 sm:w-1/1 mx-auto lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
      <h1 className = "text-black text-2xl md:text-4xl lg:text-4xl xl:text-4xl mb-3 text-left font-serif font-bold">90 Days Return</h1>
      <p className=" leading-relaxed font-serif text-justify text-gray-400 text-lg">
                           If goods have problems, consectetur
      <br/>
                           adipim scing elit.
      </p>
      </div>
      </div>
      <div className="lg:w-1/3 md:w-1/1 sm:w-1/1 mx-auto lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
      <h1 className = "text-black text-2xl md:text-4xl lg:text-4xl xl:text-4xl mb-3 text-left font-serif font-bold">Secure Payment</h1>
      <p className="leading-relaxed font-serif text-justify text-gray-400 text-lg">
                           100% secure payment consectetur
      <br/>
                           adipim scing elit.
      </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Shop SECTION End*/}

   	</div>
  );
}