import Image from "next/image";
import Link from "next/link";
import Product from "./Product";
import Button from "./ButtonBlack";
import Navar from "./NavarTepm";
import FavoriteCity from "./FavoriteCity";
import Bread from "./Bread";
import Textchat from "./Textchat";
import { type CarouselApi } from "@/components/ui/carousel";
import { FavoriteCityCarousel } from "./FavoriteCityCarousel";

export default function home() {
  return (
    <div className=" min-h-screen  pt-3">
      <div className="ml-10 flex flex-row gap-5 justify-center items-center">
        <Navar></Navar>
        <Bread></Bread>
      </div>

      <h1 className="text-4xl lg:text-8xl text-red-600 font-bold text-center">
        دیوار
      </h1>
      <nav
        dir="rtl"
        className="flex flex-col lg:flex-row items-center justify-between px-10 py-10 border-b mx-90 "
      >
        <button className="text-2xl text-black-500 hover:text-red-600 text-b">
          ثبت آگهی
        </button>
        <button className="text-2xl text-black-500 hover:text-red-600 text-b">
          درباره دیوار
        </button>
        <button className="text-2xl text-black-500 hover:text-red-600 text-b">
          دریافت برنامه
        </button>
        <button className="text-2xl text-black-500 hover:text-red-600 text-b">
          اتاق خبر{" "}
        </button>
        <button className="text-2xl text-black-500 hover:text-red-600 text-b">
          پشتیبانی
        </button>
      </nav>
      <div>
        <p className=" font-mono  text-black-500 text-center  pt-10">
          دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ<br></br>‌ اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت
          رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد
          <br></br>
          اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن
          ﺑﻪ دﯾﻮار
        </p>
        <div className="flex justify-center">
          <input
            dir="rtl"
            type="text"
            placeholder="جستجو شهر "
            className="w-170 border border-gray-300 mt-6 py-2 pr-4 rounded-lg"
          ></input>
        </div>
        <h2 dir="rtl" className="text-3xl text-black-500 mr-85 mt-10">
          شهرهای پربازدید
        </h2>
      </div>
      <div dir="rtl">
        <div className="flex items-center justify-between  px-10 py-10 mx-90 ">
          {/* <Image
            src={"/Tehran.jpg"}
            alt="Tehran"
            width={300}
            height={300}
          ></Image> */}
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row justify-between gap-6  mx-40 ">
        <Product
          name="Tehran"
          description="The capital of Iran"
          link="/Test"
          imageUrl="/Tehran.jpg"
        >
          <Link href={"/Map"} className="text-blue-600 font-bold text-1xl">
            Map
          </Link>
        </Product>
        <Product
          name="Rasht"
          description="Famous for its green nature and food"
          link="/Rasht"
          imageUrl="/Rasht.jpg"
        ></Product>
        <Product
          name="Shiraz"
          description="Known for poetry and beautiful gardens"
          link="/Shiraz"
          imageUrl="/Shiraz.jpg"
        ></Product>
        <Product
          name="Esfahan"
          description="Famous for its historic architecture"
          link="Esfahan"
          imageUrl="/Esfahan.jpg"
        ></Product>
      </div>

      <div className="flex  flex-col lg:flex-row justify-between gap-6  mx-40 mt-10">
        <FavoriteCityCarousel></FavoriteCityCarousel>
      </div>

      <div className="ml-40 ">
        <Button></Button>
      </div>
      <Textchat></Textchat>
      <div>
        
      </div>
    </div>
  );
}
