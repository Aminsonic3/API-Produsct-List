import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import { Switch } from "@/components/ui/switch";
import { Carousel } from "@/components/ui/carousel";
type Props = {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  children?: ReactNode;
};

function Product({ name, description, link, imageUrl, children }: Props) {
  return (
    <div className=" flex-col bg-blue-300  rounded-lg border-2 py-2 px-2 ">
      <h1 className="text-4xl text-black-500">{name}</h1>
      <p className="text-1xl text-gray-500">{description}</p>
      {children}
      <img src={imageUrl} alt={name} className="pt-4 py-2 w-300 h-50"></img>
      <Link href={link} className="text-black-500">
        <button className="text-blue-700 bg-blue-400 border-black-500 hover:bg-yellow-500 hover:text-red-500 border-2 rounded-lg py-4 px-4 ">
          Read about {name}
        </button>
      </Link>
      <Slider className={"mt-4"} defaultValue={[33]} max={100} step={1} />
      <Switch className={"mt-4"} />
      <Carousel></Carousel>
    </div>
  );
}
export default Product;
