import Link from "next/link";
import { ChevronDownIcon, DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Bread() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={
                <Link className="text-4xl " href="/">
                  Home
                </Link>
              }
            />
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className=" text-4xl text-teal-400 flex items-center gap-1">
                    View Citis
                    <ChevronDownIcon
                      data-icon="inline-end"
                      className="size-3.5"
                    />
                  </button>
                }
              />
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className={'text-3xl text-lime-400 '}>Iran</DropdownMenuItem>
                  <DropdownMenuItem className={'text-3xl text-lime-400 '}>SPAIN</DropdownMenuItem>
                  <DropdownMenuItem className={'text-3xl text-lime-400 '}>AMERICA</DropdownMenuItem>
                  <DropdownMenuItem className={'text-3xl text-lime-400 '}>ENGLAND</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-4xl ">Best citis</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
export default Bread;
