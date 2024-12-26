import * as React from "react";
import { SmoothCarousel } from "@/components/dashboard/carousel";
import { UserContact } from "@/types/contact";
import { Card } from "@/components/ui/card";
import TransactionBar from "@/components/dashboard/transactionBar";

const contacts: UserContact[] = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Project Manager",
    imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    id: 2,
    name: "Michael Brown",
    position: "UI/UX Designer",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 3,
    name: "Sarah Davis",
    position: "Marketing Specialist",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "DevOps Engineer",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
  },
];

export default function CarouselSpacing() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">Quick Transfer</div>

      <Card className="flex flex-col pb-6 py-9 items-center gap-7 justify-center">
        <SmoothCarousel contacts={contacts} />

        <TransactionBar />
      </Card>
    </div>
  );
}
