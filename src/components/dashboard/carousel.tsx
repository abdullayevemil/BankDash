import * as React from "react";
import Contact from "@/components/dashboard/contact";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UserContact } from "@/types/contact";

interface Props {
  contacts: UserContact[];
}

export function SmoothCarousel({ contacts }: Props) {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {contacts.map((contact, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-none border-0">
                <CardContent className="flex aspect-square items-center justify-center">
                  <Contact
                    imageUrl={contact.imageUrl}
                    name={contact.name}
                    position={contact.position}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
