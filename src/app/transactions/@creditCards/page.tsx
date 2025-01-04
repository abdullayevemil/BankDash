"use client";

import CreditCard from "@/components/dashboard/creditCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { type CreditCard as Card } from "@/types/creditCard";
import { getSession } from "next-auth/react";
import { User } from "@/types/user";

export default function CreditCards() {
  const [creditCards, setCreditCards] = useState<Card[]>([]);

  const [ user, setUser ] = useState<User>();

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
    <>
      <div className="flex flex-row w-2/3 gap-7">
        {creditCards.map((card) => (
          <CreditCard
            key={card.id}
            className="w-1/2"
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
    </>
  );
}
