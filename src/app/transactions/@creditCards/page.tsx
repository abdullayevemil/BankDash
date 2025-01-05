"use client";

import CreditCard from "@/components/dashboard/creditCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { type CreditCard as Card } from "@/types/creditCard";
import { getSession } from "next-auth/react";
import { User } from "@/types/user";

export default function CreditCards() {
  const [creditCards, setCreditCards] = useState<Card[]>([]);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchCreditCards = async () => {
      try {
        const session = await getSession();

        const userResponse = await axios.get(
          `/api/users?email=${session?.user.email}`
        );

        const currentUser = userResponse.data[0];

        setUser(currentUser ?? null);

        const response = await axios.get(
          `/api/creditCards?limit=2&userId=${currentUser?.id}`
        );

        if (response.status != 200) {
          throw new Error("Failed to fetch credit card details");
        }

        setCreditCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditCards();
  }, [setUser]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full sm:w-2/3">
      <div className="flex flex-row w-full justify-between">
        <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
          My Cards
        </div>

        <div className="font-inter text-sm md:sectionSubtitleTab lg:text-sectionSubtitle font-semibold flex justify-right items-center px-2 text-primary2">
          + Add Card
        </div>
      </div>

      <div className="flex flex-row gap-7 overflow-x-scroll w-full">
        <div className="flex flex-row gap-7 min-w-max sm:w-full">
          {creditCards.map((card) => (
            <CreditCard
              key={card.id}
              className="w-[65vw] sm:w-1/2"
              cardHolder={user?.name ?? "loading..."}
              balance={card.balance}
              validThru={card.validThru}
              cardNumber={`${card.number.slice(
                0,
                4
              )} **** **** ${card.number.slice(12, 16)}`}
              theme={card.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
