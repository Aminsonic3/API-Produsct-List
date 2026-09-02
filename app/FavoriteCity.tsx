import Link from "next/link";
import { ReactNode } from "react";
import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  cityname: string;
  citydescription: string;
  citylink: string;
  cityimageUrl: string;
  children?: ReactNode;
};

function FavoriteCity({
  cityname,
  citydescription,
  citylink,
  cityimageUrl,
  children,
}: Props) {
  return (
    <div className=" flex flex-col  items-center bg-green-300  rounded-lg border-2 py-2 px-2">
      <h1 className="text-4xl text-blue-600">{cityname}</h1>
      <p className="text-1xl text-gray-500">{citydescription}</p>
      {children}
      <img
        src={cityimageUrl}
        alt={cityname}
        className="pt-4 py-2 w-300 h-50"
      ></img>
      <Link href={citylink} className="text-black-500">
        <button className="text-blue-700 bg-blue-400 border-black-500 hover:bg-yellow-500 hover:text-red-500 border-2 rounded-lg py-4 px-4 ">
          Read about {cityname}
        </button>
      </Link>
      <div>
        <ButtonGroup className="mt-4">
          <ButtonGroup>
            <Button
              className={"hover:text-blue-700 "}
              variant="outline"
              size="icon"
            >
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput placeholder="Send a message..." />
              <Tooltip>
                <TooltipTrigger
                  render={
                    <InputGroupAddon align="inline-end">
                      <AudioLinesIcon />
                    </InputGroupAddon>
                  }
                />
                <TooltipContent>Voice Mode</TooltipContent>
              </Tooltip>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default FavoriteCity;
