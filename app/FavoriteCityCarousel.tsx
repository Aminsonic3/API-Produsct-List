"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import FavoriteCity from "./FavoriteCity"

type City = {
  cityname: string;
  citydescription: string;
  citylink: string;
  cityimageUrl: string;
};

const cities: City[] = [
  {
    cityname: "Barcelona",
    citydescription: "A beautiful city in Spain",
    citylink: "/cities/Barcelona",
    cityimageUrl: "/Barcelona.jpg",
  },
  {
    cityname: "LosAngeles",
    citydescription: "A famous American city known for Hollywood",
    citylink: "/cities/LosAngeles",
    cityimageUrl: "/LosAngeles.jpg",
  },
  {
    cityname: "London",
    citydescription: "The capital of the UK",
    citylink: "/cities/London",
    cityimageUrl: "/London.jpeg",
  },
]

export function FavoriteCityCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-sm sm:max-w-md">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {cities.map((city, index) => (
            <CarouselItem key={index}>
              <FavoriteCity
                cityname={city.cityname}
                citydescription={city.citydescription}
                citylink={city.citylink}
                cityimageUrl={city.cityimageUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}