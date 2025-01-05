"use client";

import CreditCard from "@/components/dashboard/creditCard";
import { type CreditCard as Card } from "@/types/creditCard";
import { User } from "@/types/user";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function CreditCards() {
  const [creditCard, setCreditCard] = useState<Card>();

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
          `/api/creditCards?userId=${currentUser?.id}`
        );

        if (response.status != 200) {
          throw new Error("Failed to fetch credit card details");
        }

        setCreditCard(response.data[response.data.length - 1]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditCards();
  }, [setUser]);

  return (
    <div className="flex flex-col w-full sm:w-1/3 gap-3 md:gap-4 lg:gap-5">
      <div className="flex flex-row w-full justify-between">
        <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
          My Card
        </div>

        <div className="font-inter text-sm md:sectionSubtitleTab lg:text-sectionSubtitle font-semibold flex justify-right items-center px-2 text-primary2">
          See All
        </div>
      </div>

      <CreditCard
        key={creditCard?.id}
        className="w-full"
        cardHolder={user?.name ?? "loading..."}
        balance={creditCard?.balance ?? 0}
        validThru={creditCard?.validThru ?? '--/--'}
        cardNumber={`${creditCard?.number.slice(0, 4)} **** **** ${creditCard?.number.slice(
          12,
          16
        )}`}
        theme={creditCard?.theme ?? 'lightBlueCard'}
      />
    </div>
  );
}
