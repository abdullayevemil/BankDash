"use client";

import * as React from "react";
import { SmoothCarousel } from "@/components/dashboard/carousel";
import { Card } from "@/components/ui/card";
import TransactionBar from "@/components/dashboard/transactionBar";
import { UserContact } from "@/types/contact";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CarouselSpacing() {
  const [contacts, setContacts] = useState<UserContact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get("/api/contacts");

      setContacts(response.data);
    };

    fetchContacts();
  }, [setContacts]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        Quick Transfer
      </div>

      <Card className="flex flex-col pb-6 py-9 items-center gap-7 justify-center w-full">
        <SmoothCarousel contacts={contacts} />

        <TransactionBar />
      </Card>
    </div>
  );
}
